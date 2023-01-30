import './App.css';
import React from 'react';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Restaurentlist from './componets/Restaurentlist';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewRest from './componets/ViewRest';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>                   
      
          <Routes>
            {/* path setting for restaurant list */}
            <Route path='/' element={<Restaurentlist/>}/>
            

            {/* path setting for viewRest */}

            <Route path='/view-restaurent/:id' element={<ViewRest/>}/>
            
          </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
