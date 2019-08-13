// Gallery Page
const mainGallery = document.querySelector('main');
const apiURL = 'https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/wip/backend/fakeAPI';

window.addEventListener('load', () => {
    updateGallery();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('../../service-worker.js', {scope: '/'});
            console.log('Service-Worker Registered.');
        } catch(err) {
            console.log('Service-Worker Registration Failed.');
        }
    }
});

async function updateGallery() {
    var galleryData = await fetch(`${apiURL}/gallery.json`);
    var galleryJSON = await galleryData.json();
    mainGallery.innerHTML = galleryJSON.paintings.map(createPainting).join('\n');
}

function createPainting(painting) {
    return `
        <div class="galleryRow">
            <img class="galleryImage" src="${painting.urlToMainImage}" alt="${painting.title}" />
            <div class="galleryDescription">
                <h3 class="galleryTitle">${painting.title}</h3>
                <span class="galleryDate">${painting.date}</span>
            </div>
            <p class="galleryText">${painting.description}</p>
        </div>
    `
}