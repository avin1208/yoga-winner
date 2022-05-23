import React from "react";

import './blog.styles.scss';

import { Link } from "react-router-dom";

const Blog = ({ item }) => {
    const { title, subtitle, image, description } = item;
    return (
        <div className="main-blog">
            <div className="back-img" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="blog-mainn">
                <div className="img-st">
                    <p className="date">08</p>
                    <p className="month">MAR</p>
                </div>
                <div className="sub-main">
                    <div className="blog-title">
                        <Link className="titl" to='/'>{title}</Link>
                    </div>
                    <div className="sub">
                        {subtitle}</div>
                    <div className="desc">
                        <h4>
                            {description}
                        </h4>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Blog;

