function send() {
    var x = document.getElementById("Number1").value;
    var y = document.getElementById("Number2").value;

    localStorage.setItem("Number 1" , x);
    localStorage.setItem("Number 2" , y);

    var z = localStorage.getItem("Number 1");
    var c = localStorage.getItem("Number 2");

    document.getElementById("Number1").innerHTML = z;
    document.getElementById("Number2").innerHTML = c;
}