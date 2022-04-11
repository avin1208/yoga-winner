import React,{ useState } from 'react';

import './App.css';

import Homepage from './pages/homepage/homepage.component';

import Modal from './pages/popupmodel/popupmodel.component';


const App = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return ( 
     <div className='App'>
     {modalOpen && <Modal className="model-center" setOpenModal={setModalOpen} />}
     <Homepage className="homapage-main"/>
    </div>
  );
};

export default App;
