function mostrarDetalles(button) {
  const detalles = button.nextElementSibling;
  detalles.style.display = detalles.style.display === "none" ? "block" : "none";
  button.textContent = detalles.style.display === "block" ? "Ocultar detalles" : "Ver detalles";
}

function abrirCamara() {
  const cameraContainer = document.querySelector('.camera-container');
  const video = document.getElementById('video');

  cameraContainer.style.display = 'block';

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.srcObject = stream;
      video.play();
    }).catch(function(error) {
      alert("No se pudo acceder a la cámara.");
    });
  }
}

function cerrarCamara() {
  const video = document.getElementById('video');
  const stream = video.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(track => track.stop());

  document.querySelector('.camera-container').style.display = 'none';
}

function registrarPeso() { alert("Funcionalidad de registrar peso en desarrollo."); }
function agendarVacuna() { alert("Funcionalidad de agendar vacuna en desarrollo."); }
function registrarSueño() { alert("Funcionalidad de registrar sueño en desarrollo."); }
function registrarAlimentacion() { alert("Funcionalidad de registrar alimentación en desarrollo."); }