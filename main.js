let favoritePlacesArray = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
    let domString = ``;
    arrayToPrint.forEach((city) => {
        domString += `<div class="">`;
        domString += `  <h1 class="h1 header"></h1>`;
        domString += `      <h5 class="h5">${city.cityName}</h5>`;
        domString += `          <img class="" src="${city.cityImage}">`;
        domString += `              <h4>${city.favoriteRestaurant}</h4>`;
        domString += `              <h4>${city.favoriteBar}</h4>`;
        domString += `              <h4>${city.favoriteHotel}</h4>`;
        domString += `              <h4>${city.favoriteTouristAttraction}</h4>`;
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