import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantdetailPage from "./routes/RestaurantdetailPage";


const App = () => {
    return <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/restaurants/:id/update" element={<UpdatePage/>} />
                <Route path="/restaurants/:id" element={<RestaurantdetailPage/>} />
            </Routes>
        </Router>
    </div>
}

export default App;