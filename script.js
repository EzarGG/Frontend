// Ganti IP:PORT sesuai backend Pterodactyl kamu
const API_URL = "http://180.252.112.174:2324";

// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    document.getElementById("message").innerText = data.message;
  } catch (err) {
    document.getElementById("message").innerText = "⚠️ Gagal connect ke server";
  }
});

// REGISTER
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    document.getElementById("message").innerText = data.message;
  } catch (err) {
    document.getElementById("message").innerText = "⚠️ Gagal connect ke server";
  }
});
