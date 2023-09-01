import React from 'react'
import './blogArticle.css';

import blogArticleImage1 from '../../assets/BlogImages/blogarticleimg1.jpg';
import blogArticleImage2 from '../../assets/BlogImages/blogarticleimg2.jpg';
import blogArticleImage3 from '../../assets/BlogImages/blogarticleimg3.jpg';
import blogArticleImage4 from '../../assets/BlogImages/blogarticleimg4.jpg';
import blogArticleImage5 from '../../assets/BlogImages/blogarticleimg5.jpg';

import { FaLayerGroup } from 'react-icons/fa6';

import { MdKeyboardArrowRight } from 'react-icons/md';

const imageHandler = (id) => {
    switch(id){
        case '1':
            return blogArticleImage1;
        case '2':
            return blogArticleImage2;
        case '3':
            return blogArticleImage3;
        case '4':
            return blogArticleImage4;
        case '5':
            return blogArticleImage5;
        default:
            return;
    }
}

const BlogArticle = (props) => {
  return (
    <div className="blogArticle">
        <img src={imageHandler(props.id)} alt="blog-img"/>
        <div className="blogArticle-content">
        <p><FaLayerGroup />By <b>{props.creator}</b> | {props.date} | {props.category}</p>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat tempora debitis doloribus veniam ut ipsa! Odio, excepturi. Ipsum nulla odit obcaecati eum cum architecto aperiam aliquid laudantium minima rerum.</p>
        <a href="/blog">PURCHASE NOW <MdKeyboardArrowRight size={26} /></a>
        </div>
    </div>
  )
}

export default BlogArticle