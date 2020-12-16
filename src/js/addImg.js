import refs from './refs';
import imageCard from '../template/cards.hbs';


const upMarkup = (images) => { 
    let markup = imageCard(images);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
};

export default upMarkup
