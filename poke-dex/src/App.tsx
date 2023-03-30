import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageHeader from './common/PageHeader';
import PokeCardList from './components/PokeCardList';
import PokeDetail from './components/PokeDetail';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <Routes>
        <Route path='/' element={<PokeCardList/>} />
        <Route path='/pokemon/:name' element={<PokeDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
