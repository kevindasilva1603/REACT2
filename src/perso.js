import React, { useState } from "react";

function App() {
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [infosMiseAJour, setInfosMiseAJour] = useState(false);

    const handlePrenomChange = (e) => {
        setPrenom(e.target.value);
        setInfosMiseAJour(false);
    };

    const handleNomChange = (e) => {
        setNom(e.target.value);
        setInfosMiseAJour(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInfosMiseAJour(true);
    };

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <label>
                    Prénom:
                    <input
                        type='text'
                        value={prenom}
                        onChange={handlePrenomChange}
                    />
                </label>
                <br />
                <label>
                    Nom:
                    <input type='text' value={nom} onChange={handleNomChange} />
                </label>
                <br />
                <button type='submit'>Valider</button>
            </form>

            {infosMiseAJour && (
                <div>
                    <h2>Informations:</h2>
                    <p>Prénom: {prenom}</p>
                    <p>Nom: {nom}</p>
                </div>
            )}
        </div>
    );
}

export default App;
