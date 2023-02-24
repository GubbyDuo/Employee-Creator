import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homePage/home";
import Form from "./components/form/form";
import EditForm from "./components/form/editForm";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/new" element={<Form />}></Route>
                    <Route path="/user/edit/:id" element={<EditForm />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
