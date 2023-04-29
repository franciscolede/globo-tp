// ------------Boton seguir - dejar de seguir---------------

const btnFollow = document.getElementById('btnFollow');
const textFollow = "Seguir";
const textUnfollow = "Dejar de seguir";

btnFollow.addEventListener('click', function() {
    if (this.classList.contains('follow')) {
        this.textContent = textUnfollow;
        this.classList.remove('follow');
        this.classList.add('unfollow');
    } else {
        this.textContent = textFollow;
        this.classList.remove('unfollow');
        this.classList.add('follow');
    }
})

// -------User-------------

const user = document.getElementById('inputUser');
let txtUser = "";

user.addEventListener('input', function(event) {
    txtUser = event.target.value;
})

// --------------Comentario-------------

// const coment = document.getElementById('input-comentario');
// const txtComent = "";

// coment.addEventListener('input', function(event) {
//     txtComent = event.target.value;
// })

// const btnComent = document.getElementById('btnComent');
// btnComent.addEventListener('click', function(){
//     var myComent = document.getElementById('my-coment');
//     myComent.innerHTML = txtComent;
// })

const form = document.querySelector('form');
const comentInput = document.querySelector('#input-comentario');
const myComent = document.querySelector('#my-coment');

form.addEventListener('submit', (event) =>{
    event.preventDefault();


    const coment = comentInput.value;


    myComent.innerHTML += `<p>${coment}</p>`;

    comentInput.value = '';

});

