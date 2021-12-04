import { useParams, useHistory } from "react-router-dom";

import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()

    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault()

        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: "DELETE"
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleClick}>Delete</button>
                </article>)}
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error} Try reloading</div>}
        </div>
    );
}
 
export default BlogDetails;