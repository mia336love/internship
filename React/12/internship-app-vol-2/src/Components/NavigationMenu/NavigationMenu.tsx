import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import ScrollPosition from '../ScrollPosition/ScrollPosition';

function NavigationMenu() {

    return (
        <div className='vavMenu'>
            {/* <Router>
                <nav>

                    <Link to="/scroll">
                        Scroll
                    </Link>
                </nav>

                <Routes>

                    <Route path="/scroll" element={<ScrollPosition />} />
                </Routes>
            </Router> */}
        </div>
    )
}

export default NavigationMenu