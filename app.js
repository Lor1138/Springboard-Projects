

//Add all page elements with ids that are needed to collect and submit values
const searchInput = document.getElementById('search');
const submitBtn  = document.getElementById('submit');
const removeBtn = document.getElementById('delete');
const gifContainer = document.getElementById('gif-container')
const inputData = searchInput.value;


submitBtn.addEventListener('submit', async function(e){
    e.preventDefault();
    await fetchGif();
    searchInput.value = " ";
});

removeBtn.addEventListener('click', function(e){
    $('img').remove();
});

async function fetchGif(){
    try {
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${inputData}&api_key=I9k7dN8ybyxlyER5yc30YYTvNskJ2HAm`);
        const data = res.data.data;
        const index = Math.random(Math.floor() * data.length)
        const url = res.data[index].images.downsized.url;
        createGif(url);
    }
    catch (e) {
        alert("No results, try another search term")
    }
}

function createGif(url){
    const createImg = document.createElement('img');
    createImg.src = url;
    gifContainer.appendChild(createImg);
};

