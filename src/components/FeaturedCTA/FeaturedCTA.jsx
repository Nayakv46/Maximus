import React from 'react'
import { Link } from 'react-router-dom';
import './featuredCTA.css';

const FeaturedCTA = () => {
  return (
    <div className="maximus__featuredCTA">
        <div className="maximus__featuredCTA-content">
            <h2>We Are Always Providing Best Fitness Service For You</h2>
            <Link to="/contact">JOIN WITH US</Link>
        </div>
    </div>
  )
}

export default FeaturedCTA