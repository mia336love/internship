import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ScrollPosition from '../ScrollPosition/ScrollPosition';
import SearchReposMain from '../SearchRepos/SearchReposMain';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';


function NavigationMenu() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/scroll',
            element: <ScrollPosition />
        },
        {
            path: '/search-repos',
            element: <SearchReposMain />
        },
        {
            path: '/blog',
            element: <Blog />
        }
    ])


    return (
        <div className='vavMenu'>

            <RouterProvider router={router} />
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