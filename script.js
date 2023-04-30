// ------------Boton seguir - dejar de seguir---------------

const btnFollow = document.getElementById('btnFollow');
const textFollow = "Seguir";
const textUnfollow = "Dejar de seguir";

const postDiv = document.getElementById('post');
const aboutMeDiv = document.getElementById('about-me');
const privateDiv = document.getElementById('private-profile');

btnFollow.addEventListener('click', function() {
    if (this.classList.contains('follow')) {
        this.textContent = textUnfollow;
        this.classList.remove('follow');
        this.classList.add('unfollow');

        postDiv.classList.remove('display-off');
        postDiv.classList.add('display-on')

        aboutMeDiv.classList.remove('display-off');
        aboutMeDiv.classList.add('display-on')

        privateDiv.classList.remove('display-on');
        privateDiv.classList.add('display-off')
    } else {
        this.textContent = textFollow;
        this.classList.remove('unfollow');
        this.classList.add('follow');

        postDiv.classList.remove('display-on');
        postDiv.classList.add('display-off')

        aboutMeDiv.classList.remove('display-on');
        aboutMeDiv.classList.add('display-off')

        privateDiv.classList.remove('display-off');
        privateDiv.classList.add('display-on')
    }
})

// -------User-------------

const user = document.getElementById('inputUser');
let txtUser = "";

user.addEventListener('input', function(event) {
    txtUser = event.target.value;
    // txtUser += ": ";
    userError.textContent = ' ';
})

// --------------Comentario-------------


const form = document.querySelector('form');
const comentInput = document.querySelector('#input-comentario');
const myComent = document.querySelector('#my-coment');
const zonaError = document.getElementById('zona-error');
const userError = document.getElementById('user-error')

form.addEventListener('submit', (event) =>{
    event.preventDefault();


    const coment = comentInput.value;

    if (txtUser != "" && coment != ""){
        myComent.innerHTML += `<p><span>${txtUser}</span>`+ `<span>: </span>` +`${coment}</p>`;
    }
    else if(txtUser == ""){
        zonaError.textContent = 'Debes ingresar TU NOMBRE antes de comentar';
        document.getElementById('inputUser').focus();
        userError.textContent = 'Ingrese su usuario';
        return;
    }
    else if(coment == ""){
        zonaError.textContent = 'Debes ingresar UN TEXTO para poder comentar';
        document.getElementById('input-comentario').focus();
        return;
    }
    
    zonaError.textContent = '';
    comentInput.value = '';

});



// --------------LIKESSSSS-------------

var likeButton = document.getElementById("like-button");
var likeCount = 74999999;
var disliked = true;


likeButton.addEventListener("click", function() {
  if (disliked) {
    likeCount++;
    disliked = false;
    likeButton.innerHTML = "No Me Gusta";
    likeButton.classList.remove("disliked");
    likeButton.classList.add("unfollow");
  } else {
    likeCount--;
    disliked = true;
    likeButton.innerHTML = "Me gusta";
    likeButton.classList.remove("unfollow");
    likeButton.classList.add("disliked");
    
  }
  updateLikeCount();
});

function updateLikeCount() {
  var likeCountElement = document.getElementById("like-count");
  likeCountElement.innerHTML = likeCount;
}

//---------Sliderrrrrrrr-----------

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function moverDerecha(){
  let sliderSectionFirst = document.querySelectorAll(".slider_section") [0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend',sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  },500);
}
function moverIzquierda(){
  let sliderSection = document.querySelectorAll(".slider_section");
  let sliderSectionLast = sliderSection[sliderSection.length-1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin',sliderSectionLast);
    slider.style.marginLeft = "-100%";
  },500);
}

btnRight.addEventListener('click',function(){
  moverDerecha();
})
btnLeft.addEventListener('click',function(){
  moverIzquierda();
})