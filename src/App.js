import './App.css';
import BankAccount from './BankAccount/BankAccount';
import Puja from './Puja/Puja';
import React from 'react';

function App() {

  const [pujaList, setPujaList] = React.useState([100]);

  const addPuja = () => {
    const newPuja = [...pujaList];
    setPujaList(newPuja);
  }

  return (
    <div>
      <h2>LISTADO DE PUJAS</h2>
      <ul>
        {pujaList.map(puja => <li key={puja}>{puja.toString()}</li>)}
      </ul>
      <h2>Pujantes</h2>

      <Puja addPuja={addPuja} name="Pedro"></Puja>
      <Puja addPuja={addPuja} name="Oscar"></Puja>
      <Puja addPuja={addPuja} name="Edu"></Puja>

      <h1>Cuenta Bancaria</h1>
      <BankAccount></BankAccount>
    </div>
  );
}

export default App;
