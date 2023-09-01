import React from 'react';
import './contact.css';

import { PageBanner } from '../../containers';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa6';

const Contact = () => {
  return (
    <>
    <PageBanner page="Contact Us" />
    <section className="maximus__contact">
        <div className="maximus__contact-content">

            <div className="maximus__contact-content_info">
                <h2>We are here to help you! To Shape Your Body.</h2>

                <p>At Maximus, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>

                <div className="maximus__contact-content_info-details">
                    <div className="maximus__contact-content_info-details_location">
                        <h3>Opole, Poland</h3>
                        <span></span>
                        <p>
                            Armii Krajowej 9 <br/>
                            Opole, Poland
                        </p>
                    </div>

                    <div className="maximus__contact-content_info-details_hours">
                        <h3>Opening Hours</h3>
                        <span></span>
                        <p>
                            Mon - Fri: 7:00 am - 9:00pm <br/>
                            Sat: 7:00 am - 7:00pm
                        </p>
                    </div>

                    <div className="maximus__contact-content_info-details_contact">
                        <h3>Information</h3>
                        <span></span>
                        <p>
                            +48 123-456-789 <br/>
                            maximus@maxmail.com
                        </p>
                    </div>

                    <div className="maximus__contact-content_info-details_socials">
                        <h3>Follow Us On</h3>
                        <span></span>
                        <div className='maximus__contact-content_info-details_socials-icons'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>

            <div className="maximus__contact-content_form">
                <form>
                    <h3>Leave Us Your Info</h3>
                    <span></span>
                    <input type="text" placeholder="Full Name *" />
                    <input type="email" placeholder="Email Address *" />
                    <select>
                        <option>Select Class</option>
                        <option>Body Building</option>
                        <option>Boxing</option>
                        <option>Running</option>
                        <option>Fitness</option>
                        <option>Yoga</option>
                        <option>Workout</option>
                        <option>Karate</option>
                        <option>Meditation</option>
                        <option>Cycling</option>
                    </select>
                    <textarea placeholder="Comment"></textarea>
                    <button type="submit">SUBMIT NOW</button>
                </form>
            </div>
        </div>

        <div className="maximus__contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          style={{ width: "100%", height: "450px", border: "0px" }}
        ></iframe>
        </div>
    </section>
    </>
  )
}

export default Contact