import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase config
const firebaseConfig = {
  databaseURL: "https://inventory-98152-default-rtdb.firebaseio.com",
  projectId: "inventory-98152"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const animeRef = ref(db, "anime_list");

const tbody = document.querySelector("#anime-table tbody");

onValue(animeRef, (snapshot) => {
  const data = snapshot.val();
  tbody.innerHTML = "";

  for (const key in data) {
    const anime = data[key];
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${anime.title || "—"}</td>
      <td>${anime.genre || "—"}</td>
      <td>${anime.year || "—"}</td>
      <td>${anime.description || "—"}</td>
    `;

    tbody.appendChild(row);
  }
});
