import React from 'react';

import { Box } from '@mui/material';

import ResponsiveAppBar from './layout/Header';
import Login from './views/Login';
import MainPage from './views/MainPage';
import Moglog from './views/Moglog';
import Laboratory from './views/Laboratory';
import Chatting from './views/Chatting';
import Community from './views/Community';

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

function App() {
    return (
      <div>
          <BrowserRouter>
          <ResponsiveAppBar/>
            <Routes>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/MainPage' element={<MainPage/>}/>
                <Route path='/Moglog' element={<Moglog/>}/>
                <Route path='/Laboratory' element={<Laboratory/>}/>
                <Route path='/Chatting' element={<Chatting/>}/>
                <Route path='/Community' element={<Community/>}/>
            </Routes>
            </BrowserRouter>
      </div>
    )
}

export default App;
