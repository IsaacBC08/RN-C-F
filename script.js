var modelo = null;

//Cargar la red neuronal
(async () => {
    console.log("Cargando Red Neuronal...");
    modelo = await tf.loadLayersModel("model.json");
    console.log("Red Neuronal Cargada");
})();

function cambiarCelsius() {
    var celsius = document.getElementById("celsius").value;
    document.getElementById("lbl-celsius").innerHTML=celsius

    if (modelo != null){
        var tensor = tf.tensor1d([parseInt(celsius)]);
        var prediccion = modelo.predict(tensor).dataSync();

        prediccion = Math.round(prediccion);
        document.getElementById("resultado").innerHTML = 
        celsius + "° Celsius son " + prediccion + "° Fahrenheit"
    }
    else {

    }
}