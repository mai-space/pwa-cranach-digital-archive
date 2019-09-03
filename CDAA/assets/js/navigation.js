function changePage(page) {
    document.getElementById('infoImageView').style.display = 'none';
    document.getElementById('infoContent').style.display = 'block';

    if (page != 'scan') {
        stopScanner();
        document.getElementById('scan').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('scanicon').style.filter = '';
    } else {
        startScanner();
        document.getElementById('scan').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.getElementById('scanicon').style.filter = 'invert(36%) sepia(80%) saturate(5758%) hue-rotate(230deg) brightness(70%) contrast(90%)';
    }

    if (page != 'info') {
        document.getElementById('info').style.display = 'none';
    } else {
        document.getElementById('info').style.display = 'block';
    }

    if (page != 'history') {
        document.getElementById('history').style.display = 'none';
        document.getElementById('historyicon').style.filter = '';
    } else {
        document.getElementById('history').style.display = 'block';
        document.getElementById('historyicon').style.filter = 'invert(36%) sepia(80%) saturate(5758%) hue-rotate(230deg) brightness(70%) contrast(90%)';
    }

    if (page != 'gallery') {
        document.getElementById('gallery').style.display = 'none';
        document.getElementById('galleryicon').style.filter = '';
    } else {
        document.getElementById('gallery').style.display = 'block';
        document.getElementById('galleryicon').style.filter = 'invert(36%) sepia(80%) saturate(5758%) hue-rotate(230deg) brightness(70%) contrast(90%)';
    }

    if (page != 'more') {
        document.getElementById('more').style.display = 'none';
        document.getElementById('moreicon').style.filter = '';
    } else {
        document.getElementById('more').style.display = 'block';
        document.getElementById('moreicon').style.filter = 'invert(36%) sepia(80%) saturate(5758%) hue-rotate(230deg) brightness(70%) contrast(90%)';
    }
}

$(document).ready(function(){
    document.getElementById('scanicon').style.filter = 'invert(36%) sepia(80%) saturate(5758%) hue-rotate(230deg) brightness(70%) contrast(90%)';
    $(document).on('click','.galleryRow', function() {
        updateInfo($(this).data("gallery-id"));
        changePage('info');
    });

    $(document).on('click','.recentRow', function() {
        updateInfo($(this).data("gallery-id"));
        changePage('info');
    });

    $(document).on('click','.detailImages', function() {
        if (window.navigator.onLine) {
            updateImageView($(this).data("gallery-id")).then(() => {
                document.getElementById('infoContent').style.display = 'none';
                document.getElementById('infoImageView').style.display = 'block';
            });
        } else {
            alert('Error: Internet Connection Required!');
        }
    });

    $(document).on('click','.goBack', function() {
        updateInfo($(this).data("gallery-id"));
        changePage('info');
    });
});