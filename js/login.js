
import { auth } from "./firebase-config.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const botaoEntrar = document.getElementById("btnEntrar");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    mensagem.textContent = "Autenticando acesso...";
    mensagem.className = "mensagem";
    botaoEntrar.disabled = true;

    try {
        await signInWithEmailAndPassword(auth, email, senha);

        mensagem.textContent = "Login realizado com sucesso! Abrindo painel...";
        mensagem.className = "mensagem sucesso";

        console.log("Usuário autenticado com sucesso!");

        // Redireciona para a página de gerenciamento de notícias.
        window.location.href = "gerenciar_noticias.html";

    } catch (error) {
        console.error("Erro no login:", error);

        if (error.code === "auth/invalid-credential") {
            mensagem.textContent = "E-mail ou senha incorretos.";
        } else if (error.code === "auth/too-many-requests") {
            mensagem.textContent = "Muitas tentativas. Aguarde e tente novamente.";
        } else {
            mensagem.textContent = "Não foi possível entrar. Verifique os dados e tente novamente.";
        }

        mensagem.className = "mensagem erro";
        botaoEntrar.disabled = false;
    }
});
