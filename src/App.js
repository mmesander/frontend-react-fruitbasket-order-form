import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

//Geimporteerde assets
import companyLogo from './assets/screenshot-logo.png';
import apple from './assets/apple.png';
import banana from './assets/banana.png';
import strawberry from './assets/strawberry.png';
import kiwi from './assets/kiwi.png';

//Geimporteerde Functies
import Product from "./ components/Product";
import Button from "./ components/Button";
import Input from "./ components/Input";

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

    //Deze functie zorgt voor het veranderen van de form
    const [formState, setFormState] = React.useState({
        firstName: '',
        lastName: '',
        age: 0,
        zipCode: '',
        deliveryFrequence: 'weekly',
        moment: 'day',
        terms: false,
        message: '',
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    function handleFormChange(e) {
        const changedFieldName = e.target.name
        let newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        if (changedFieldName === "age") {
            newValue = parseInt(newValue);
        }

        setFormState({
            ...formState,
            [changedFieldName]: newValue
        });
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
                <section>
                    <fieldset>
                        <form onSubmit={handleSubmit}>
                            <Input
                                label="first-name-field"
                                description="Voornaam"
                                type="text"
                                name="firstName"
                                value={formState.firstName}
                                onChange={handleFormChange}
                            />
                            <Input
                                label="last-name-field"
                                description="Achternaam"
                                type="text"
                                name="lastName"
                                value={formState.lastName}
                                onChange={handleFormChange}
                            />
                            <Input
                                label="age-field"
                                description="Leeftijd"
                                type="number"
                                name="age"
                                value={formState.age}
                                onChange={handleFormChange}
                            />
                            <Input
                                label="zip-code"
                                description="Postcode"
                                type="text"
                                name="zipCode"
                                value={formState.zipCode}
                                onChange={handleFormChange}
                            />
                            <label htmlFor="delivery-frequence-field">
                                Bezorgfrequentie:
                                <select
                                    name="deliveryFrequence"
                                    id="delivery-frequence-field"
                                    value={formState.deliveryFrequence}
                                    onChange={handleFormChange}>
                                    <option value="weekly">Iedere week</option>
                                    <option value="every other week">Om de week</option>
                                    <option value="monthly">Iedere maand</option>
                                </select>
                            </label>
                            <label className="radio-buttons">
                                <input
                                    type="radio"
                                    id="moment-choice-day"
                                    name="moment"
                                    value="day"
                                    checked={formState.moment === 'day'}
                                    onChange={handleFormChange}
                                />
                                Overdag
                            </label>
                            <label className="radio-buttons">
                                <input
                                    type="radio"
                                    id="moment-choice-evening"
                                    name="moment"
                                    value="evening"
                                    checked={formState.moment === 'evening'}
                                    onChange={handleFormChange}
                                />
                                's Avonds
                            </label>
                            <label htmlFor="message-field">
                                Opmerking
                                <textarea
                                    name="message"
                                    id="message-field"
                                    cols="45"
                                    rows="8"
                                    value={formState.message}
                                    onChange={handleFormChange}
                                />
                            </label>
                            <label htmlFor="terms">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    checked={formState.terms}
                                    onChange={handleFormChange}
                                />
                                Ik ga akkoord met de voorwaarden
                            </label>

                            <button className="submit-button" type="submit">
                                Versturen
                            </button>
                        </form>
                    </fieldset>
                </section>
            </main>
        </>
    );
}

export default App;
