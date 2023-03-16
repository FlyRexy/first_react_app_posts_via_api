export const getPageCount = (totalPosts, limit) => {
    return Math.ceil(totalPosts / limit)
}