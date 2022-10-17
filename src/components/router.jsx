import {Route, Routes} from "react-router";
import Layout from "./layout";
import Home from "../pages/home";
import About from "../pages/about";
import Counter from "../pages/counter";

const RouterApp = () => {
    return (
        <Routes>

            <Route path={'/'} element={<Layout/>} >

                <Route index element={<Home/>} />

                <Route path={'/about'} element={<About/>} /> 

                <Route path={'/counter'} element={<Counter/>} />  

            </Route>
        
        </Routes>
    );
}; 

export default RouterApp;