import "./App.css";
import Presentation from "./components/Presentation";
import EmpresaOng from "./components/EmpresaOng";
import HistoriasFonselp from "./components/HistoriasFonselp";
import SoyEmpresa from "./components/SoyEmpresa";
import SoyOng from "./components/SoyOng";
import NavBar from "./components/NavBar";
import React from "react";
import SobreFonselp from "./components/SobreFonselp";
import Registrate from "./components/Registrate";
import Alianzas from "./components/Alianzas";
import Footer from "./components/Footer";

function App() {
  const onClickRefEmpresaOng = React.useRef(null);
  const onClickRefEmpresa = React.useRef(null);
  const onClickRefOng = React.useRef(null);
  const onClickRefAlianzas = React.useRef(null);

  return (
    <>
      <NavBar
        onClickRefEmpresaOng={onClickRefEmpresaOng}
        onClickRefAlianzas={onClickRefAlianzas}
      />
      <Presentation />
      <EmpresaOng
        ref={onClickRefEmpresaOng}
        onClickRefEmpresa={onClickRefEmpresa}
        onClickRefOng={onClickRefOng}
      />
      {/* <HistoriasFonselp/> */}
      <SoyEmpresa ref = { onClickRefEmpresa }/>
      {/* <SoyOng ref = { onClickRefOng }/> */}
      {/* <SobreFonselp/>
      <Alianzas ref = { onClickRefAlianzas }/>
      <Registrate/>
      <Footer 
        onClickRefEmpresaOng= {onClickRefEmpresaOng}
        onClickRefEmpresa = {onClickRefEmpresa}
        onClickRefOng = {onClickRefOng}
        onClickRefAlianzas= {onClickRefAlianzas}
      /> */}
    </>
  );
}

export default App;
