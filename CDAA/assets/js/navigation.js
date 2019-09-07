function hidePage(page, icon = null) {
    document.getElementById(page).style.display = 'none';
    if (icon != null) document.getElementById(icon).classList.remove('iconActive');
}

function showPage(page, icon = null) {
    document.getElementById(page).style.display = 'block';
    if (icon != null) document.getElementById(icon).classList.add('iconActive');

    if (page == 'scan') {
        startScanner();
        document.body.style.overflow = 'hidden';
    } else {
        stopScanner();
        document.body.style.overflow = 'auto';
    }

    if (page == 'info') {
        document.getElementById('infoTitle').style.display = 'block';
    }
}

function changePage(page) {
    $('html,body').scrollTop(0);
    document.getElementById('infoContent').style.display = 'block';
    document.getElementById('infoImageView').style.display = 'none';

    if (page != 'scan') {
        hidePage('scan', 'iconScan');
    } else {
        showPage('scan', 'iconScan');
    }

    if (page != 'info') {
        hidePage('info');
    } else {
        showPage('info');
    }

    if (page != 'history') {
        hidePage('history', 'iconHistory');
    } else {
        showPage('history', 'iconHistory');
    }

    if (page != 'gallery') {
        hidePage('gallery', 'iconGallery');
    } else {
        showPage('gallery', 'iconGallery');
    }

    if (page != 'more') {
        hidePage('more', 'iconMore');
    } else {
        showPage('more', 'iconMore');
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
                document.getElementById('infoTitle').style.display = 'none';
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