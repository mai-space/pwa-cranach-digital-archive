
const apiURL = 'https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/wip/backend/fakeAPI';

var galleryData;

const galleryContainer = document.querySelector('#galleryContent');

async function updateGallery() {
    var galleryRequest = await fetch(`${apiURL}/gallery.json`);
    var galleryJSON = await galleryRequest.json();
    galleryContainer.innerHTML = galleryJSON.paintings.map(createGalleryPainting).join('\n');
    galleryData = galleryJSON;
}

function createGalleryPainting(painting) {
    return `
        <div class="galleryRow" data-gallery-id="${painting.id}">
            <img class="galleryImage" src="${painting.urlToMainImage}" alt="${painting.title}" />
            <div class="galleryDescription">
                <h3 class="galleryTitle">${painting.title}</h3>
                <span class="galleryDate">${painting.date}</span>
            </div>
            <p class="galleryText">${painting.description}</p>
        </div>
    `;
}

const historyContainer = document.querySelector('#historyContent');
var scanHistory = new Array();

function updateHistory() {
    historyContainer.innerHTML = '';
    if (scanHistory.length > 0) {
        scanHistory.reverse().forEach((scan) => {
            if (galleryData) {
                galleryData.paintings.forEach((painting, index) => {
                    if (painting.id == scan) {
                        historyContainer.innerHTML += `
                        <div class="recentRow ${scanHistory.length - 1 == index ? 'new' : ''}" data-gallery-id="${painting.id}">
                            <img class="recentImage" src="${painting.urlToMainImage}" alt="${painting.title}" />
                            <div class="recentContent">
                                <span class="recentTitle">${painting.title}</span>
                                <span class="recentTime">${painting.date}</span>
                                <span class="recentTeaser">${painting.description}</span>
                            </div>      
                        </div>               
                        `;
                    }
                });
            }
        });
    } else {
        historyContainer.innerHTML = '<p>No Scan History.</p>';
    }
}

var currentPainting = 0;
const infoContainer = document.querySelector('#infoContent');
function updateInfo(content) {
    if (galleryData) {
        galleryData.paintings.forEach((painting) => {
            if (painting.id == content) {
                infoContainer.innerHTML = `
                    <h2 id="infoTitle">${painting.title}</h2>
                    <h3 id="infoDate">${painting.date}</h3>
                    <h4 id="infoArtist">${painting.artist}</h4>
                    <p id="infoDescription">${painting.description}</p>
                `;
            }
        });
    }
}

window.addEventListener('load', () => {
    updateGallery();
});