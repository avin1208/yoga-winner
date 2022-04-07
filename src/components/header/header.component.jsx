import React from "react";

import SocialMedia from "../social-media/social-media.component";

import SearchIcon from '@mui/icons-material/Search';

import './header.styles.scss';

const Header = () => {
   return (
      <nav className="main-head">
         <div className="search">
            <input
               type='search'
               placeholder="search..."
            />
            <div className="search-icon">
             <SearchIcon />
            </div>
         </div>
         <div className="logo">
            <img src="https://demo.fieldthemes.com/ps_winner/home2/img/logo.png" alt="Winner yoga Home Page 2" />
         </div>
         <SocialMedia className="icons" />
      </nav>
   );
};

export default Header;

