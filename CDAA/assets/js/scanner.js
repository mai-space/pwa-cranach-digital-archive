const scanner_options = {
    continuous: true,
    video: document.getElementById('qr-preview'),
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
                console.log('Success: Scanner Started.');
            }).catch((err) => {
                console.error('Error: Failed To Start Scanner: ' + err);
            });
        } else {
            console.error('Error: No Cameras Found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
}
startScanner();

function stopScanner() {
    scanner.stop().catch((err) => {
        console.error('Error: Unable to stop Scanner!\nReason: ' + err);
    });
}

const qrPrefix = 'CDAA-';
scanner.addListener('scan', (content) => {
    console.log('Code Scanned: ' + content);
    if (content.startsWith(qrPrefix)) {
        var imgID = content.replace(qrPrefix, '');
        if (parseInt(imgID)) {
            scanner.stop().then(() => {
                scanHistory.push(imgID);
                updateHistory();
                updateInfo(imgID);
                changePage('info');
            }).catch((err) => {
                console.error('Error: Unable to stop Scanner!\nReason: ' + err);
            });
        } else {
            alert('Error: Invalid Gallery ID!');
        }
    } else {
        alert('Error: No CDAA QR-Code!'); 
    }
});