import { React } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { PageBanner } from '../../containers';
import './signIn.css';


const SignIn = () => {
    
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        navigate("/");
      } catch (error) {
        console.log(error);
      }
  };

  const navigate = useNavigate();

  return (
    <>
    <PageBanner page="Sign In" />
    <section className="maximus__signin">
        <div className="maximus__signin-content">
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                </label>
                <input type="email" placeholder="maximus@maxmail.com" />
                <label>Password</label>
                <input type="password" placeholder='password' />
                <button type="submit">Sign In</button>
            </form>

            <div className="maximus__signin-content_info">
                <p>New to Maximus? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    </section>
    </>
  )
}

export default SignIn