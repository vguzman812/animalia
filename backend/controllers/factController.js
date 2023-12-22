import asyncHandler from '../middleware/asyncHandler.js';
import Fact from '../models/factModel.js';

/**
 * @description Fetch all products
 * @route       GET /api/facts
 * @access      Public
 */
const getFacts = asyncHandler(async (req, res) => {
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        animal: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Fact.countDocuments({ ...keyword });
  const facts = await Fact.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 });
  res.status(200).json({ facts, page, pages: Math.ceil(count / pageSize) });
});

/**
 * @description Fetch one product by id
 * @route       GET /api/facts/:id
 * @access      Public
 */
const getFactById = asyncHandler(async (req, res) => {
  const fact = await Fact.findById(req.params.id);
  if (fact) {
    res.status(200).json(fact);
  } else {
    res.status(404);
    throw new Error('Resource not found.');
  }
});
/**
 * @description Get top liked facts
 * @route       GET /api/facts/top
 * @access      Public
 */
const getTopFacts = asyncHandler(async (req, res) => {
  // Sorting facts by the number of likes in descending order and limiting to top 3
  const facts = await Fact.find({}).sort({ likes: -1 }).limit(3);

  res.status(200).json(facts);
});

/**
 * @description Create fact
 * @route       POST /api/facts/create
 * @access      Private
 */
const createFact = asyncHandler(async (req, res) => {
  const { animal, source, text, media, wiki } = req.body;

  // Assuming that req.user._id is available (i.e., user is authenticated)
  if (req.user && req.user._id) {
    const fact = new Fact({
      user: req.user._id,
      animal,
      source,
      text,
      media,
      wiki,
    });

    const createdFact = await fact.save();

    res.status(201).json(createdFact);
  } else {
    res.status(401);
    throw new Error('User not authorized');
  }
});

/**
 * @description Get all facts from a certain user
 * @route       GET /api/facts/user/:userId
 * @access      Public
 */
const getFactsByUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  // Find facts by user ID
  const count = await Fact.countDocuments({ user: userId });
  const facts = await Fact.find({ user: userId })
    .sort({ createdAt: -1 })

    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (facts) {
    res.status(200).json({
      facts,
      page,
      pages: Math.ceil(count / pageSize),
    });
  } else {
    res.status(404);
    throw new Error('Facts or user not found.');
  }
});

/**
 * @description Edit fact
 * @route       PUT /api/facts/:id
 * @access      Private
 */
const updateFact = asyncHandler(async (req, res) => {
  const { animal, source, text, media, wiki } = req.body;

  const fact = await Fact.findById(req.params.id);

  if (fact) {
    // Authorization check: Make sure the user owns the fact they are trying to update
    if (fact.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('User not authorized to edit this fact');
    }

    // Update fields
    fact.animal = animal || fact.animal;
    fact.source = source || fact.source;
    fact.text = text || fact.text;
    fact.media = media || fact.media;
    fact.wiki = wiki || fact.wiki;

    const updatedFact = await fact.save();

    res.status(200).json(updatedFact);
  } else {
    res.status(404);
    throw new Error('Resource not found.');
  }
});
/**
 * @description Delete one fact
 * @route       DELETE /api/facts/:id
 * @access      Private
 */
const deleteFact = asyncHandler(async (req, res) => {
  const fact = await Fact.findById(req.params.id);

  if (fact) {
    // Authorization check: Make sure the user owns the fact they are trying to delete
    if (fact.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('User not authorized to delete this fact');
    }

    await Fact.deleteOne({ _id: fact._id }).catch((err) => {
      res.status(500);
      throw new Error('Internal Server Error');
    });

    res.status(200).json({ message: 'Fact deleted.' });
  } else {
    res.status(404);
    throw new Error('Resource not found.');
  }
});

/**
 * @description Like/Unlike a fact
 * @route       POST /api/facts/:id/like
 * @access      Private
 */
const likeFact = asyncHandler(async (req, res) => {
  const fact = await Fact.findById(req.params.id);

  if (fact) {
    // Check if the user has already liked this fact
    const alreadyLiked = fact.likes.some((likeId) => likeId.toString() === req.user._id.toString());

    if (alreadyLiked) {
      // Remove the like
      fact.likes = fact.likes.filter((likeId) => likeId.toString() !== req.user._id.toString());
    } else {
      // Add the like
      fact.likes.push(req.user._id);
    }

    await fact.save();
    res.status(200).json(fact);
  } else {
    res.status(404);
    throw new Error('Resource not found.');
  }
});

export {
  getFactById,
  getFacts,
  createFact,
  getFactsByUser,
  updateFact,
  deleteFact,
  likeFact,
  getTopFacts,
};
