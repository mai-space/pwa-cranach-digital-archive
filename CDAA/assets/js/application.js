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

function setHistory(history) {
    scanHistory = history;
    updateHistory();
}

function saveHistory(imgID) {
    scanHistory.push(imgID);
    if (window.indexedDB) {
        saveScanID(imgID);
    }
}

function updateHistory() {
    historyContainer.innerHTML = '';
    if (scanHistory.length > 0) {
        var lastElement = document.getElementsByClassName('new');
        for (let i = 0; i < lastElement.length; i++) {
            lastElement[i].classList.remove('new');
        }

        if (galleryData) {
            scanHistory.slice().reverse().forEach((scanID, scanIndex) => {
                    galleryData.paintings.forEach((painting) => {
                        if (painting.id == scanID) {
                            historyContainer.innerHTML += `
                            <div class="recentRow ${(scanIndex == 0) ? 'new' : ''}" data-gallery-id="${painting.id}">
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
            });
        }
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
                painting.chapters.forEach((chapter, chapterIndex) => {
                    detailSections += `<div class="detailSection" data-section-id="${chapterIndex + 1}"><i id="sectionIcon-${chapterIndex + 1}" class="fa fa-angle-right" aria-hidden="true"></i><h2>${chapter.title}</h2><p id="sectionContent-${chapterIndex + 1}" style="display:none">${chapter.content}</p></div>`;
                });
                infoContainer.innerHTML = `
                    <div class="detailRow">
                        <a href="${painting.urlToMainImage}" data-lightbox="detail-${painting.id}" data-title="${painting.title}">
                            <img class="detailImage" src="${painting.urlToMainImage}" alt="${painting.title}" />
                        </a>
                        <div class="detailInfo">
                            <h3 class="detailTitle">${painting.title}</h3>
                            <span class="detailDate">${painting.date}</span>
                            <span class="detailImages" data-gallery-id="${painting.id}"><i class="far fa-images">Mehr Bilder</i></span>
                        </div>
                        <div class="detailSection" data-section-id="0">
                            <i id="sectionIcon-0" class="fa fa-angle-right" aria-hidden="true"></i><h2>Beschreibung</h2>
                            <p id="sectionContent-0" style="display:none">${painting.description}</p>
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
                    imageView += `<a href="${apiURL}/gallery/${painting.id}/${image}" data-lightbox="alternative-${painting.id}" data-title="${painting.title}"><img class="galleryImage" src="${apiURL}/gallery/${painting.id}/${image}" alt="${image}" /></a>`;
                });
                imageViewContainer.innerHTML = `
                <div class="goBack" data-gallery-id="${painting.id}">
                    <button><span><i class="fa fa-arrow-left" aria-hidden="true"></i></span></button>
                </div>                   
                <div class="imagePreview">
                    <a href="${painting.urlToMainImage}" data-lightbox="alternative-${painting.id}" data-title="${painting.title}">
                        <img class="galleryImage" src="${painting.urlToMainImage}" alt="${painting.title}" />
                    </a>
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