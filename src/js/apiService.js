

const fetchImages = (query, page, key) => { 
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${key}`;
    return fetch(URL).then(response => {
        if (response.status === 200) { return response.json() }
    }).then(data => {
        return data.hits;
    }).catch(err => console.log('Error:', err));
    
};

export default fetchImages