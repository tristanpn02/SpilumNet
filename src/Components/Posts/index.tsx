import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchPosts } from '../../api/jsonPlaceholder';

import './styles.css';

interface Post {
    id: number;
    title: string;
    userId: number;
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                setError('Failed to fetch posts');
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="posts">
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.title}</h3>
                            <p>{post.userId}</p> {/* Link to user */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;