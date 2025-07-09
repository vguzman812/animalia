# Backend Improvement Suggestions

## 1. Input Validation with Zod

**Description**: Add comprehensive request validation using Zod for type-safe validation and better error messages.

**Files to modify:**
- `middleware/validation.ts` (new) - Zod validation middleware
- `routes/userRoutes.ts` - Add validation to user routes
- `routes/factRoutes.ts` - Add validation to fact routes
- `package.json` - Add zod dependency

**Implementation:**
```typescript
// middleware/validation.ts
import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const userRegisterSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(100)
});

const factCreateSchema = z.object({
  animal: z.string().min(2).max(50),
  text: z.string().min(10).max(1000),
  source: z.string().url().optional()
});

export const validate = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: 'Validation error',
          errors: error.errors
        });
      }
      next(error);
    }
  };
};
```

## 2. Redis Caching Layer

**Description**: Implement Redis caching for frequently accessed facts and user sessions.

**Files to modify:**
- `config/redis.ts` (new) - Redis configuration
- `middleware/cache.ts` (new) - Cache middleware
- `controllers/factController.ts` - Add caching to fact operations
- `package.json` - Add redis dependency

**Implementation:**
```typescript
// config/redis.ts
import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD
});

export default redis;

// middleware/cache.ts
export const cacheMiddleware = (duration: number = 300) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const key = `cache:${req.originalUrl}`;
    const cached = await redis.get(key);
    
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    
    const originalJson = res.json;
    res.json = function(data) {
      redis.setex(key, duration, JSON.stringify(data));
      return originalJson.call(this, data);
    };
    
    next();
  };
};
```

## 3. API Rate Limiting

**Description**: Implement rate limiting per user/IP to prevent abuse.

**Files to modify:**
- `middleware/rateLimiter.ts` (new) - Rate limiting middleware
- `server.ts` - Apply rate limiting globally
- `package.json` - Add express-rate-limit dependency

**Implementation:**
```typescript
// middleware/rateLimiter.ts
import rateLimit from 'express-rate-limit';

export const globalRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // limit login attempts
  message: 'Too many login attempts'
});

export const createRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit fact creation
  message: 'Too many facts created'
});

// server.ts addition
app.use('/api/', globalRateLimit);
app.use('/api/users/login', authRateLimit);
app.use('/api/facts/create', createRateLimit);
```

## 4. Password Policies

**Description**: Enforce strong password requirements with validation.

**Files to modify:**
- `utils/passwordPolicy.ts` (new) - Password validation utility
- `controllers/userController.ts` - Add password validation
- `middleware/validation.ts` - Update user validation schema

**Implementation:**
```typescript
// utils/passwordPolicy.ts
export const validatePassword = (password: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Updated validation schema
const userRegisterSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().refine(
    (password) => validatePassword(password).valid,
    (password) => ({
      message: validatePassword(password).errors.join(', ')
    })
  )
});
```

## 5. Account Lockout Protection

**Description**: Implement account lockout after failed login attempts.

**Files to modify:**
- `models/User.ts` - Add lockout fields to user model
- `controllers/userController.ts` - Add lockout logic
- `middleware/accountLockout.ts` (new) - Lockout middleware

**Implementation:**
```typescript
// Add to User model
interface IUser {
  // ... existing fields
  loginAttempts: number;
  lockUntil: Date | null;
  isLocked: boolean;
}

// middleware/accountLockout.ts
export const checkAccountLockout = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  
  if (!email) {
    return next();
  }
  
  const userRepository = DatabaseManager.getInstance().getUserRepository();
  const user = await userRepository.findByEmail(email);
  
  if (user && user.isLocked && user.lockUntil && user.lockUntil > new Date()) {
    const remainingTime = Math.ceil((user.lockUntil.getTime() - Date.now()) / 1000 / 60);
    return res.status(423).json({
      message: `Account is locked. Try again in ${remainingTime} minutes.`
    });
  }
  
  next();
};

// In userController.ts authUser function
const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 30 * 60 * 1000; // 30 minutes

if (user && await bcrypt.compare(password, user.password)) {
  // Reset login attempts on successful login
  await userRepository.updateLoginAttempts(user._id, 0, null);
  // ... existing success logic
} else {
  if (user) {
    const attempts = user.loginAttempts + 1;
    const lockUntil = attempts >= MAX_LOGIN_ATTEMPTS ? new Date(Date.now() + LOCK_TIME) : null;
    await userRepository.updateLoginAttempts(user._id, attempts, lockUntil);
  }
  // ... existing error logic
}
```

