import React from 'react';
import '../../css/LoginSignup.css';

const Login: React.FC = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fileds">
          <input type="email" placeholder='Email:' />
          <input type="password" placeholder='Sifra:' />
          <button>Nastavite</button>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
