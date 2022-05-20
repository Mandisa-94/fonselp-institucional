import './App.css';
import Presentation from './components/Presentation';
import EmpresaOng from './components/EmpresaOng';
import HistoriasFonselp from './components/HistoriasFonselp';
import SoyEmpresa from './components/SoyEmpresa';
import SoyOng from './components/SoyOng';
import NavBar from './components/NavBar';
import React from 'react';
import SobreFonselp from './components/SobreFonselp';
import Registrate from './components/Registrate';
import Alianzas from './components/Alianzas';
import Footer from './components/Footer';


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
      <SobreFonselp/>
      <Alianzas/>
      <Registrate/>
      <Footer/>
    </>
  );
}

export default App;
