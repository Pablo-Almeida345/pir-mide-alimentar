const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
      button.removeAttribute('disabled');
      return;
    }
} 

const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = 'pages/games.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

function seta(){
  window.location.href = "../index.html";
}