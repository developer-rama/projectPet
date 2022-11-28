import React from 'react'
import './assets/css/base/base.css'
import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pg404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import {Post} from './paginas/Post.jsx';

function App() {
  return (
    <div className='App'>
      <Cabecalho />
      <Routes>
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/posts/:id' element={<Post  />} />
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<Pg404 />} />
      </Routes>
    </div>
  );
}

export default App;

