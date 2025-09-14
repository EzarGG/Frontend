const BACKEND_URL = "http://localhost:3000"; // ganti dengan domain/backend kamu

async function loadServers() {
  const response = await fetch(`${BACKEND_URL}/servers`);
  const data = await response.json();

  const container = document.getElementById("servers");
  container.innerHTML = "";

  if (data.data) {
    data.data.forEach(server => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${server.attributes.name}</h3>
        <p>ID: ${server.attributes.identifier}</p>
        <button onclick="powerServer('${server.attributes.identifier}', 'start')">Start</button>
        <button onclick="powerServer('${server.attributes.identifier}', 'stop')">Stop</button>
      `;
      container.appendChild(div);
    });
  } else {
    container.innerHTML = "<p>No servers found.</p>";
  }
}

async function powerServer(id, signal) {
  await fetch(`${BACKEND_URL}/servers/${id}/power`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ signal })
  });
  alert(`Signal ${signal} sent to server ${id}`);
}
