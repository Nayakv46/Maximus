import { React } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { PageBanner } from '../../containers';
import './signUp.css';


const SignUp = () => {
    
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
    <PageBanner page="Sign Up" />
    <section className="maximus__signup">
        <div className="maximus__signup-content">
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                </label>
                <input type="email" placeholder="maximus@maxmail.com" />
                <label>Password</label>
                <input type="password" placeholder='password' />
                <button type="submit">Sign Up</button>
            </form>

            <div className="maximus__signup-content_info">
                <p>Already have an account? <Link to='/login'>Sign In</Link></p>
                <span>( Make <p>new Account</p> or go to <p>Sign In</p> Page to Log In )</span>
            </div>
        </div>
    </section>
    </>
  )
}

export default SignUp