# Reflexion
## Design
### Einleitung
Folgt.

### Probleme
**Problem: Design-Konzept**  
Wir hatten bereits im vorherigen Semester im Modul Screendesign Entwürfe für einen Museumsbegleiter entwickelt, jedoch basierten diese stark auf dem abspielen von Audiodateien. In unserer App liegt der Fokus jedoch auf dem Bildern und Textinformationen, daher konnten wir nur wenige Elemente der vergangenen Entwürfe in unser neues Design übernehmen. Was zwar eine gute Basis lieferte, jedoch nicht genug um ein vollständiges Design darauf zu setzen. Wir mussten also uns nach aktuellen Trends orientieren, recherchieren und Konzepte eigenständig entwickeln.
**Lösung: Recherche & Mockups**  
Wir entschieden uns für moderne Farben, eine klassische Toolbar und farbenblind-freundliche Akzentfarben. Da wir zu diesem Zeitpunkt auch schon eine grobe Übersicht über die notwendigen Funktionen hatten, entwickelten wir erste [Mockups](Mockups.md).
**Problem: Konsistenz**  
Um den Nutzern ein Konflikt freies nutzen der App zu bieten, war es uns von Anfang an wichtig ein leicht lernbares, und somit selbstbeschreibendes aber auch erwartungskonformes sowie aufgabenangemessenes Design zu entwickeln. Dabei war uns die Konsistenz zwischen den verschiedenen Ansichten besonders wichtig. 
**Lösung: Styleguide**  
Um die Konsistenz zu schaffen und die Lernförderlichkeit zu optimieren, entwickelten wir einen [Styleguide](Styleguide.md) für die weitere Gestaltung.
**Problem: SVG-Icon-Highlights**  
Bekanntlicher Weise werden aktuelle Tabs in Toolbars besonders makiert. In unserem Fall mit einer Farbe. Da unsere Icons bereits in unserer im Styleguide festgelegten Farbe erstellt sind und als svg importiert sind lassen sie sich nicht einfärben über fill-tags.
**Lösung: filter-tag**  
Nach einer Recherche stellten wir fest, dass man den CSS ```filter``` Tag nutzen kann um so die Farbe zu erreichen die wir für unsere Highlights nutzen. Mit einer ```-active``` Klasse und JavaScript erreichten wir so den gewünschten Effekt.
**Problem: Responsive Gestaltung der PWA**  
Von Anfang an wollten wir eine konsistente Darstellung der App auf dem Mobilen, Tablet aber auch Desktop Device. Hier für gibt es verschiedene Ansätze
**Lösung: Media-Queries**  
Wir entschieden uns für CSS-Medie-Queries. Da sie uns mit einer Datei die Möglichkeit bieteten die verschieden Viewports zu gestalten.
**Problem: Galerie-Struktur**  
Da wir großen Wert auf die Darstellung von Bildern und zusatz Informationen legen, war es eine echte Herausforderung für uns eine geeignete Darstellung für die Galerie und Alternativ-Ansichten zu finden. Wir wollten sowohl möglichst viele Bilder darstellen aber auch nicht die Übersichtlichkeit und Identifikationsmöglichkeit verschlechtern.
**Lösung: Galerie via Flexgrid**  
Auch für solche Anwendungsprobleme gibt es verschiedene legitime Möglichkeiten, für die mobile Ansichten wählten wir die einzeilige Darstellung, da sonst zusätzliche Erklärungen zu klein werden würden und die Bilder möglicherweise von Sicht-beeinträchtigten Nutzern nicht erkannt werden würden. Für das Tablet wählten wir eine ähnliche Ausgangsgröße, welche sich jedoch nach der Bildschirmgröße ausrichtet und somit noch größer werden kann. Dafür nutzen wir ```flex-grid``` mit dem css trick ```repeat(autofill, minmax())```.
**Problem: Bildinformationentab-Struktur**  
Da wir es bei den zusätzlichen Bildinformationen mit viel Text zu tun haben, mussten wir uns überlegen wie wir dieses Problem elegant und Nutzerfreundlich lösen.
**Lösung: Einklappbare Reiter**  
Die eleganteste Lösung ist für uns einklappbare Rubriken anzubieten, bei denen der Nutzer entscheiden kann, welche Rubriken er/sie lesen möchte.
**Problem: Scanhistory-Zurücksetzen-Button**  
Da wir in unserer App nur einen einzigen richtigen Button haben, abgesehen von Toolbar, Zurückpfeil und Links, mussten wir uns überlegen wie wir diesen gestalten ohne die Konsitenz zu beeinträchtigen.
**Lösung: Besondere Darstellung**  
Der Button ist in der aktuellen Darstellung an die Suchleiste angelehnt, hat jedoch die Sichtbarkeit einer Überschrift, was wenn man die Gewichtung der Funktion des Buttons beachtet, absolut gerechtfertigt ist.
**Problem: QR-Scanner**  
Ein wirkliches Problem in der Gestaltung, so stellte sich heraus, war der QR-Code-Scanner. Da wir eine Libary nutzen und diese ein Video-Feed in der Ausrichtung der Rückkamera erzeugte, welche wiederum eigene Style-Properties mit sichbrachte, erschwerte uns dies das Designen einer angenehmen Nutzeroberfläche.
Zunächst versuchten wir es mit eher "sanften" Methoden den Video-feed in unsere Content-Area zu integrieren, da der QR-Scanner sich aber stehts weigerte nachzugeben, lieferte eine Stackoverflow Recherche einen eher unkonventionellen Lösungsweg. Der Scanner war für viele Iterationen, über einen CSS Glitch zentriert und funktionierte. Jedoch nur eingeschränkt nach unserer Vorstellung.
In der Tablet und Desktop Ansicht bedeckte er nicht vollständig die von uns vorgegebene Fläche.
**Lösung: Eine Nacht drüber schlafen**  
Eines Abends schaute ich ein Video über das zentrieren von Hintergrundvideos und dort nutze man die ```top & left``` Attribute in Kombination von ```transform: translate()```. Diese Lösung war deutlich eleganter und funktionierte nach ein paar Änderungen der Elternelemente einwandfrei. 

### Fazit
Das Entwickeln einer PWA ist ansich ähnlich wie das einer Website, mit dem Unterschied, dass man ständig seinen Browsercache löschen muss und das Vergessen davon zu viel Frust und langen Gesichtern führen kann.

## Anwendungslogik
### Einleitung
Folgt.

### Probleme
**Problem:**  
XYZ  
**Lösung:**  
123

### Fazit
Folgt.