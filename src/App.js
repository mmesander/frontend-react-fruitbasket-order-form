import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

//Geimporteerde assets
import companyLogo from './assets/screenshot-logo.png';
import apple from './assets/apple.png';
import banana from './assets/banana.png';
import strawberry from './assets/strawberry.png';
import kiwi from './assets/kiwi.png';

//Geimporteerde Functies
import Product from "./ components/Product";
import Button from "./ components/Button";

function App() {
    //Deze functies zorgen ervoor dat de counter op 0 staat en dat deze aangepast kan worden met de buttons
    const [amountStrawberries, setAmountStrawberries] = React.useState(0);
    const [amountBananas, setAmountBananas] = React.useState(0);
    const [amountApples, setAmountApples] = React.useState(0);
    const [amountKiwis, setAmountKiwis] = React.useState(0);

    //Deze functie zorgt ervoor dat alle amounts worden gereset
    const [reset, setReset] = React.useState(false);

    const handleReset = () => {
        setAmountStrawberries(0);
        setAmountBananas(0);
        setAmountApples(0);
        setAmountKiwis(0);
    }

    return (
        <>
            <header>
                <img src={companyLogo} alt="Company Logo"/>
            </header>
            <main>
                <section>
                    <Product
                        image={strawberry}
                        productName="Aardbeien"
                        amountFruit={amountStrawberries}
                        setAmountFruit={setAmountStrawberries}
                    />
                    <Product
                        image={banana}
                        productName="Bananen"
                        amountFruit={amountBananas}
                        setAmountFruit={setAmountBananas}
                    />
                    <Product
                        image={apple}
                        productName="Appels"
                        amountFruit={amountApples}
                        setAmountFruit={setAmountApples}
                    />
                    <Product
                        image={kiwi}
                        productName="Kiwi's"
                        amountFruit={amountKiwis}
                        setAmountFruit={setAmountKiwis}
                    />
                    <Button
                        buttonType="button"
                        buttonClass="buttonReset"
                        disableButton={reset || amountStrawberries === 0 && amountBananas === 0 && amountApples === 0 && amountKiwis === 0}
                        handleClick={handleReset}
                    >
                        Reset
                    </Button>
                </section>
            </main>
        </>
    );
}

export default App;
