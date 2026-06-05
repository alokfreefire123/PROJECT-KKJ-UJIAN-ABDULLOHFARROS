import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Footer from './components/Footer';
import { AppProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);         
  const [search, setSearch] = useState("");        
  const inputRef = useRef(null);                   


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data)) 
      .catch(err => console.log("Gagal mengambil data:", err));

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const filteredUsers = users.filter(user => 
    user.name && user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppProvider>
      <div style={{ backgroundColor: '#f4f4f9', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
        <Navbar />
        
        <main style={{ flex: 1, padding: '20px' }}>
          {/* Fitur Search */}
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <input 
              ref={inputRef} 
              type="text" 
              placeholder="Cari nama user..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: '10px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          {}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <UserCard key={user.id} user={user} />
              ))
            ) : (
              <p>User tidak ditemukan...</p>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;