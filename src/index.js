import fetchImages from './js/apiService';
import addImg from './js/addImg';
import refs from './js/refs';

import './css/styles.css';

const API_KEY = '19548879-107cb87ae385e6159bb9744cd';
let inputValue;
let page = 1;

fetchImages('cow', 2, API_KEY);

refs.form.addEventListener('submit', getFormSubmit);

function getFormSubmit(event) {
    event.preventDefault();
    inputValue = event.target.elements.query.value;    
    refs.gallery.innerHTML = '';
    event.target.reset();
    if (inputValue.length > 1) {
        page = 1;
        fetchImages(inputValue, page, API_KEY).then(img => { addImg(img); page += 1; refs.button.classList.toggle('show'); });
        
    };
    
}

refs.button.addEventListener('click', loadImg);



function loadImg() {

    fetchImages(inputValue, page, API_KEY)
        .then(img => {
            addImg(img);
            page += 1;
            window.scrollTo({
                top: document.documentElement.offsetHeight - 2935,
                behavior: 'smooth'
            });  
        }).catch(err => console.log('Error:', err));

}
