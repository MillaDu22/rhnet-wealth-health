import React from 'react';
import Home from  "./Components/pages/Home/index";
import FormNewPage from "./Components/pages/FormNewPage/index.jsx";
import Error from "./Components/pages/Error/index.jsx";
import { Routes, Route } from "react-router-dom";


const Router =  () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/FormNewPage" element={<FormNewPage />} />
                <Route path="*" element={<Error />} />
            </Routes>
    );
};

export default Router;