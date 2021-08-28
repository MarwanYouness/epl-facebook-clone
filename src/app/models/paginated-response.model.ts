export interface PaginationInfo {
    pages: number
}
export interface PaginatedResponse<T> {
    paginationInfo: PaginationInfo;
    data: T;
}