


let input = document.querySelector('.input');
let convert = document.querySelector('.convert');

function binary (e) {
//  e.preventDefault();

     console.log('binary convertor is ready');
}


  convert.addEventListener('click' , binary);

  
let apply = document.querySelector('#apply');
let modal = document.querySelector('.modl-sec');
let cross = document.querySelector('#cross');
 

apply.addEventListener('click' , function() {
     modal.classList.add('active');
});

cross.addEventListener('click' , function() {
     modal.classList.remove('active');
});


