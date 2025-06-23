export default interface PaginateType {
    pages: number;
    currentPage: number;
    isAdmin?: boolean;
    facts?: boolean;
    keyword?: string;
}
