import { auth } from "./firebase-config.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    mensagem.textContent = "Autenticando acesso...";
    mensagem.className = "mensagem";

    try {
        await signInWithEmailAndPassword(auth, email, senha);

        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.className = "mensagem sucesso";

        console.log("Usuário autenticado com sucesso!");

        // Por enquanto vamos apenas testar o login.
        // Depois colocaremos aqui o redirecionamento
        // para o painel.

    } catch (error) {
        console.error("Erro no login:", error);

        mensagem.textContent = "E-mail ou senha incorretos.";
        mensagem.className = "mensagem erro";
    }
});