import React from "react";
import "./App.css";

import Alianzas from "./components/Alianzas";
import EmpresaOng from "./components/EmpresaOng";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Registrate from "./components/Registrate";
import SobreFonselp from "./components/SobreFonselp";
import SoyEmpresa from "./components/SoyEmpresa";
import SoyOng from "./components/SoyOng";

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
      <SoyEmpresa ref={onClickRefEmpresa} />
      <SoyOng ref={onClickRefOng} />
      <SobreFonselp />
      <Alianzas ref={onClickRefAlianzas} />
      <Registrate />
      {/* <Footer 
        onClickRefEmpresaOng= {onClickRefEmpresaOng}
        onClickRefEmpresa = {onClickRefEmpresa}
        onClickRefOng = {onClickRefOng}
        onClickRefAlianzas= {onClickRefAlianzas}
      /> */}
    </>
  );
}

export default App;
