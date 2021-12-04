import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            <ul>{blogs.map((blog) => (
                <div key={blog.id} className="blog-preview">
                    <Link to={`/blogs/${blog.id}`}>
                        <h4>{blog.title}</h4>
                        <p>by: {blog.author}</p>
                    </Link>
                </div>
            ))}
            </ul>
        </div>
    );
}
 
export default BlogList
