console.log("Let's get this party started!");

//Add all page elements with ids that are needed to collect and submit values
const searchInput = document.getElementById('search');
const searchForm  = document.getElementById('searchForm');
const removeBtn = document.getElementById('delete');
const gifContainer = document.getElementById('gif-container')

searchForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    await fetchGif();
    searchInput.value = "";
});

removeBtn.addEventListener('click', function(e){
    clearImages();
});

async function fetchGif(){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchInput.value}&api_key=I9k7dN8ybyxlyER5yc30YYTvNskJ2HAm&limit=25`);
    const data = res.data.data;
    const index = Math.floor(Math.random() * data.length);
    console.log(`${data.length} results for "${searchInput.value}"`);
    console.log(`selecting random result ${index}...`);
    const url = data[index].images.fixed_height.url;
    clearImages();
    appendImage(url);
}

function appendImage(url) {
    const img = document.createElement("img");
    img.src = url;
    gifContainer.appendChild(img);
}

function clearImages() {
    while (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
      }
}