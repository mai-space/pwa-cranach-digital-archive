if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch((err) => {
		console.error('[ERROR] Service Workers are not supported.');
	});
}

const apiURL = 'https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/API';

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
        historyContainer.innerHTML = '<p>Ganz schön leer hier.</p>';
    }
}

var currentPainting = 0;
const infoContainer = document.querySelector('#infoContent');
function updateInfo(content) {
    if (galleryData) {
        galleryData.paintings.forEach((painting) => {
            if (painting.id == content) {
                var detailSections = '';
                painting.chapters.forEach((chapter) => {
                    detailSections += `<div class="detailSection"><i class="fa fa-angle-up" aria-hidden="true"></i><h2>${chapter.title}</h2><p>${chapter.content}</p></div>`;
                });
                infoContainer.innerHTML = `
                    <div class="detailRow">
                        <img class="detailImage" src="${painting.urlToMainImage}" alt="${painting.title}" />
                        <div class="detailInfo">
                            <h3 class="detailTitle">${painting.title}</h3>
                            <span class="detailDate">${painting.date}</span>
                            <span class="detailImages" data-gallery-id="${painting.id}"><i class="far fa-images">Mehr Bilder</i></span>
                        </div>
                        <div class="detailSection">
                        <i class="fa fa-angle-up" aria-hidden="true"></i><h2>Beschreibung</h2>
                            <p>${painting.description}</p>
                        </div>
                        ${detailSections}
                    </div>
                `;
            }
        });
    }
}

const imageViewContainer = document.querySelector('#infoImageView');
async function updateImageView(paintingID) {
    var imageViewRequest = await fetch(`${apiURL}/gallery/${paintingID}/more.json`);
    var imageViewJSON = await imageViewRequest.json();

    if (galleryData && imageViewJSON) {
        galleryData.paintings.forEach((painting) => {
            if (painting.id == paintingID) {
                var imageView = '';
                imageViewJSON.images.forEach((image) => {
                    imageView += `<img class="galleryImage" src="${apiURL}/gallery/${painting.id}/${image}" alt="${image}" />`;
                });
                imageViewContainer.innerHTML = `
                <div class="goBack" data-gallery-id="${painting.id}">
                    <button><span><i class="fa fa-chevron-left"></i> Zurück</span></button>
                </div>                   
                <div class="imagePreview">
					<img class="galleryImage" src="${painting.urlToMainImage}" alt="${painting.title}" />
					${imageView}
                </div>
                `;
            }
        });
    }
}

window.addEventListener('load', () => {
    updateGallery();
});