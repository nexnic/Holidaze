
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../css/style.css';

import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}