import React from 'react';
import '../../css/LoginSignup.css';
import { Link } from 'react-router-dom'; 

const LoginSignup: React.FC = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fileds">
          <input type="text" placeholder='Ime:' />
          <input type="email" placeholder='Email:' />
          <input type="password" placeholder='Sifra:' />
          <button>Nastavite</button>
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
          <input type="checkbox" name='' id='' />
          <p>Slazem se sa uslovima koriscenja</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
