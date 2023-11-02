
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
        // Profile User
            import ProfileConfig from "./Pages/Profile/Profile";
        // Error Page 
            import Error404 from "./Pages/ErrorPage/Error404";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/Register" element={<RegisterConfig></RegisterConfig>}></Route>
                    <Route path="/profile/:userID" element={<ProfileConfig></ProfileConfig>}></Route>
                    <Route path="*" element={<Error404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}