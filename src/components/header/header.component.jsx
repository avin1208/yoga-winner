import React, { useContext } from "react";

import SocialMedia from "../social-media/social-media.component";

import SearchIcon from '@mui/icons-material/Search';

import './header.styles.scss';

import { ItemContext } from '../../Providers/item/items.providers';


const Header = () => {
   const {filter} = useContext(ItemContext)
  
   // const [searchInput, setSearchInput] = useState('');
   // const [filteredResults, setFilteredResults] = useState([]);

   // const filter = (e) => {
   //    const keyword = e.target.value; 
   
//       if (searchInput !== '') {
//           const filteredData = lists.filter((item) => {
//               return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//           })
//           setFilteredResults(filteredData); 
          
//       }
//       else{
//           setFilteredResults(lists)
//       }
//   setSearchInput(keyword);
// }

   return (
      <nav className="main-head">
         <div className="search">
            <input
               type='search'
               placeholder="search..."
               onChange={filter}
            />
            <div className="search-icon">
               <SearchIcon />
            </div>
         </div>
         <div className="logo">
            <img src="https://t3.ftcdn.net/jpg/03/89/30/64/360_F_389306425_zAsiEURL3pnvNC3gPotVFrz5whXzMsiB.jp0g" alt="Winner yoga Home Page 2" />
         </div>
         <SocialMedia className="icons" />
      </nav>
   );
};

export default Header;

