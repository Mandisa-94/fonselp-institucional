import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import EmpresaOng from './components/EmpresaOng';
import HistoriasFonselp from './components/HistoriasFonselp';
import SoyEmpresa from './components/SoyEmpresa';
import SoyOng from './components/SoyOng';


function App() {
  return (
    <>
      <Header></Header>
      <Presentation/>
      <EmpresaOng/>
      <HistoriasFonselp/>
      <SoyEmpresa/>
      <SoyOng/>
    </>
  );
}

export default App;
