import React, { useState, useEffect } from "react";

import Blog from "../blog/blog.component";

// import BLOG_DATA from "../../blog.data";

import './blog-display.styles.scss'


const BlogDisplay = () => {

     const [blog, setBlog] = useState([]);

    const getBlog = async () => {
        const response = await fetch("https://winner-yoga.herokuapp.com/customer/get-blog")
        
        const data = await response.json();
        // console.log(data.blog);
        setBlog(data.blog)

    }

    useEffect(() => {
        getBlog();
    });

    return (
        <div className="blog-display">
            <div className="display-title">
                <h1>
                    FROM THE BLOG
                </h1>
                <p>
                    Latest New of Week
                </p>
            </div>
            {
                blog.map((item) => (<Blog key={item.id} item={item} />
                ))
            }
        </div>
    );
};

export default BlogDisplay;