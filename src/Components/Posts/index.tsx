import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchPost, fetchUser } from '../../api/jsonPlaceholder';

import './styles.css';

interface User {
    id: number;
    name: string;
}

interface Post {
    id: number;
    title: string;
    userId: number;
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<{ [key: number]: User}>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getUser = async (userId: number) => {
        if (!users[userId]) {
            try {
                const data = await fetchUser(userId);
                setUsers(prevUsers => ({
                    ...prevUsers,
                    [userId]: data
                }));
            } catch (error) {
                setError('Failed to fetch user');
            }
        }
    }

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPost();
                setPosts(data);

                for (const post of data) {
                    await getUser(post.userId);
                }
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
                            <p>
                                {users[post.userId]
                                    ? `By ${users[post.userId].name}`
                                    : `Loading user...`
                                }
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;