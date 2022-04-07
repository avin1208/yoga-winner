import React from "react";

import './blog.styles.scss';

import { Link } from "react-router-dom";

const Blog = ({ item }) => {
    const { title, subtitle, imageUrl, description } = item;
    return (
        <div className="main-blog">
            <div className="back-img" style={{ backgroundImage: `url(${imageUrl})` }}>            
            </div>
            <div className="blog-title">
             <Link className="titl" to='/'>{title}</Link>
             <span className="sub">{subtitle}</span>
            </div>
            <div className="desc">
             <h4>
             {description}
             </h4>
            </div>
        </div>
    );
};

export default Blog;