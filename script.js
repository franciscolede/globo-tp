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
    // txtUser += ": ";
})

// --------------Comentario-------------


const form = document.querySelector('form');
const comentInput = document.querySelector('#input-comentario');
const myComent = document.querySelector('#my-coment');
const zonaError = document.getElementById('zona-error');

form.addEventListener('submit', (event) =>{
    event.preventDefault();


    const coment = comentInput.value;

    if (txtUser != "" && coment != ""){
        myComent.innerHTML += `<p><span>${txtUser}</span>`+ `<span>: </span>` +`${coment}</p>`;
    }
    else if(txtUser == ""){
        zonaError.textContent = 'Debes ingresar tu nombre antes de comentar';
        return;
    }
    else if(coment == ""){
        zonaError.textContent = 'Debes ingresar un texto para poder comentar';
        return;
    }
    
    zonaError.textContent = '';
    comentInput.value = '';

});



// --------------LIKESSSSS-------------

var likeButton = document.getElementById("like-button");
var likeCount = 500;
var disliked = true;

likeButton.addEventListener("click", function() {
  if (disliked) {
    likeCount++;
    disliked = false;
    likeButton.innerHTML = "No Me Gusta";
    likeButton.classList.remove("disliked");
  } else {
    likeCount--;
    disliked = true;
    likeButton.innerHTML = "Me gusta";
    likeButton.classList.add("disliked");
  }
  updateLikeCount();
});

function updateLikeCount() {
  var likeCountElement = document.getElementById("like-count");
  likeCountElement.innerHTML = likeCount;
}
