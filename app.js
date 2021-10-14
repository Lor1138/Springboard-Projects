

//Add all page elements with ids that are needed to collect and submit values
const searchInput = document.getElementById('search');
const submitBtn  = document.getElementById('submit');
const removeBtn = document.getElementById('delete');
const gifContainer = document.getElementById('gif-container')
const inputData = searchInput.value;


submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    fetchGif();
    searchInput.value = " ";
});

removeBtn.addEventListener('click', function(e){
    e.preventDefault();
    $('img').remove();
});

async function fetchGif(){
    try{
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${inputData}&api_key=I9k7dN8ybyxlyER5yc30YYTvNskJ2HAm`);
        const random = Math.random(Math.floor() * res.data.length)
        const urlGif = res.data.data[random].images.downsized.url;
        createGif();
    }
    catch (e) {
        alert("No results, try another search term")
    }
}

function createGif(url){
    const createImg = document.createElement('img');
    createImg.setAtttribute('src', urlGif);
    gifContainer.append(createImg);
};

