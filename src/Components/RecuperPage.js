import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Header from "./Header";
import { Link } from 'react-router-dom';
import  "./styles/RecuperPage.css";



function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [resetEmailSent, setResetEmailSent] = useState(false);

    const handleResetPassword = async () => {
        const auth = getAuth();

        try {
            await sendPasswordResetEmail(auth, email);
            setResetEmailSent(true);
        } catch (error) {
            console.error('Erro ao enviar e-mail de redefinição de senha:', error.message);
        }
    };

    return (
        <div>
            <div>
                <Header hideSearchBar={true} showLogout={false} />
            </div>
            <h2>Esqueceu a Senha</h2>
            {resetEmailSent ? (
                <p>Um e-mail de redefinição de senha foi enviado para {email}.</p>
            ) : (
                <>
                    <p>Insira o seu e-mail para receber um link de redefinição de senha.</p>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleResetPassword}>Enviar E-mail</button>
                    <div>
                    <Link to='/'>
                   <button>Voltar</button>
                   </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default ForgotPassword;
