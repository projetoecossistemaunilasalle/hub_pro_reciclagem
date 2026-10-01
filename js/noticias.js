import { db, auth } from "./firebase-config.js";

import {
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const btnPublicar = document.getElementById("btnPublicar");

const titulo = document.getElementById("titulo");
const resumo = document.getElementById("resumo");
const categoria = document.getElementById("categoria");
const conteudo = document.getElementById("conteudoNoticia");

const listaNoticias = document.getElementById("listaNoticias");


/* =========================================
   CARREGAR NOTÍCIAS DO FIRESTORE
========================================= */

async function carregarNoticias() {

    try {

        console.log("📥 Buscando notícias no Firestore...");

        const consulta = await getDocs(
            collection(db, "noticias")
        );

        console.log(
            `✅ ${consulta.size} notícia(s) encontrada(s).`
        );

        if (!listaNoticias) {
            console.error(
                "❌ Elemento #listaNoticias não encontrado no HTML."
            );
            return;
        }

        listaNoticias.innerHTML = "";


        if (consulta.empty) {

            listaNoticias.innerHTML = `
                <div class="sem-noticias">
                    Nenhuma notícia cadastrada.
                </div>
            `;

            return;
        }


        consulta.forEach((documento) => {

            const noticia = documento.data();

            const artigo = document.createElement("div");

            artigo.className = "publicacao";

            artigo.innerHTML = `

                <div class="imagem-publicacao">
                    <span>Sem imagem</span>
                </div>

                <div class="info-publicacao">

                    <h3>
                        ${noticia.titulo || "Sem título"}
                    </h3>

                    <p>
                        ${noticia.resumo || ""}
                    </p>

                    <div class="dados-publicacao">

                        <span class="status">
                            ${noticia.status || "Sem status"}
                        </span>

                        <span>
                            ${noticia.categoria || ""}
                        </span>

                    </div>

                </div>

                <div class="acoes-publicacao">

                    <button
                        type="button"
                        title="Editar"
                        disabled
                    >
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button
                        type="button"
                        title="Excluir"
                        disabled
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            `;

            listaNoticias.appendChild(artigo);

        });


    } catch (error) {

        console.error(
            "❌ Erro ao carregar notícias:",
            error
        );

    }

}


/* =========================================
   PUBLICAR NOTÍCIA
========================================= */

btnPublicar.addEventListener(
    "click",
    async function () {

        const tituloValor =
            titulo.value.trim();

        const resumoValor =
            resumo.value.trim();

        const categoriaValor =
            categoria.value;

        const conteudoValor =
            conteudo.value.trim();


        if (
            !tituloValor ||
            !resumoValor ||
            !categoriaValor ||
            !conteudoValor
        ) {

            alert(
                "Preencha todos os campos."
            );

            return;
        }


        const user = auth.currentUser;


        if (!user) {

            alert(
                "Você não está autenticado no Firebase."
            );

            return;
        }


        try {

            btnPublicar.disabled = true;

            btnPublicar.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Publicando...';


            await addDoc(
                collection(db, "noticias"),
                {

                    titulo: tituloValor,

                    resumo: resumoValor,

                    categoria: categoriaValor,

                    conteudo: conteudoValor,

                    status: "publicada",

                    autorUid: user.uid,

                    autorEmail: user.email,

                    dataCriacao:
                        serverTimestamp()

                }
            );


            alert(
                "Notícia publicada com sucesso!"
            );


            titulo.value = "";

            resumo.value = "";

            categoria.value = "";

            conteudo.value = "";


            /* RECARREGAR LISTA */

            await carregarNoticias();


        } catch (error) {

            console.error(
                "Erro ao publicar:",
                error
            );

            alert(
                "Erro ao publicar:\n\n" +
                error.code +
                "\n\n" +
                error.message
            );


        } finally {

            btnPublicar.disabled = false;

            btnPublicar.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> Publicar notícia';

        }

    }
);


/* =========================================
   INICIAR
========================================= */

onAuthStateChanged(
    auth,
    (user) => {

        if (user) {

            console.log(
                "✅ Usuário autenticado:",
                user.email
            );

            carregarNoticias();

        } else {

            console.warn(
                "⚠️ Usuário não autenticado."
            );

        }

    }
);