import {useMemo} from "react";

export const useSorted = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            console.log('FUNCTION IS WORKING FUCKCKCKCK')
            return [...posts].sort((a, b) =>
                a[sort].localeCompare(b[sort])
            )
        }
        return posts;
    }, [sort, posts])
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts =  useSorted(posts, sort)

    const searchedPosts = useMemo( () => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase())
            || post.content.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts] )

    return searchedPosts;
}