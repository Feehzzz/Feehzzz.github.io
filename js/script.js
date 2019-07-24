const btn = document.querySelector('button');
let quantidade = document.querySelector('.quantidade');
let resultado = document.querySelector('.resultado h2');
let quantidadeMax = document.querySelector('#maximo');
let blockResult = document.querySelector('.resultado')
btn.addEventListener('click', handleClick);

let numeros = [];
function handleClick() {
  let sortear = quantidade.value;
  let max = quantidadeMax.value;
  resultado.classList.add("animated", "pulse")

  for (let i = 0; i < sortear; i++) {
    let numGerado = Math.floor(Math.random() * max) + 1;
    if (numeros.indexOf(numGerado) !== -1) {
      handleClick();
    } else {
      numeros.push(numGerado)
      resultado.innerText += `${numGerado}-`
    }
  }
  blockResult.style.opacity = 1;
  setTimeout(() => {
    resultado.classList.remove("animated", "pulse")
  }, 750);

}

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 7500,          // Integer: Time between slide transitions, in milliseconds
});


