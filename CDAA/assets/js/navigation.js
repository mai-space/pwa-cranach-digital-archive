function changePage(page) {
    if (page != 'scan') {
        document.getElementById('scan').style.display = 'none';
        document.body.style.overflow = 'auto';
        // document.getElementsById("scanicon").setAttribute("fill", "#eeeeee");
        // document.getElementsById("scanicon").className = "icon";
        document.getElementById('scanicon').classList.remove('active');
    } else {
        document.getElementById('scan').style.display = 'block';
        document.body.style.overflow = 'hidden';
        // document.getElementsById("scanicon").setAttribute("fill", "#6b5bcd");
        // document.getElementsById("scanicon").className = "icon active";
        document.getElementById('scanicon').classList.toggle('active');
    }

    if (page != 'info') {
        document.getElementById('info').style.display = 'none';
        
    } else {
        document.getElementById('info').style.display = 'block';
        
    }

    if (page != 'history') {
        document.getElementById('history').style.display = 'none';
        // document.getElementsById("historyicon").replace( /(?:^|\s)icon(?!\S)/g , '' );
        document.getElementById('historyicon').classList.remove('active');
    } else {
        document.getElementById('history').style.display = 'block';
        // document.getElementsById("historyicon").replace( /(?:^|\s)icon active(?!\S)/g , '' );
        document.getElementById('historyicon').classList.toggle('active');
    }

    if (page != 'gallery') {
        document.getElementById('gallery').style.display = 'none';
        document.getElementById('galleryicon').classList.remove('active');
    } else {
        document.getElementById('gallery').style.display = 'block';
        document.getElementById('galleryicon').classList.toggle('active');
    }

    if (page != 'more') {
        document.getElementById('more').style.display = 'none';
        document.getElementById('moreicon').classList.remove('active');
    } else {
        document.getElementById('more').style.display = 'block';
        document.getElementById('moreicon').classList.toggle('active');
    }
}