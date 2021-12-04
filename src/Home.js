import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

// let blogData = [
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
// ]

// 'http://localhost:8000/blogs'

const Home = () => {
    
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw Error('Could not fetch data.')
    //             }
    //             return res.json()
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setBlogs(data)
    //             setIsLoading(false)
    //         })
    //         .catch((err) => {
    //             setError(err.message)
    //             setIsLoading(false)
    //         })
    //     }, 1000)

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="Blog Posts" />}
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error} Try reloading</div>}
        </div>
    );
}
 
export default Home;