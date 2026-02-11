// piccolo tocco: varia leggermente durata dell'animazione per dare idea
// che il bouquet “naviga” nell’aria in modo non perfettamente regolare.
const bouquet = document.querySelector(".bouquet");
const tinies = document.querySelectorAll(".tiny");

function randomizeFloating(){
  if (bouquet) {
    const base = 6 + Math.random() * 3;
    bouquet.style.animationDuration = base.toFixed(1) + "s";
  }
  tinies.forEach(el => {
    const base = 9 + Math.random() * 5;
    el.style.animationDuration = base.toFixed(1) + "s";
  });
}

randomizeFloating();
setInterval(randomizeFloating, 12000);
