import React, { useState } from "react";

import PRODUCT_DATA from "../../product.data";

import Paginat from "../pagelogic/pagelogic.component";

import Posts from "../postlogic/postlogic.component";

const Page = () => {
    const [posts] = useState(PRODUCT_DATA);
    const [currentPage, setCurrentPage] = useState([]);
    const [postsPerPage] = useState(4);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='wer'>
            <Posts posts={currentPosts}  />
            <Paginat
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Page;