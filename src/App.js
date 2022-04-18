import React, { useState } from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

import Menpagee from './pages/menpage/menpage.component';

import Modal from './pages/popupmodel/popupmodel.component';

import Header from './components/header/header.component';

import Navebar from "./components/navebar/navebar.component";

import Brand from './components/brand/brand.component';

import Footer from './components/footer/footer.component';

import Womenpage from './pages/womenpage/womenpage.component';

import Kidspage from './pages/kidspage/kidspage.component';

import Accessoriespage from './pages/accessoriespage/accessoriespage.component';

import Blogpage from './pages/blogpage/blogpage.component';

import Aboutus from './pages/aboutuspage/aboutuspage.component';



const App = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className='App'>
      <Header />
      <Navebar />
      {modalOpen && <Modal className="model-center" setOpenModal={setModalOpen} />}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/Men' component={Menpagee} />
        <Route path='/ladies' component={Womenpage} />
        <Route path='/kids' component={Kidspage} />
        <Route path='/accessories' component={Accessoriespage} />
        <Route path='/blog' component={Blogpage} />
        <Route path='/aboutus' component={Aboutus} />
      </Switch>
      <Brand />
      <Footer />
    </div>
  );
};

export default App;
