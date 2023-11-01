import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestComponent() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get('/api/test')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.log("Erro ao chamar o backend:", error);
                setMessage("Falha ao comunicar com o backend");
            });
    }, []);

    return (
        <div>
            <h2>Teste de Comunicação com o Backend:</h2>
            <p>{message}</p>
        </div>
    );
}

export default TestComponent;
