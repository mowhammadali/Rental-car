import React from 'react';
import {Routes , Route} from "react-router-dom";

import App from '../App';
import CarInfo from '../Components/CarInfo';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path ="/*" element={<App />}/>
                <Route path ='/:car/more' element={<CarInfo />}/>
                <Route path ='/more' element={<CarInfo />}/>
            </Routes>
        </>
    );
};

export default Routing;