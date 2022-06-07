import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import Postview from "./Postview";
import Uploads from "./Components/uploadpost";

function App(){
    return(
        <div className="wrapper">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Postview/uploadpost" element={<Uploads/>}></Route>
                    <Route path="/Postview" element={<Postview/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App;




