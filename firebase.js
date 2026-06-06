// Importa as funções principais do SDK V9+ do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Sua configuração oficial
const firebaseConfig = {
    apiKey: "AIzaSyBXWHugOmwP9vBVG-dsUffYgFlfJfztKwo",
    authDomain: "cronobike-a941b.firebaseapp.com",
    projectId: "cronobike-a941b",
    storageBucket: "cronobike-a941b.firebasestorage.app",
    messagingSenderId: "882009475258",
    appId: "1:882009475258:web:5cf7fb36291a180c6f1a83"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exporta o banco de dados para a janela global para que suas outras funções (salvarDados, carregarDados) possam acessá-lo
window.db = database;
window.ref = ref;
window.set = set;
window.get = get;
window.onValue = onValue;

console.log("Firebase conectado com sucesso!");
