let favoritePlacesArray = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
    let domString = ``;
    arrayToPrint.forEach((city) => {
        domString += `<div class="col-3 myCards justify-content-center">`;
        domString += `  <h1 class="h1 header text-center">${city.cityName}</h1>`;
        domString += `      <h5 class="h5 text-center">${city.cityCountry}</h5>`;
        domString += `          <img class="myImgs justify-content-center" src="${city.cityImage}">`;
        domString += `              <p class="text-center">${city.favoriteRestaurant}</p>`;
        domString += `              <p class="text-center">${city.favoriteBar}</p>`;
        domString += `              <p class="text-center">${city.favoriteHotel}</p>`;
        domString += `              <p class="text-center">${city.favoriteTouristAttraction}</p>`;
        domString += `</div>`;
    });
    printToDom('cardsDiv', domString);
};

function loadFavoritePlaces() {
    console.log('yay');
    const data = JSON.parse(this.responseText);
    favoritePlacesArray = data.favoritePlaces;
    domStringBuilder(data.favoritePlaces);
};

const loadFailure = () => {
    console.error('data did not load');
};


const getFavoritePlaces = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', loadFavoritePlaces);
    myRequest.addEventListener('error', loadFailure);
    myRequest.open('GET', './db/favoritePlaces.json');
    myRequest.send();
};


// const buttonEvents = (e) => {

// }; 

const init = () => {
    getFavoritePlaces();
    // buttonEvents();
};
init();