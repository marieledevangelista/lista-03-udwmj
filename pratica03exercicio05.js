function calcularVolume() {
    let raio = parseFloat(document.getElementById("raio").value);

    let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

    document.getElementById("resultado").innerText =
        "Volume da esfera: " + volume.toFixed(2);
}
