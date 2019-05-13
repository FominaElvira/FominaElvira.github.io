document.querySelector("button").onclick = function(){
    var r = document.querySelector("div").classList.toggle("move");
    this.textContent = r ? "Позже" : "Войти";
}
