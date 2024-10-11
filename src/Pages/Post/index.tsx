import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchPost } from "../../api/jsonPlaceholder";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const Post = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPost = async () => {
            try {
                const data = await fetchPost(id);
                setPost(data);
            } catch (error) {
                setError('Failed to fetch post');
            } finally {
                setLoading(false);
            }
        }

        getPost();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (!post) return <p>No post found.</p>;

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.userId}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;