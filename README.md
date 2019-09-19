# WebDev Projekt 2019 - Cranach Digital App Archive
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)  
Praxisprojekt zum Vertiefungsmodul Web Development 2019 an der TH-Köln  

## Autoren des CDAA's
- [Design](#design) von [Joel Mai](https://github.com/Inf166)
- [Funktionalität](#anwendungslogik) von [Moritz Dahlke](https://github.com/inf155)
- [Dokumentation](#tutorial--rundgang) von [Emre Inci](https://github.com/bamalamusic)

## Kontext des CDAA's
### Was ist das CDAA?
Das CDAA bietet eine sehr einfache, innovative, mobile Version des originalen [Cranach Digital Archiv's](http://lucascranach.org/gallery). Die Anwendung ermöglicht es dem Nutzer, währrend des Aufenthalts in der Lucas Cranach Galerie, **QR-Codes** zu Gemälden einzulesen, um weitere, auf ein Wesentliches reduzierte, **Informationen** oder **alternative Ansichten** zum jeweiligen Gemälde zu erhalten. Und das auch **offline**!   

Das CDAA ist eine [Progressive Web App](https://de.wikipedia.org/wiki/Progressive_Web_App). Das bedeutet, die Anwendung kann sowohl normal in einer Browser-Registerkarte ausgeführt, oder aber direkt auf einem Smart-Device [installiert](#kofiguration-der-pwa-auf-dem-smart-device) werden. Nach dem Ausführen der auf einem Gerät installierten Anwendung verhält sich diese wie eine normale App. Deutlich wird dies dadurch, dass sie mit einem Begrüßungsbildschirm startet und in der Anwendung keine Browserleiste mehr sichtbar ist.  

Da es sich um eine PWA handelt ist es möglich, Website-Daten und Weiteres in den Gerätespeicher (Cache) aufzunehmen und sie somit auch offline verfügbar zu machen. So muss ein Besucher der Galerie nicht zwangsläufig mit Internet ausgestattet sein und kann die Anwendung auch verwenden, sollte er die Anwendung vorher zu Hause installiert haben.

## Projektziel & Projektart

## Aktueller Stand des CDAA's

## Tutorial, Rundgang und Installationsanleitung des CDAA's
### Tutorial & Rundgang
### Installationsanleitung der PWA auf dem Smart-Device
1. Öffnen des [Links](https://inf155.github.io/Cranach-PWA/demo/)
2. Seitenmenu öffnen oder die am unteren Rand stehende Pop-Up Nachricht auswählen
3. Zum Startbildschirm hinzufügen auswählen ![Zum Startbildschirm hinzufügen](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/TutorialScreenshots/Konfiguration_20190919-154313.png "Zum Startbildschirm hinzufügen")
4. Bestätigen ![Zum Startbildschirm hinzufügen bestätigen](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/TutorialScreenshots/Konfiguration_20190919-154318.png "Zum Startbildschirm hinzufügen bestätigen")
5. Auf dem Startbildschirm wechsel und PWA starten ![Zum Startbildschirm wechseln und starten](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/TutorialScreenshots/Konfiguration_20190919-154333.png "Zum Startbildschirm wechseln und starten")
6. PWA Zugriff auf Kamera gewähren ![PWA Zugriff auf Kamera gewähren](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/TutorialScreenshots/Konfiguration_20190919-154921.png "PWA Zugriff auf Kamera gewähren")

## Projektverlauf - Probleme, Lösungen, Dirty Hacks 
### Design
#### Vorbereitung
Da wir bereits im Wintersemester 2018/19 im Modul Screendesign das Thema 'Mobiler Museumsführer' hatten, hatten wir bereits eine Vorlage mit Anforderungen für die PWA. Da wir uns aber auch deutlich von den Multimedia Funktionen dieser differenzieren wollten, wählten wir für den Styleguide ein paar treffende Änderungen. 
- Zunächst haben wir die Farbpalette von den original CDA ignoriert und stattdessen Akkuschonende aber für viele Menschen gut lesbare Farben gewählt.
- Wir entwickelten ein Design das sowohl für den Desktop als auch Tablet und Smartphone gleichermaßen dargestellt werden kann und somit Verwirrung durch Variation und fehlende Konsistenz vermieden.
- Im Feedbacktermin erhielten wir noch vereinzelt Vorschläge für den Durchschuss(Zeilenhöhe) sowie Schriftgröße.
#### Mockups
Zu Beginn der Designphase erstellten wir einfache Mockups um bereits die Funktionalität und den notwenigen Aufwand für das Entwickeln der PWA einzuschätzen. 
1. ![Erstes Mockup](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Mockup/Mobile/Initial%20Idea.png "Erstes Mockup")
2. ![Basic Mockup](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Mockup/Mobile/More.jpg "Basic Mockup")
3. ![Scan Mockup](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Mockup/Mobile/Scan.jpg "Scan Mockup")
4. ![Zuletzt gescannt Mockup](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Mockup/Mobile/Zuletzt.jpg "Zuletzt gescannt Mockup")
5. ![Galerie Mockup](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Mockup/Mobile/Galerie.jpg "Galerie Mockup")
6. ![Extra Informationen Mockup](https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/Dokumentation/Mockup/Mobile/Bild.jpg "Extra Informationen Mockup")
#### Styleguide
Basierend auf den Mockups entwickelten wir einen Styleguide für die Abstände, Schriftgröße und Farbpalette
##### Abstände
- Zu einander gehörende Elemente ```padding: 5px;```
- Hierarchisch getrennte Elemente ```padding: 10px;```
- Unabhängige Elemente ```padding: 15px;```
- Außenabstand des Content's zum Displayrand
  - Mobil & Tablet ```padding: 10px;```
  - Desktop ```padding: 25%;```
##### Schriftgröße
- Seitentitel ```font-size: 44px;```
- Überschriften ```font-size: 24px;```
- Text ```font-size: 16px;```
- Teasertexte ```font-size: 14px;```
- Footer ```font-size: 10px;```
##### Durchschuss
- Für Überschriften: ```line-height: 130;```
- Für alle Fließtexte: ```line-height: 135;```
##### Farbpalette
- Dunkler Hintergrund mit ```--dark: rgb(40, 40, 45);```
- Toolbar und Navbar mit ```--grey: rgb(56, 54, 67);```
- weniger wichtige Elemente mit ```--lowcontrast: rgb(160, 157, 176);```
- Hervorhebung mit ```--highlight: rgb(107, 91, 205);```
- Schriftfarbe mit ```--light: rgb(238, 238, 238);```
- Abstufung der Schriftfarbe mit ```opacity: 0.9;```
##### Bildergrößen
- Für Mobil ```grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));```
- Für das Tablet & Desktop ```grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));```
### Anwendungslogik
### Besondere Anmerkungen
#### Frameworks
- [fontawesome](https://fontawesome.com/v4.7.0/icons/)
- [lightbox]()
- [Jquery]()
- [instascan]()

## Weitere Informationen
Weitere Informationen bezüglich des Projekts im [WIKI](https://github.com/Inf166/WDSS19-Praxisarbeit-CDAA/wiki)

## License
[GNU General Public License v3.0](https://github.com/Inf166/WDSS19-Praxisarbeit/blob/master/LICENSE)