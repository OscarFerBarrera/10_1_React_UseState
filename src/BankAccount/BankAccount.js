import './BankAccount.css';
import React from 'react';

const BankAccount = () => {

    const [account, setAccount] = React.useState({
        name: "Oscar",
        savings: 5000,
        founds: 100,
    });
    const showAlert = () => {
        alert("No tienes fondos para realizar esta operación!");
    }

    const takeMoney = () => {

        const newAccount = { ...account };
        newAccount.savings === 0 ? showAlert() :
            newAccount.savings = newAccount.savings - 50;
        setAccount(newAccount)
    }

    const addMoney = () => {
        // const newAccount = { ...account };
        // newAccount.savings = newAccount.savings + 100;
        const newAccount = {
            ...account,
            savings: account.savings + 100,
        }
        setAccount(newAccount)
    }

    const addMoneyToFounds = () => {
        // const newAccount = {
        //     ...account,
        //     savings: account.savings - 1000,
        //     founds: account.founds +1000,
        // }
    
        //Funciona pero sin alerta
      const newAccount = {
            ...account,
            savings: account.savings >= 1000 ? account.savings - 1000: account.savings,
            founds: account.savings >= 1000 ? account.founds +1000: account.founds,
        }
        setAccount(newAccount)
    }
    return (
        <>
            <p>El titular de la cuenta es: {account.name}</p>
            <p>El saldo de la cuenta corriente es: {account.savings}€</p>
            <p>El total de fondo de inversión es: {account.founds}€</p>

            <button className='buttonOperator' onClick={takeMoney}>Retirar 50€</button>
            <button className='buttonOperator' onClick={addMoney}>Ingresar 100€</button>
            <button className='buttonOperator' onClick={addMoneyToFounds}>Ingresar en los fondos 1000€</button>
        </>
    );
}

export default BankAccount;