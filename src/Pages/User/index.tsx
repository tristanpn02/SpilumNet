import { useEffect, useState } from "react";
import { fetchUser } from "../../api/jsonPlaceholder";
import { useParams } from "react-router-dom";

import './styles.css';

const User = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUser(id);
                setUser(data);
            } catch (error) {
                setError('Failed to fetch user');
            } finally {
                setLoading(false);
            }
        }

        getUser();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (!user) return <p>No user found.</p>;

    return (
        <div className="user">
            <h2>{user.username}</h2>
            <p>
                Name: {user.name}<br />
                Email: {user.email}<br />
                ID: {user.id}<br />
            </p>
        </div>
    )
}

export default User;