import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Apk , Counter  } from './components'
// import Counter from './counter/counter'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Apk />} />
        <Route path="/task" element={<Counter/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
