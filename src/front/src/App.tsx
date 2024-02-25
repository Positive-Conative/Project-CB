import './common.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import LeftNavigation from './Containers/navigation/Main-Navigation';
import { GroupInfo } from './Pages/Groups';

function App() {
    return (
        <BrowserRouter>
            <LeftNavigation />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/groups/:groupNum" element={<GroupInfo />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
