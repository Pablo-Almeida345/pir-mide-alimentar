const grid = document.querySelector('.grid')

const characters = [
    'frango',
    'ovo',
    'macarrao',
    'pao',
    'frutas',
    'brigadeiro',
    'acucares',
    'carbo',
    'vegetais',
    'doce',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-characte');
    const secondCharacter = secondCard.getAttribute('data-characte');

    if(firstCharacter === secondCard)
}

const revealcard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card'); 
        firstCard = target.parentNode;
    } else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card'); 
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (characters) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');


    front.style.backgroundImage = `url('../img-memoria/${characters}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealcard);
    card.setAttribute('data-characte', characters);


    return card;
}

const loadGame = () => {

    const duplicatesCharacters = [...characters, ...characters];

    const shuffleedArray = duplicatesCharacters.sort( () => Math.random() - 0.5);


    shuffleedArray.forEach((characters) => {
       const card = createCard(characters);
       grid.appendChild(card);
    });
}

loadGame();

/*27:07*/