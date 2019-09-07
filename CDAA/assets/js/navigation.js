function changePage(page) {
    document.getElementById('infoImageView').style.display = 'none';
    document.getElementById('infoContent').style.display = 'block';

    if (page != 'scan') {
        stopScanner();
        document.getElementById('scan').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('iconScan').classList.remove('iconActive');
    } else {
        startScanner();
        document.getElementById('scan').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.getElementById('iconScan').classList.add('iconActive');
    }

    if (page != 'info') {
        document.getElementById('info').style.display = 'none';
    } else {
        document.getElementById('info').style.display = 'block';
    }

    if (page != 'history') {
        document.getElementById('history').style.display = 'none';
        document.getElementById('iconHistory').classList.remove('iconActive');
    } else {
        document.getElementById('history').style.display = 'block';
        document.getElementById('iconHistory').classList.add('iconActive');
    }

    if (page != 'gallery') {
        document.getElementById('gallery').style.display = 'none';
        document.getElementById('iconGallery').classList.remove('iconActive');
    } else {
        document.getElementById('gallery').style.display = 'block';
        document.getElementById('iconGallery').classList.add('iconActive');
    }

    if (page != 'more') {
        document.getElementById('more').style.display = 'none';
        document.getElementById('iconMore').classList.remove('iconActive');
    } else {
        document.getElementById('more').style.display = 'block';
        document.getElementById('iconMore').classList.add('iconActive');
    }
}

$(document).ready(function() {
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
                document.getElementById('infotitle').style.display = 'none';
            });
        } else {
            alert('Error: Internet Connection Required!');
        }
    });

    $(document).on('click','.goBack', function() {
        updateInfo($(this).data("gallery-id"));
        changePage('info');
        document.getElementById('infotitle').style.display = 'block';
    });
});