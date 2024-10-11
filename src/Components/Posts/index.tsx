import { useEffect, useState } from "react";
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
    const [users, setUsers] = useState<{ [key: number]: User }>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch posts and batch fetch user details
    useEffect(() => {
        const getPostsAndUsers = async () => {
            try {
                const postsData = await fetchPost();
                setPosts(postsData);

                const userIds = Array.from(new Set(postsData.map(post => post.userId)));
                
                // Fetch all users in parallel
                const usersData = await Promise.all(userIds.map(id => fetchUser(id)));
                
                // Convert array of users to an object with userId as keys
                const usersMap = usersData.reduce((acc, user) => {
                    acc[user.id] = user;
                    return acc;
                }, {} as { [key: number]: User });

                setUsers(usersMap);
            } catch (error) {
                setError('Failed to fetch posts or users');
            } finally {
                setLoading(false);
            }
        };

        getPostsAndUsers();
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
                        
                        {users[post.userId] ? (
                            <Link to={`/user/${post.userId}`}>
                                By {users[post.userId].name}
                            </Link>
                        ) : (
                            <p>Loading user...</p>
                        )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
