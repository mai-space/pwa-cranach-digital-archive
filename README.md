# WebDev Projekt 2019 - Cranach Digital App Archive
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)  
Praxisprojekt zum Vertiefungsmodul Web Development 2019 an der TH-Köln  

## Autoren des CDAA's
- Design: [Joel Mai](https://github.com/Inf166)
- Funktionalität: [Moritz Dahlke](https://github.com/inf155)
- Dokumentation: [Emre Inci](https://github.com/bamalamusic)

## Projektbeschreibung
### Projektziel
Das Ziel des Projekts war es, eine Anwendung zur Bereitsstellung von zusätzlichen Informationen zu Gemälden einer Lucas Cranach Ausstellung zu realisieren.

### Was ist das CDAA?
Das CDAA bietet eine sehr einfache, innovative, mobile Version des originalen [Cranach Digital Archiv's](http://lucascranach.org/gallery). Die Anwendung ermöglicht es dem Nutzer, währrend des Aufenthalts in der Lucas Cranach Ausstellung, **QR-Codes** zu Gemälden einzulesen, um weitere, auf ein Wesentliches reduzierte, **Informationen** oder **alternative Ansichten** zum jeweiligen Gemälde zu erhalten.

Das CDAA ist eine [Progressive Web App](https://de.wikipedia.org/wiki/Progressive_Web_App). Das bedeutet, die Anwendung kann sowohl normal in einer Browser-Registerkarte ausgeführt, oder aber direkt auf einem Smart-Device [installiert](#installation-der-pwa-auf-einem-smart-device) werden. Nach dem Ausführen der auf einem Gerät installierten Anwendung verhält sich diese wie eine normale App. Deutlich wird dies dadurch, dass sie mit einem Begrüßungsbildschirm startet und in der Anwendung keine Browserleiste mehr sichtbar ist.  

Da es sich um eine PWA handelt ist es möglich, Website-Daten und Weiteres in den Gerätespeicher (Cache) aufzunehmen und sie somit auch **offline verfügbar** zu machen. So muss ein Besucher der Galerie nicht zwangsläufig Zugang zum Internet besitzen, kann die Anwendung aber trotzdem verwenden, sollte er die Anwendung vorher zu Hause installiert haben.

Die Projektart des CDAA lässt sich nicht ganz so leicht auf ``Deep Dive`` oder ``Multiperspective`` eingrenzen, da keiner der beiden Ansätze zu 100% zutreffend ist. In erster Linie findet ein **Deep Dive** im Bereich ``Frameworks``, sowie im Bereich ``Frontend Development`` statt, was sich durchaus auch als Multiperspective definieren lässt.

### Funktionsweise des CDAA
Die Funktionsweise des CDAA ist sehr einfach. Im Prinzip besteht die Anwendung aus einer Website, die mittels nativem Javascript Service-Worker zu einer PWA umfunktioniert wurde,  somit auf einem Smart-Device wie eine App installiert werden kann und dadurch auch offline verfügbar ist. Durch eine selbst-ernannte "fake API" werden Bilder und Bildinformationen abgerufen und gecached. Ein eingebundener QR-Scanner akzeptiert bestimmte QR-Codes und mittels JS wird der Seiteninhalt aktualisiert und angezeigt. Der Scanverlauf wird lokal auf dem Gerät gespeichert und kann vom Benutzer manuell gelöscht werden. Dies funktioniert über die native, browser-übergreifende IndexedDB.


## Installation, Tutorial & Rundgang
### Installation der PWA auf einem Smart-Device
1. Öffnen der [Demo](https://inf155.github.io/Cranach-PWA/demo/), welche sich in einem seperaten Repository befindet.
2. Browsermenü öffnen oder, falls vorhanden, die am unteren Rand erscheinende Pop-Up Nachricht auswählen.
3. Anwendung zum Startbildschirm hinzufügen.
4. Auf den Startbildschirm wechseln und Anwendung starten.
5. Zugriff auf Kamera erlauben und Entscheidung merken.  

Zur Anleitung mit Bildern [hier](Dokumentation/Installation.md) klicken.

### Tutorial & Rundgang
Nach der erfolgreichen Installation landet man auf der Seite mit dem Aktiven QR Scanner. Von hier aus ist man in der Lage einen QR-Code zu scannen um direkt Informationen zum Bild zu erhalten. Wenn man seine Aufmerksamkeit auf den Unteren Bereich des Bildschirms lenkt, sieht man einen Indikator auf welcher Seite man sich befindet.  

Der 2te Button bringt einen zum Scanverlauf, wo man in der Lage ist die alten Bilder schnell und bequem wieder aufzurufen.
Der 3te Button von links ist die gesamte Bilder Galerie, in der jeder Eintrag gespeichert ist. Von hier ist es ebenfalls möglich, Bilder aufzurufen. Wenn dies gemacht wird, wird man auf die entsprechende Seite mit den jeweiligen Bildinformationen gebracht. Hier hat man die Möglichkeit Beschreibung, Maße und Bildträger angezeigt zu bekommen. Des weiteren ist es möglich sich weitere Versionen dieses Bildes anzusehen, wie z. B. Schwarz-Weiß, indem man unter dem Titel des Bildes auf "Mehr Bilder" klickt.

Mit dem Pfeil in der oberen Linken Ecke gelangt man dann wieder zur Bildinformation und um auf die Galerie wieder zu gelangen kann man einfach den Galerie-Button wieder anklicken. Die 3 Punkte welche den letzten Button ausmachen führen einen zu einer Seite, auf der man den Scanverlauf löschen kann und zugriff auf das Repository und die Dokumentation findet.

### Verwendete Frameworks & Libraries
- [jQuery](https://jquery.com/)
- [Instascan](https://github.com/schmich/instascan)
- [Font Awesome](https://fontawesome.com/v4.7.0/icons/)
- [Lightbox v2](https://lokeshdhakar.com/projects/lightbox2/)

Weitere Informationen bezüglich des Projekts befinden sich im [Wiki](https://github.com/Inf166/WDSS19-Praxisarbeit-CDAA/wiki) des Projekts.

## Reflexion/Auswertung nach Abschluss des Projekts
In einer genauen [Reflexion](Dokumentation/Reflexion.md) des Projektverlaufs werden wesentliche Herausforderungen/Probleme, sowie wichtige und interessante Erkenntnisse die aus der Projektarbeit hervorgingen vorgestellt und zusammengefasst.

## Lizenz
[MIT](https://github.com/Inf166/WDSS19-Praxisarbeit/blob/master/LICENSE)
