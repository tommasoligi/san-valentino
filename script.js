// durata totale invio = durata keyframe + ultimo delay
const TOTAL_SEND_MS = 5000 + 1800 + 500; // ~7.3s

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

// opzionale: funzione per riavviare l’effetto (se vuoi ciclarlo)
function restartPackets(){
  packets.forEach(p => {
    p.style.animation = "none";
    void p.offsetWidth; // reflow per riattivare l’animazione
    p.style.animation = "";
  });
}

// una sola volta
setTimeout(showBouquet, TOTAL_SEND_MS);
