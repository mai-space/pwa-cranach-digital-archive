window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

var DB = null;
var DB_Name = 'CDAA-DB';
var DB_Version = 1;
var DB_HistoryStore = 'ScanHistory';
function initializeDB() {
    var request = window.indexedDB.open(DB_Name, DB_Version);

    request.onupgradeneeded = function(e) {
        DB = e.target.result
        let historyStore = DB.createObjectStore(DB_HistoryStore, {autoIncrement: true});
        console.log(`[ObjectStore] DB-Upgrade: ${DB.name} Version: ${DB.version}`);
    }

    request.onsuccess = function(e) {
        DB = e.target.result
        console.log(`[ObjectStore] DB-Success: ${DB.name} Version: ${DB.version}`);
        loadScanIDs();
    }

    request.onerror = function(e) {
        console.error(`[ObjectStore] DB-Error: ${e.target.error}`);
    }
}

function saveScanID(scanID) {
    var TX = DB.transaction(DB_HistoryStore, 'readwrite');
    TX.onerror = function(e) {
        console.error(`[ObjectStore] (Transaction) DB-Error: ${e.target.error}`);
    };
    var historyStore = TX.objectStore(DB_HistoryStore);
    historyStore.add(scanID);
}

function loadScanIDs() {
    var TX = DB.transaction(DB_HistoryStore, 'readonly');
    var historyStore = TX.objectStore(DB_HistoryStore);
    var request = historyStore.openCursor();

    var savedScanIDs = new Array();
    request.onsuccess = function(e) {
        var cursor = e.target.result;
        if (cursor) {
            savedScanIDs.push(cursor.value);
            cursor.continue();
        } else {
            setHistory(savedScanIDs);
        }
    }   
}

if (!window.indexedDB) {
    console.error('[ObjectStore] IndexedDB is NOT supported.');
} else {
    initializeDB();
}