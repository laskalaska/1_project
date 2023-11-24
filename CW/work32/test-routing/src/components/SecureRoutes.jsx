import React from 'react';
import {Route, Routes} from "react-router-dom";

function SecureRoutes(props) {
    return (
        <Routes>
            <Route path="/a-info" element={<div>My Account</div>}></Route>
            <Route path="/a-orders" element={<div>My Orders</div>}></Route>
        </Routes>
    );
}

export default SecureRoutes;