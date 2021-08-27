# WebDev Projekt 2019 - Cranach Digital App Archive
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)  
Praxisprojekt zum Vertiefungsmodul Web Development 2019 an der TH-Köln  

## Autoren des CDAA's
- Design: [Joel Mai](https://github.com/Inf166)
- Funktionalität: [Moritz Dahlke](https://github.com/iceq1337)
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
1. Öffnen der [Demo](https://iceq1337.github.io/CDAA-PWA-Demo/demo/), welche sich in einem seperaten Repository befindet.
2. Browsermenü öffnen oder, falls vorhanden, die am unteren Rand erscheinende Pop-Up Nachricht auswählen.
3. Anwendung zum Startbildschirm hinzufügen.
4. Auf den Startbildschirm wechseln und Anwendung starten.
5. Zugriff auf Kamera erlauben und Entscheidung merken.  

Zur Anleitung mit Bildern [hier](Dokumentation/Installation.md) klicken.

### Anwendung
Nach Start der Anwendung erhält der Nutzer die Möglichkeit, mittels QR-Scanner einen jedem Gemälde beiliegenden QR-Code einzuscannen. Dadurch gelangt er auf eine Informationsseite zum jeweiligen Gemälde. Auf dieser Seite findet er zusätzliche Bildinformationen wie bspw. eine Beschreibung oder Daten über Bildmaße. Außerdem ist der Nutzer in der Lage, über den sich unter dem Vorschaubild  befindenden Link "Mehr Bilder", eine Übersicht mit alternativen Bildansichten wie z.B. schwarz-weiß Versionen oder Infrarotabzüge anzeigen zu lassen.  

Am unteren Bildschirmrand befindet sich zu jedem Zeitpunkt eine Navigationsleiste, über die der Nutzer vier wesentliche Seiten ansteuern kann. Der Indikator für die aktuelle Seite ist hierbei optisch hervorgehoben.  

Der erste Navigationspunkt blendet den QR-Scanner für weitere QR-Scans ein.  

Über den zweiten Navigationspunkt kann sich der Nutzer seinen Scanverlauf anzeigen lassen, welcher alle zuvor abgerufenen Gemälde in absteigender Reihenfolge beinhaltet. So kann der Nutzer selbst wenn er sich bereits physisch vom Gemälde entfernt hat noch einmal auf die dazugehörigen Informationen zugreifen, um z.B. auseinanderliegende Gemälde miteinander zu vergleichen. Dafür kann der Nutzer das jeweilige Bild einfach antippen.  

Ein dritter Menüpunkt steuert eine Galerie an, welche jedes Gemälde in der aktuellen Ausstellung beinhaltet. In dieser Galerie kann der Nutzer Gemälde über ihren Namen suchen und finden. Auch hier lässt sich der jeweilige Eintrag antippen, um auf die Bildinformationen zuzugreifen.  

Der vierte und letzte Menüpunkt zeigt dem Nutzer eine Handvoll an nützlichen, projektbezogenen Links an und bietet dem Nutzer außerdem die Möglichkeit, seinen Scanverlauf zu löschen, um bspw. eine neue Ausstellungstour zu initiieren.  

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
