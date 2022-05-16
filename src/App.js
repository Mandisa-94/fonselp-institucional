import './App.css';
import Presentation from './components/Presentation';
import EmpresaOng from './components/EmpresaOng';
import HistoriasFonselp from './components/HistoriasFonselp';
import SoyEmpresa from './components/SoyEmpresa';
import SoyOng from './components/SoyOng';
import NavBar from './components/NavBar';
import React from 'react';
import Alianzas from './components/Alianzas';


function App() {
  const onClickRefEmpresaOng = React.useRef(null);
  
  return (
    <>
      <NavBar onClickRefEmpresaOng= {onClickRefEmpresaOng}/>
      <Presentation/>
      <EmpresaOng ref = { onClickRefEmpresaOng }/>
      <HistoriasFonselp/>
      <SoyEmpresa/>
      <SoyOng/>
      <Alianzas/>
    </>
  );
}

export default App;
