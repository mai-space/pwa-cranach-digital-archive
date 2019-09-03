function changePage(page) {
    document.getElementById('infoImageView').style.display = 'none';

    if (page != 'scan') {
        stopScanner();
        document.getElementById('scan').style.display = 'none';
        document.body.style.overflow = 'auto';
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

$(document).ready(function(){
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
        document.getElementById('infoContent').style.display = 'block';
        changePage('info');
    });
});