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
                console.log('Scanner Started.');
            }).catch((err) => {
                console.error('Failed To Start Scanner: ' + err);
            });
        } else {
            console.error('No Cameras Found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
}
startScanner();

function stopScanner() {
    scanner.stop().catch((err) => {
        console.error('Scanner could not be stopped!');
    });
}

scanner.addListener('scan', (content) => {
    console.log('Code Scanned: ' + content);
    if (parseInt(content)) {
        scanner.stop().then(() => {
            scanHistory.push(content);
            updateHistory();
            updateInfo(content);
            changePage('info');
        }).catch((err) => {
            console.error('Scanner could not be stopped!');
        });
    } else {
        alert('This QR-Code does not belong to the Cranach Gallery!');
    }
});