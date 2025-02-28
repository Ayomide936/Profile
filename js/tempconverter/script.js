let tocelcius;
let tofeherenet;
let textbox;
let convertedtemp;
tocelcius = document.getElementById('tocelcius');
tofeherenet = document.getElementById('tofehrenet');
textbox = document.getElementById('textbox');
convertedtemp = document.getElementById('convertedtemp');
function convert() {
     if (tocelcius.checked) {
       total =  (9/5 * Number(textbox.value)) + 35;
       convertedtemp.textContent = `${total}C `;
     }
     else  if (tofeherenet.checked) {
      total =  (5/9 * Number(textbox.value)) - 35;
      convertedtemp.textContent = `${total}F `;
    }
    else {
      convertedtemp.textContent = "pls choice a temp to change to"  
    }
}