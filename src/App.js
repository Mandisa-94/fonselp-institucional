import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import EmpresaOng from './components/EmpresaOng';
import HistoriasFonselp from './components/HistoriasFonselp';
import SoyEmpresa from './components/SoyEmpresa';


function App() {
  return (
    <>
      <Header></Header>
      <Presentation/>
      <EmpresaOng/>
      <HistoriasFonselp/>
      <SoyEmpresa/>
    </>
  );
}

export default App;
