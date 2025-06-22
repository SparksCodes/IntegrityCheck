let archivoSeleccionado = null;

window.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("input-text");
  const selectAlgo = document.getElementById("hash-algo");
  const output = document.getElementById("generated-hash");
  const verifyBtn = document.getElementById("verify-btn");
  const externalHash = document.getElementById("external-hash");
  const fileInput = document.getElementById("file-input");
  const fileInfo = document.querySelector(".file-info-box");
  const verificationResult = document.getElementById("verification-result");
  const clearBtn = document.getElementById("clear-btn");

  // Gestión de selección de archivo
  fileInput.addEventListener("change", () => {
    archivoSeleccionado = fileInput.files[0] || null;

    if (archivoSeleccionado) {
      const nombre = archivoSeleccionado.name;
      const tipo = archivoSeleccionado.type || "Desconocido";
      const tamaño = archivoSeleccionado.size;
      const tamañoLegible = formatFileSize(tamaño);

      fileInfo.querySelector(".name").textContent = nombre;
      fileInfo.querySelector(".size").textContent = tamañoLegible;
      fileInfo.querySelector(".type").textContent = tipo;
    } else {
      fileInfo.querySelector(".name").textContent = "";
      fileInfo.querySelector(".size").textContent = "";
      fileInfo.querySelector(".type").textContent = "";
    }
  });

  // Botón para generar hash
  verifyBtn.addEventListener("click", () => {
    const texto = inputText.value.trim();
    const algoritmo = selectAlgo.value;

    output.textContent = "";
    verificationResult.textContent = "";
    verificationResult.style.color = "black";

    if (texto) {
      const hash = window.hashUtils.generateHash(texto, algoritmo);
      output.innerHTML = `Hash (${algoritmo}): <br> ${hash}`;
      compararHash(hash);
    } else if (archivoSeleccionado) {
      const lector = new FileReader();

      lector.onload = () => {
        try {
          const arrayBuffer = lector.result;
          const hash = window.hashUtils.generateHash(arrayBuffer, algoritmo);
          output.innerHTML = `Hash (${algoritmo}): <br> ${hash}`;
          compararHash(hash);
        } catch (err) {
          console.error("❌ Error al calcular hash:", err);
          output.textContent = "❌ Error al calcular el hash del archivo.";
        }
      };

      lector.onerror = () => {
        console.error("❌ Error leyendo el archivo.");
        output.textContent = "❌ Error leyendo el archivo.";
      };

      lector.readAsArrayBuffer(archivoSeleccionado);
    } else {
      output.textContent =
        "⚠️ Introduce texto o selecciona un archivo para generar el hash.";
    }
  });

  // Comparación con hash externo
  function compararHash(generado) {
    const externo = externalHash.value.trim().toLowerCase();
    if (!externo) return;

    if (generado.toLowerCase() === externo) {
      verificationResult.textContent = "✅ Los hashes coinciden.";
      verificationResult.style.color = "green";
    } else {
      verificationResult.textContent = "❌ Los hashes no coinciden.";
      verificationResult.style.color = "red";
    }
  }

  // Tamaño legible
  function formatFileSize(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  // Botón de limpiar
  clearBtn.addEventListener("click", () => {
    inputText.value = "";
    fileInput.value = "";
    archivoSeleccionado = null;
    externalHash.value = "";
    output.textContent = "";
    verificationResult.textContent = "";
    verificationResult.style.color = "black";

    fileInfo.querySelector(".name").textContent = "";
    fileInfo.querySelector(".size").textContent = "";
    fileInfo.querySelector(".type").textContent = "";
  });
});
