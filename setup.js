document.getElementById("submit").onclick = function() {
    const timeTarget = new Date('2022-11-06');
    const now = new Date();
    console.log(timeTarget);
    console.log(now);
    if (now <= timeTarget) {
        document.getElementById("display").disabled = false;
        document.getElementById("display").style.display = "none";
        document.getElementById("submit").style.fontSize = "20px";
        document.getElementById("submit").value = "Loading Result...";
        window.location.replace("congratulations.html");
    }
    else if (now > timeTarget) {
        document.getElementById("submit").value = "Sure?";
        document.getElementById("display").disabled = true;
        document.getElementById("display").style.display = "block";
    }
}; 