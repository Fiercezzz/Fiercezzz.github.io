function addNumbers(){
    let n1 = Number(document.getElementById("nuno").value);
    let n2 = Number(document.getElementById("ndos").value);

    document.getElementById("results").textContent = n1 + n2;
    document.getElementById("results").style.color = "rgb(0, 128, 21)";
}

function subtractNumbers(){
    let n1 = Number(document.getElementById("nuno").value);
    let n2 = Number(document.getElementById("ndos").value);

    document.getElementById("results").textContent = n1 - n2;
    document.getElementById("results").style.color = "rgb(0, 128, 21)";
}

function multiplyNumbers(){
    let n1 = Number(document.getElementById("nuno").value);
    let n2 = Number(document.getElementById("ndos").value);

    document.getElementById("results").textContent = n1 * n2;
    document.getElementById("results").style.color = "rgb(0, 128, 21)";
}

function divideNumbers(){
    let n1 = Number(document.getElementById("nuno").value);
    let n2 = Number(document.getElementById("ndos").value);

    if (n2 === 0){
        document.getElementById("results").textContent = "Hindi po pwede 'yan, ate!";
        document.getElementById("results").style.color = "maroon";
    } else {
        document.getElementById("results").textContent = n1 / n2;
        document.getElementById("results").style.color = "rgb(0, 128, 21)";
    }
}