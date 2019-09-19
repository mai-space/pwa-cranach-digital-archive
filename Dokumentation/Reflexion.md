## Projektverlauf und Reflexion
Folgt.

# Ehemalige Struktur *TO BE CHANGED*
## Projektverlauf - Probleme, Lösungen, Dirty Hacks 
### Design
#### Vorbereitung
Da wir bereits im Wintersemester 2018/19 im Modul Screendesign das Thema 'Mobiler Museumsführer' hatten, hatten wir bereits eine Vorlage mit Anforderungen für die PWA. Da wir uns aber auch deutlich von den Multimedia Funktionen dieser differenzieren wollten, wählten wir für den Styleguide ein paar treffende Änderungen. 
- Zunächst haben wir die Farbpalette von den original CDA ignoriert und stattdessen Akkuschonende aber für viele Menschen gut lesbare Farben gewählt.
- Wir entwickelten ein Design das sowohl für den Desktop als auch Tablet und Smartphone gleichermaßen dargestellt werden kann und somit Verwirrung durch Variation und fehlende Konsistenz vermieden.
- Im Feedbacktermin erhielten wir noch vereinzelt Vorschläge für den Durchschuss(Zeilenhöhe) sowie Schriftgröße.
#### Mockups
Zu Beginn der Designphase erstellten wir einfache [Mockups](Dokumentation/Mockups.md) um bereits die Funktionalität und den notwenigen Aufwand für das Entwickeln der PWA einzuschätzen. 

#### Styleguide
Basierend auf den Mockups entwickelten wir einen [Styleguide](Dokumentation/Styleguide.md) für die Abstände, Schriftgröße und Farbpalette.

#### Hard Coden mit purem CSS
Natürlich hätte man das ganze Design in Sass schreiben können und dann in CSS kompilieren, aber wir empfunden das schreiben in CSS als absolut ausreichend für ein Projekt dieses Umfangs.
Eine Komplikation war jedoch das integrieren des QR Scanners, da dieser scheinbar sich nicht wirklich an die von uns geschriebenen CSS Regeln halten konnte, auf Grund von importierten Regeln durch den Scanner die unsere immer wieder überschrieben.

### Anwendungslogik

### Besondere Anmerkungen

#### Gelöste Probleme

#### Dirty Hacks

#### Zukünftige Änderungen/Erweiterungen
Im Feedbacktermin nannte Volker uns ein Framework mit welchem wir den direkten Vergleich zwischen zwei Bilder herstellen könnten. Über einen Schieberegler könnte man dann die Original Gemälde mit den Röntgenaufnahmen vergleichen, was wiederum ein unglaublich nützliches Feature wäre. Jedoch haben wir es in der Zeit nicht mehr geschafft diese Erweierung zu implementieren.
