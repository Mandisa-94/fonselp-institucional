import React, { useState } from 'react';
import './App.css';
import Alianzas from './components/Alianzas';
import EmpresaOng from './components/EmpresaOng';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Registrate from './components/Registrate';
import SobreFonselp from './components/SobreFonselp';
import SoyEmpresa from './components/SoyEmpresa';
import SoyOng from './components/SoyOng';

function App() {
	if (process.env.NODE_ENV === 'development') {
		console.log('estamos activo');
		const { worker } = require('./mocks/browser');
		worker.start();
	}

	const onClickRefEmpresaOng = React.useRef(null);
	const onClickRefEmpresa = React.useRef(null);
	const onClickRefOng = React.useRef(null);
	const onClickRefAlianzas = React.useRef(null);
	const onClickRefRegister = React.useRef(null);
	const onClickRefFonselp = React.useRef(null);

	const [demo, setDemo] = useState(false);

	return (
		<>
			<NavBar
				onClickRefEmpresaOng={onClickRefEmpresaOng}
				onClickRefAlianzas={onClickRefAlianzas}
				onClickRefRegister={onClickRefRegister}
				onClickRefFonselp={onClickRefFonselp}
			/>
			<Presentation onClickRefRegister={onClickRefRegister} />
			<EmpresaOng
				ref={onClickRefEmpresaOng}
				onClickRefEmpresa={onClickRefEmpresa}
				onClickRefOng={onClickRefOng}
			/>
			{/* <HistoriasFonselp/> */}
			<SoyEmpresa
				ref={onClickRefEmpresa}
				onClickRefRegister={onClickRefRegister}
				setDemo={setDemo}
			/>
			<SoyOng
				ref={onClickRefOng}
				onClickRefRegister={onClickRefRegister}
				setDemo={setDemo}
			/>
			<SobreFonselp ref={onClickRefFonselp} />
			<Alianzas ref={onClickRefAlianzas} />

			{/* <Registrate /> */}
			{/* <Alianzas ref={onClickRefAlianzas} /> */}
			<Registrate ref={onClickRefRegister} demo={demo} />
			<Footer
				onClickRefEmpresaOng={onClickRefEmpresaOng}
				onClickRefEmpresa={onClickRefEmpresa}
				onClickRefOng={onClickRefOng}
				onClickRefAlianzas={onClickRefAlianzas}
				onClickRefRegister={onClickRefRegister}
			/>
		</>
	);
}

export default App;
