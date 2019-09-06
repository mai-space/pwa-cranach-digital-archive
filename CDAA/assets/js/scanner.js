const scanner_options = {
    continuous: true,
    video: document.getElementById('qr-camera'),
    mirror: false,
    captureImage: false,
    backgroundScan: true,
    refractoryPeriod: 5000,
    scanPeriod: 1
};
const scanner = new Instascan.Scanner(scanner_options);

function startScanner() {
    Instascan.Camera.getCameras().then((cameras) => {
        if (cameras.length > 0) {
            let camera = 0;
            if (cameras[1]) camera = 1;
            scanner.start(cameras[camera]).then(() => {
                console.log('[Scanner]: Scanner Started.');
            }).catch((err) => {
                console.error('[Scanner]: Failed To Start Scanner: ' + err);
            });
        } else {
            console.error('[Scanner]: No Cameras Found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
}
startScanner();

function stopScanner() {
    scanner.stop().catch((err) => {
        console.error('[Scanner]: Unable to stop Scanner!\nReason: ' + err);
    });
}

const qrPrefix = 'CDAA-';
scanner.addListener('scan', (content) => {
    console.log('[Scanner]: Code Scanned: ' + content);
    if (content.startsWith(qrPrefix)) {
        var imgID = content.replace(qrPrefix, '');
        if (parseInt(imgID)) {
            scanner.stop().then(() => {
                scanHistory.push(imgID);
                updateHistory();
                updateInfo(imgID);
                changePage('info');
            }).catch((err) => {
                console.error('[Scanner]: Unable to stop Scanner!\nReason: ' + err);
            });
        } else {
            alert('[Scanner]: Invalid Gallery ID!');
        }
    } else {
        alert('[Scanner]: No CDAA QR-Code!'); 
    }
});