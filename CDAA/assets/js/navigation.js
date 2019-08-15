function changePage(page) {
    if (page != 'scan') {
        document.getElementById('scan').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementsById("scanicon"),style.filter = 'invert(36%) sepia(80%) saturate(5758%) hue-rotate(230deg) brightness(70%) contrast(90%)';
    } else {
        document.getElementById('scan').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    if (page != 'info') {
        document.getElementById('info').style.display = 'none';
    } else {
        document.getElementById('info').style.display = 'block';
    }

    if (page != 'history') {
        document.getElementById('history').style.display = 'none';
    } else {
        document.getElementById('history').style.display = 'block';
    }

    if (page != 'gallery') {
        document.getElementById('gallery').style.display = 'none';
    } else {
        document.getElementById('gallery').style.display = 'block';
    }

    if (page != 'more') {
        document.getElementById('more').style.display = 'none';
    } else {
        document.getElementById('more').style.display = 'block';
    }
}