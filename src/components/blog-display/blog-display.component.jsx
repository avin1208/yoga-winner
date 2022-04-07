import React, { useState } from "react";

import Blog from "../blog/blog.component";

import BLOG_DATA from "../../blog.data";


const BlogDisplay = () => {
    const [blogdata] = useState(BLOG_DATA);
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
                blogdata.map((item) => (<Blog key={item.id} item={item} />
                ))
            }
        </div>
    );
};

export default BlogDisplay;