## 6. Request Tracing with Correlation IDs

**Description**: Add correlation IDs to track requests across the system.

**Files to modify:**
- `middleware/requestTracing.ts` (new) - Correlation ID middleware
- `middleware/errorHandler.ts` - Include correlation ID in error responses
- `server.ts` - Apply tracing middleware

**Implementation:**
```typescript
// middleware/requestTracing.ts
import { v4 as uuidv4 } from 'uuid';

export const requestTracing = (req: Request, res: Response, next: NextFunction) => {
  const correlationId = req.headers['x-correlation-id'] || uuidv4();
  
  req.correlationId = correlationId;
  res.setHeader('X-Correlation-ID', correlationId);
  
  // Override console.log to include correlation ID
  const originalLog = console.log;
  console.log = (...args) => {
    originalLog(`[${correlationId}]`, ...args);
  };
  
  next();
};

// Update errorHandler.ts
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let error = { ...err };
  error.message = err.message;
  
  console.error(`Error: ${error.message}`);
  
  // Include correlation ID in error response
  res.status(error.statusCode || 500).json({
    message: error.message || 'Server Error',
    correlationId: req.correlationId
  });
};
```

## 7. Bulk Operations

**Description**: Add bulk create/update/delete endpoints for facts.

**Files to modify:**
- `controllers/factController.ts` - Add bulk operation functions
- `routes/factRoutes.ts` - Add bulk operation routes
- `database/repositories/IFactRepository.ts` - Add bulk methods

**Implementation:**
```typescript
// Add to IFactRepository.ts
interface IFactRepository {
  // ... existing methods
  createMany(facts: IFact[]): Promise<IFact[]>;
  updateMany(ids: string[], updates: Partial<IFact>): Promise<number>;
  deleteMany(ids: string[]): Promise<number>;
}

// Add to factController.ts
export const createFactsBulk = async (req: Request, res: Response) => {
  const { facts } = req.body;
  const authReq = req as IAuthRequest;
  
  if (!Array.isArray(facts) || facts.length === 0) {
    res.status(400);
    throw new Error('Facts array is required');
  }
  
  if (facts.length > 100) {
    res.status(400);
    throw new Error('Maximum 100 facts allowed per bulk operation');
  }
  
  const factsWithUser = facts.map(fact => ({
    ...fact,
    userId: authReq.user._id
  }));
  
  const factRepository = DatabaseManager.getInstance().getFactRepository();
  const createdFacts = await factRepository.createMany(factsWithUser);
  
  res.status(201).json({
    message: `${createdFacts.length} facts created successfully`,
    facts: createdFacts
  });
};

// Add to factRoutes.ts
router.route('/bulk/create').post(asyncHandler(protect), asyncHandler(createFactsBulk));
router.route('/bulk/update').put(asyncHandler(protect), asyncHandler(updateFactsBulk));
router.route('/bulk/delete').delete(asyncHandler(protect), asyncHandler(deleteFactsBulk));
```

## Implementation Priority

1. **Input Validation** - Essential for security and data integrity
2. **Rate Limiting** - Important for API protection
3. **Password Policies** - Critical for security
4. **Account Lockout** - Security enhancement
5. **Request Tracing** - Helpful for debugging and monitoring
6. **Caching Layer** - Performance optimization
7. **Bulk Operations** - Feature enhancement

## Dependencies to Add

```json
{
  "dependencies": {
    "zod": "^3.22.4",
    "express-rate-limit": "^7.1.5",
    "ioredis": "^5.3.2"
  }
}
```

Each suggestion requires minimal file changes (≤5 files) and can be implemented incrementally without breaking existing functionality.