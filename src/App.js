import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import "./Components/Content";
import "./Components/Product";
import React from "react";
import NavBar from "./Components/NavBar";
import {Content} from "./Components/Content";
import {Display} from "./Components/Display";
import Footer from "./Components/Footer"



function App(){
        
    return(
        <>
        <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/Display/:id/:name" element={<Display/>} />
        </Routes>
        </Router>
        <Footer/>
        <script/>

        </>
    )
}
       
export default App;
