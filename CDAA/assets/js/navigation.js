function showPage(context, icon = null) {
    document.getElementById(context).style.display = 'block';
    if (icon) document.getElementById(icon).classList.add('iconActive');
}

function hidePage(context, icon = null) {
    document.getElementById(context).style.display = 'none';
    if (icon) document.getElementById(icon).classList.remove('iconActive');
}

function changePage(page) {
    document.getElementById('infoImageView').style.display = 'none';
    document.getElementById('infoContent').style.display = 'block';

    if (page != 'scan') {
        stopScanner();
        hidePage(page, 'iconScan');
        document.body.style.overflow = 'auto';
    } else {
        startScanner();
        activePage(page, 'iconScan');
        document.body.style.overflow = 'hidden';
    }

    if (page != 'info') {
        hidePage(page);
    } else {
        activePage(page);
    }

    if (page != 'history') {
        hidePage(page, 'iconHistory');
    } else {
        activePage(page, 'iconHistory');
    }

    if (page != 'gallery') {
        hidePage(page, 'iconGallery');
    } else {
        activePage(page, 'iconGallery');
    }

    if (page != 'more') {
        hidePage(page, 'iconMore');
    } else {
        activePage(page, 'iconMore');
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
        document.getElementById('infoTitle').style.display = 'block';
    });
});