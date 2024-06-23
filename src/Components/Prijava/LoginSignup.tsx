import React, { useState } from 'react';
import '../../css/LoginSignup.css';
import { Link } from 'react-router-dom';
import WeatherForecast from '../WeatherForecast';

const LoginSignup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('userEmail', email);
    sessionStorage.setItem('userPassword', password);
    console.log('Registrovan sa:', { name, email, password });
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fileds">
          <input
            type="text"
            placeholder='Ime:'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email:'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Sifra:'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <button onClick={handleSignup}>Nastavite</button>
          </Link>
          
        </div>
        <p className='loginsigunp-login'>
          Vec imate nalog?
          <span>
            <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
              <button className='btn1'>Login</button>
            </Link>
          </span>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
          />
          <p>Slažem se sa uslovima korišćenja</p>
        </div>
      </div>
      <div className="prognoza">
        <WeatherForecast/>
      </div>
    </div>
  );
}

export default LoginSignup;


