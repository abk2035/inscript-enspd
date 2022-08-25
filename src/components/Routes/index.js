import React from 'react';
import Header from '../Header';
import{BrowserRouter as Router , Route,Navigate ,Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Footer from '../Footer'

const index = () => {
  return (
    <Router>
        <Header/>
         <Routes>
           <Route path='/'exact element={<Home/>}/>
           <Route path="*" element={<Navigate to="/" replace />}/>
         </Routes>
         <Footer />
    </Router>
  )
}

export default index ;