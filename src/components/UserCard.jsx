import React, { useState, useContext } from 'react';
import { AppContext } from '../context/ThemeContext';

const UserCard = ({ user }) => {
const [likes, setLikes] = useState(0);
const [isFollowed, setIsFollowed] = useState(false);

const { incrementTotalLikes } = useContext(AppContext);

const handleLike = () => {
    setLikes(likes + 1);
    incrementTotalLikes(); 
};

return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '15px', boxShadow: '2px 2px 8px rgba(0,0,0,0.1)', width: '280px', backgroundColor: '#fff', color: '#333' }}>
        {}
        <h3 style={{ margin: '0 0 10px 0' }}>{user.name}</h3>
        <p style={{ color: '#555', margin: '5px 0' }}>👤 @{user.username}</p>
        <p style={{ color: '#777', fontSize: '14px', margin: '5px 0' }}>📧 {user.email}</p>

        <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        {}
        <button onClick={handleLike} style={{ cursor: 'pointer', padding: '8px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px' }}>
            ❤️ Like ({likes})
        </button>

        {}
        <button onClick={() => setIsFollowed(!isFollowed)} style={{ cursor: 'pointer', padding: '8px', background: isFollowed ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            {isFollowed ? '✅ Followed' : '➕ Follow'}
        </button>
        </div>
    </div>
    );
};

export default UserCard;