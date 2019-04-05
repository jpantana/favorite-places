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


// const studentSort = () => {
//     students.sort(function(a, b){
//         if(a.name < b.name) { return -1; }
//         if(a.name > b.name) { return 1; }
//         return 0;  
//     })
// };
const sortCards = (e) => {
    console.log(e.target.id);
    // let northAmerica = ;
    // let europe = 
    if (document.getElementById('northAmerica').id === e.target.id) {
        alert('N america');       
    } else if (document.getElementById('europe').id === e.target.id) {
        alert('europe');
    } else {
        alert('help');
    }
};

const buttonEvents = () => {
    document.getElementById('northAmerica').addEventListener('click', sortCards);
    document.getElementById('europe').addEventListener('click', sortCards);
}; 

const init = () => {
    getFavoritePlaces();
    buttonEvents();
};
init();