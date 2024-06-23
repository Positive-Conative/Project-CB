import './common.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import LeftNavigation from './Containers/navigation/Main-Navigation';
import { GroupInfo } from './Pages/Groups';
import Write from './Pages/Write';

function App() {
    return (
        <BrowserRouter>
            <LeftNavigation />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/groups/:groupNum" element={<GroupInfo />}></Route>
                <Route path="/write" element={<Write />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
