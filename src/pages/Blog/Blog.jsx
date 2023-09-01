import React from 'react'
import './blog.css';

import { PageBanner } from '../../containers';
import { BlogArticle } from '../../components';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { MdKeyboardArrowRight } from 'react-icons/md';

import blogside_revolution from '../../assets/BlogImages/blogside-revolution.jfif';
import blogside_boxing from '../../assets/BlogImages/blogside-boxing.jfif';
import blogside_grace from '../../assets/BlogImages/blogside-grace.jfif';
import blogside_crossfit from '../../assets/BlogImages/blogside-crossfit.jfif';
import blogside_yoga from '../../assets/BlogImages/blogside-yoga.jfif';

const Blog = () => {
  return (
    <>
    <PageBanner page="Blog" />
    <section className="maximus__blog">
        <div className="maximus__blog-content">
            <div className="maximus__blog-content_articles">
                <BlogArticle 
                    id="1"
                    title="Yoga For Everyone in 2023"
                    date="January 17, 2023"
                    category="Yoga"
                    creator="Grace Bailey"
                />

                <BlogArticle 
                    id="2"
                    title="Revolution with the New Year Resolution"
                    date="December 22, 2022"
                    category="Body Building"
                    creator="Larry Wheels"
                />

                <BlogArticle 
                    id="3"
                    title="Getting Back Into CrossFit After Vacation"
                    date="September 13, 2022"
                    category="CrossFit"
                    creator="Conrad Walker"
                />

                <BlogArticle 
                    id="4"
                    title="Meet Fitness Ambassador Grace"
                    date="March 22, 2022"
                    category="Body Building"
                    creator="Shawn Ray"
                />

                <BlogArticle 
                    id="5"
                    title="Learn Boxing With Our Trainer Mike"
                    date="February 21, 2022"
                    category="Boxing"
                    creator="Chris Bumstead"
                />
            </div>

            <div className="maximus__blog-content_side">
                <div className="maximus__blog-content_side-search">
                    <input tpye="text" placeholder="Search..." />
                    <button type="button"><FaMagnifyingGlass /></button>
                </div>

                <div className="maximus__blog-content_side-categories">
                    <h3>Categories</h3>
                    <span></span>
                    <div className="blog-side_category">
                        <p><MdKeyboardArrowRight size={24} />Body Building</p>
                        <span>(2)</span>
                    </div>

                    <div className="blog-side_category">
                        <p><MdKeyboardArrowRight size={24} />Boxing</p>
                        <span>(3)</span>
                    </div>

                    <div className="blog-side_category">
                        <p><MdKeyboardArrowRight size={24} />Crossfit</p>
                        <span>(1)</span>
                    </div>

                    <div className="blog-side_category">
                        <p><MdKeyboardArrowRight size={24} />Meditation</p>
                        <span>(2)</span>
                    </div>

                    <div className="blog-side_category">
                        <p><MdKeyboardArrowRight size={24} />Yoga</p>
                        <span>(4)</span>
                    </div>
                </div>

                <div className="maximus__blog-content_side-recent">
                    <h3>Recent Posts</h3>
                    <span></span>
                    <div className="blog-side_recentpost">
                        <img src={blogside_yoga} alt="postimg" />
                        <div className="blog-side_recentpost-info">
                            <p>January 17, 2023</p>
                            <h4>Yoga For Everyone in 2023</h4>
                        </div>
                    </div>

                    <div className="blog-side_recentpost">
                        <img src={blogside_revolution} alt="postimg" />
                        <div className="blog-side_recentpost-info">
                            <p>December 22, 2022</p>
                            <h4>Revolution with the New Year Resolution</h4>
                        </div>
                    </div>

                    <div className="blog-side_recentpost">
                        <img src={blogside_crossfit} alt="postimg" />
                        <div className="blog-side_recentpost-info">
                            <p>September 13, 2022</p>
                            <h4>Getting Back Into CrossFit After Vacation</h4>
                        </div>
                    </div>

                    <div className="blog-side_recentpost">
                        <img src={blogside_grace} alt="postimg" />
                        <div className="blog-side_recentpost-info">
                            <p>March 22, 2022</p>
                            <h4>Meet Fitness Ambassador Grace</h4>
                        </div>
                    </div>

                    <div className="blog-side_recentpost">
                        <img src={blogside_boxing} alt="postimg" />
                        <div className="blog-side_recentpost-info">
                            <p>February 21, 2022</p>
                            <h4>Learn Boxing With Our Trainer John</h4>
                        </div>
                    </div>
                </div>

                <div className="maximus__blog-content_side-tags">
                    <h3>Popular Tags</h3>
                    <span></span>
                    <div className="blog-side_taglist">
                        <p>#Crossfit</p>
                        <p>#Fitness</p>
                        <p>#Gym</p>
                        <p>#Meditation</p>
                        <p>#Running</p>
                        <p>#Workout</p>
                        <p>#Yoga</p>
                        <p>#Boxing</p>
                    </div>
                </div>

                <div className="maximus__blog-content_side-ad">
                    <p>MAXIMUS</p>
                    <span></span>
                    <div className="maximus__blog-content_side-ad_disc">
                        <p>34%</p>
                        <p>Flat Discount</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog