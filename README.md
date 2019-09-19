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
Zur Anleitung mit Bildern den Link öffnen. [hier](Dokumentation/pages/Installationsanleitung.md)
1. Öffnen des [Links](https://inf155.github.io/Cranach-PWA/demo/)
2. Seitenmenu öffnen oder die am unteren Rand stehende Pop-Up Nachricht auswählen
3. Zum Startbildschirm hinzufügen auswählen 
4. Bestätigen 
5. Auf dem Startbildschirm wechsel und PWA starten 
6. PWA Zugriff auf Kamera gewähren 

## Projektverlauf - Probleme, Lösungen, Dirty Hacks 
### Design
#### Vorbereitung
Da wir bereits im Wintersemester 2018/19 im Modul Screendesign das Thema 'Mobiler Museumsführer' hatten, hatten wir bereits eine Vorlage mit Anforderungen für die PWA. Da wir uns aber auch deutlich von den Multimedia Funktionen dieser differenzieren wollten, wählten wir für den Styleguide ein paar treffende Änderungen. 
- Zunächst haben wir die Farbpalette von den original CDA ignoriert und stattdessen Akkuschonende aber für viele Menschen gut lesbare Farben gewählt.
- Wir entwickelten ein Design das sowohl für den Desktop als auch Tablet und Smartphone gleichermaßen dargestellt werden kann und somit Verwirrung durch Variation und fehlende Konsistenz vermieden.
- Im Feedbacktermin erhielten wir noch vereinzelt Vorschläge für den Durchschuss(Zeilenhöhe) sowie Schriftgröße.
#### Mockups
Zu Beginn der Designphase erstellten wir einfache [Mockups](Dokumentation/pages/Mockups.md) um bereits die Funktionalität und den notwenigen Aufwand für das Entwickeln der PWA einzuschätzen. 

#### Styleguide
Basierend auf den Mockups entwickelten wir einen [Styleguide](Dokumentation/pages/Styleguide.md) für die Abstände, Schriftgröße und Farbpalette.

#### Hard Coden mit purem CSS
Natürlich hätte man das ganze Design in Sass schreiben können und dann in CSS kompilieren, aber wir empfunden das schreiben in CSS als absolut ausreichend für ein Projekt dieses Umfangs.
Eine Komplikation war jedoch das integrieren des QR Scanners, da dieser scheinbar sich nicht wirklich an die von uns geschriebenen CSS Regeln halten konnte, auf Grund von importierten Regeln durch den Scanner die unsere immer wieder überschrieben.

### Anwendungslogik

### Besondere Anmerkungen

#### Gelöste Probleme

#### Dirty Hacks

#### Zukünftige Änderungen/Erweiterungen
Im Feedbacktermin nannte Volker uns ein Framework mit welchem wir den direkten Vergleich zwischen zwei Bilder herstellen könnten. Über einen Schieberegler könnte man dann die Original Gemälde mit den Röntgenaufnahmen vergleichen, was wiederum ein unglaublich nützliches Feature wäre. Jedoch haben wir es in der Zeit nicht mehr geschafft diese Erweierung zu implementieren.

#### Frameworks & Libraries
- [Fontawesome](https://fontawesome.com/v4.7.0/icons/)
- [Lightbox](https://lokeshdhakar.com/projects/lightbox2/)
- [Jquery](https://jquery.com/)
- [Instascan](https://github.com/schmich/instascan)

## Weitere Informationen
Weitere Informationen bezüglich des Projekts im [WIKI](https://github.com/Inf166/WDSS19-Praxisarbeit-CDAA/wiki)

## License
[GNU General Public License v3.0](https://github.com/Inf166/WDSS19-Praxisarbeit/blob/master/LICENSE)