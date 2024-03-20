import React from 'react';
import Home from  "../src/pages/Home/index.jsx";
import FormNewPage from "../src/pages/FormNewPage/index.jsx";
import Error from "../src/pages/Error/index.jsx";
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