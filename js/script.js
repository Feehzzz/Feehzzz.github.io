const btn = document.querySelector('button');
const btnLimpar = document.querySelector('.btn-limpar')
let quantidade = document.querySelector('.quantidade');
let resultado = document.querySelector('.resultado h2');
let quantidadeMax = document.querySelector('.maximo');
let blockResult = document.querySelector('.resultado')

btn.addEventListener('click', handleClick);
btnLimpar.addEventListener('click', limpaNumeros)

let numeros = [];

function handleClick(quantity, ) {

  
  quantity = +quantidadeMax.value;
  if(quantity >0){
    let novoNum = Math.floor(Math.random() * quantity) +1;
    if(numeros.indexOf(novoNum) === -1) {
      numeros.push(novoNum)
      resultado.innerHTML += novoNum + '-'
      resultado.classList.add('animated', 'pulse')

    } else {
      handleClick()
      
    }
  }
  blockResult.style.opacity = 1;   
  setTimeout(() => {
    resultado.classList.remove('animated', 'pulse')
  }, 600); 
}  
  
function limpaNumeros(){
  if(numeros.length > 0 ) numeros = []
  resultado.innerHTML = ''
  blockResult.style.opacity = 0;
  
}

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 10000,          // Integer: Time between slide transitions, in milliseconds
});


