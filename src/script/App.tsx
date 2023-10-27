
// Import 
    // Import React 
        import { BrowserRouter,  Routes, Route } from "react-router-dom";
    // Import Css 
        import '../css/style.css';
    // Layout
        import Layout from "./Layout/Layout";

    // Page Config 
        // Home 
            import Home from "./Pages/Home/Home";
        // Register User 
            import RegisterConfig from "./Pages/Register/RegisterConfig";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/Register" element={<RegisterConfig></RegisterConfig>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}