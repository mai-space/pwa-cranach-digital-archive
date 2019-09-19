## Installation der PWA auf einem Smart-Device
1. Öffnen der [Demo](https://inf155.github.io/Cranach-PWA/demo/), welche sich in einem seperaten Repository befindet.
2. Browsermenü öffnen oder, falls vorhanden, die am unteren Rand erscheinende Pop-Up Nachricht auswählen.
3. Anwendung zum Startbildschirm hinzufügen.
4. Auf den Startbildschirm wechseln und Anwendung starten.
5. Zugriff auf Kamera erlauben und Entscheidung merken.

<img src="https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Images/Installation/Konfiguration_20190919-154313.png" width="250px" alt="Add to Homescreen">
<img src="https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Images/Installation/Konfiguration_20190919-154318.png" width="250px" alt="Add to Homescreen 2">
<img src="https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Images/Installation/Konfiguration_20190919-154333.png" width="250px" alt="Open App">
<img src="https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Images/Installation/Konfiguration_20190919-154921.png" width="250px" alt="PWA Camera Access">

## Deployment der Anwendung
Es genügt, den Inhalt des ``CDAA`` Ordners auf einen Webspace zu kopieren, da die PWA mit nativem Javascript auskommt. Um allerdings Änderungen an den Informationen der "fake API" vornehmen zu können, muss das Verzeichnis ``API`` ebenfalls auf den Webspace kopiert werden und anschließend in der ``CDAA/assets/js/application.js`` (1x), sowie in der ``CDAA/service-worker.js`` (2x) die API-URL geändert werden. Ansonsten werden die Informationen aus dem Repository bezogen.