import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login'); // Redirect if no user is logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: '100vh' }}
    >
      <h1 className="mb-4">Welcome, {user?.name || user?.email}!</h1>
      <p className="text-muted">You're successfully logged in.</p>
      <Button variant="success" onClick={handleLogout}>
        Ok
      </Button>
    </div>
  );
};

export default Welcome;
