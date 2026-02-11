// durata totale “invio”: deve coprire l’ultima rose-packet (6s + ultimi delay)
const TOTAL_SEND_MS = 6000 + 2400 + 800; // ~9.2s

const bouquetWrapper = document.getElementById("bouquetWrapper");
const caption = document.getElementById("captionText");
const packets = document.querySelectorAll(".rose-packet");

function showBouquet(){
  if (!bouquetWrapper) return;
  bouquetWrapper.classList.add("bouquet-visible");
  if (caption){
    caption.textContent = "Consegnato: il tuo bouquet è arrivato a Buenos Aires.";
  }
}

// opzionale: piccolo loop di “invio” (riavvio animazioni) se vuoi farlo ripartire
function restartPackets(){
  packets.forEach(p => {
    p.style.animation = "none";
    // reflow per riattivare la keyframe animation. [web:57]
    void p.offsetWidth;
    p.style.animation = "";
  });
}

// una sola volta: invio e poi bouquet
setTimeout(showBouquet, TOTAL_SEND_MS);

// Se vuoi ciclarlo, puoi usare:
/// setInterval(() => {
///   bouquetWrapper.classList.remove("bouquet-visible");
///   caption.textContent = "Invio in corso: le rose stanno attraversando l’oceano digitale…";
///   restartPackets();
///   setTimeout(showBouquet, TOTAL_SEND_MS);
/// }, TOTAL_SEND_MS + 4000);
