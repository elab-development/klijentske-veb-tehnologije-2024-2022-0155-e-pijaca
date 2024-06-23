import React, { useEffect, useState } from 'react';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<{ name: string, email: string, password: string | null }>({ name: '', email: '', password: null });

  useEffect(() => {
    const name = sessionStorage.getItem('userName');
    const email = sessionStorage.getItem('userEmail');
    const password = sessionStorage.getItem('userPassword');
    if (name && email) {
      setUser({ name, email, password });
    }
  }, []);

  return (
    <div className='profil-p'>
      <h1>Profil korisnika</h1>
      <p>Ime: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
