import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PageHeader from './common/PageHeader';
import PokeCardList from './components/PokeCardList';
import PokeDetail from './components/PokeDetail';
import {store} from "./store";

function App() {
  return (
    <Provider store={store}>
      <PageHeader/>
      <Routes>
        <Route path='/' element={<PokeCardList/>} />
        <Route path='/pokemon/:name' element={<PokeDetail/>} />
      </Routes>
    </Provider>
  );
}

export default App;
