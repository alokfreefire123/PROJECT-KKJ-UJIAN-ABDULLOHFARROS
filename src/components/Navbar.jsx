import React, { useContext } from 'react';
import { AppContext } from '../context/ThemeContext';

const Navbar = () => {
    const { totalLikes } = useContext(AppContext);

return (
    <nav style={{ padding: '15px', background: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h2>Sosmed Nusantara</h2>
        <div>
        <span>❤️ Total Likes App: {totalLikes}</span>
        </div>
    </nav>
    );
};

export default Navbar;