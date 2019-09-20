# Reflexion/Auswertung nach Abschluss des Projekts
## Verzeichnis
- [Design](#design)
- [Anwendungslogik](#anwendungslogik)

## Design
### Einleitung
Da der Großteil von uns bereits Erfahrung im Bereich Front-End hatte, waren wir optimistisch eingestellt, dies Projekt zu bewältigen.

### Probleme
**Problem: Design-Konzept**  
Wir hatten im vorherigen Semester im Modul Screendesign Entwürfe für einen Museumsbegleiter entwickelt, jedoch basierten diese stark auf dem abspielen von Audiodateien. In unserer App liegt der Fokus jedoch auf den Bildern und Textinformationen, daher konnten wir nur wenige Elemente der vergangenen Entwürfe in unser neues Design übernehmen. Dies war zwar eine gute Basis, jedoch nicht genug um ein vollständiges Design darauf zu setzen. Wir mussten uns nach aktuellen Trends orientieren, recherchieren und Konzepte eigenständig entwickeln.

**Lösung: Recherche & Mockups**  
Wir entschieden uns für moderne Farben, eine klassische Toolbar und farbenblind-freundliche Akzentfarben. Da wir zu diesem Zeitpunkt auch schon eine grobe Übersicht über die notwendigen Funktionen hatten, entwickelten wir erste [Mockups](Mockups.md).

**Problem: Konsistenz**  
Um den Nutzern ein konfliktfreies Nutzen der App zu bieten, war es uns von Anfang an wichtig ein leicht lernbares, und somit selbstbeschreibendes aber auch erwartungskonformes sowie aufgabenangemessenes Design zu entwickeln. Dabei war uns die Konsistenz zwischen den verschiedenen Ansichten besonders wichtig. 

**Lösung: Styleguide**  
Um die Konsistenz zu schaffen und die Lernförderlichkeit zu optimieren, entwickelten wir einen [Styleguide](Styleguide.md) für die weitere Gestaltung.

**Problem: SVG-Icon-Highlights**  
Bekanntlicher Weise werden aktuell offene Tabs in Toolbars hervorgehoben. In unserem Fall mit einer Farbe. Da unsere Icons bereits in unserer im Styleguide festgelegten Farbe erstellt sind und als svg importiert sind, lassen sie sich nicht einfärben über fill-tags.

**Lösung: filter-tag**  
Nach einer Recherche stellten wir fest, dass man den CSS ```filter``` Tag nutzen kann um so die Farbe zu erreichen die wir für unsere Highlights nutzen. Mit einer ```-active``` Klasse und JavaScript erreichten wir so den gewünschten Effekt.

**Problem: Responsive Gestaltung der PWA**  
Von Anfang an wollten wir eine konsistente Darstellung der App auf dem Mobilen, Tablet aber auch Desktop Device. Hier für gibt es verschiedene Ansätze

**Lösung: Media-Queries**  
Wir entschieden uns für CSS-Medie-Queries. Da sie uns mit einer Datei die Möglichkeit bieteten die verschieden Viewports zu gestalten.

**Problem: Galerie-Struktur**  
Da wir großen Wert auf die Darstellung von Bildern und Zusatzinformationen legen, war es eine echte Herausforderung für uns eine geeignete Darstellung für die Galerie und Alternativ-Ansichten zu finden. Wir wollten sowohl möglichst viele Bilder darstellen, aber auch nicht die Übersichtlichkeit und Identifikationsmöglichkeit verschlechtern.

**Lösung: Galerie via Flexgrid**  
Auch für solche Anwendungsprobleme gibt es verschiedene, legitime Möglichkeiten. Für die mobilen Ansichten wählten wir die ein-zeilige Darstellung, da sonst zusätzliche Erklärungen zu klein werden würden und die Bilder möglicherweise von sicht-beeinträchtigten Nutzern nicht erkannt werden könnten. Für das Tablet wählten wir eine ähnliche Ausgangsgröße, welche sich jedoch nach der Bildschirmgröße ausrichtet und somit noch größer werden kann. Dafür nutzen wir ```flex-grid``` mit dem css trick ```repeat(autofill, minmax())```.

**Problem: Bildinformationentab-Struktur**  
Da wir es bei den zusätzlichen Bildinformationen mit viel Text zu tun haben, mussten wir uns überlegen wie wir dieses Problem elegant und Nutzerfreundlich lösen.

**Lösung: Einklappbare Reiter**  
Die eleganteste Lösung ist für uns einklappbare Rubriken anzubieten, bei denen der Nutzer/-in entscheiden kann, welche Rubriken er/sie lesen möchte.

**Problem: Scanhistory-Zurücksetzen-Button**  
Da wir in unserer App nur einen einzigen richtigen Button haben, abgesehen von Toolbar, Zurückpfeil und Links, mussten wir uns überlegen wie wir diesen gestalten ohne die Konsitenz zu beeinträchtigen.

**Lösung: Besondere Darstellung**  
Der Button ist in der aktuellen Darstellung an die Suchleiste angelehnt, hat jedoch die Sichtbarkeit einer Überschrift, was wenn man die Gewichtung der Funktion des Buttons beachtet, absolut gerechtfertigt ist.

**Problem: QR-Scanner**  
Ein wirkliches Problem in der Gestaltung, so stellte sich heraus, war der QR-Code-Scanner. Da wir eine Libary nutzen und diese ein Video-Feed in der Ausrichtung der Rückkamera erzeugte, welche wiederum eigene Style-Properties mit sichbrachte, erschwerte uns dies das Designen einer ergonomischen Nutzeroberfläche.
Zunächst versuchten wir es mit eher "sanften" Methoden den Video-feed in unsere Content-Area zu integrieren, da der QR-Scanner sich aber stehts "weigerte" nachzugeben, lieferte eine Stackoverflow Recherche einen eher unkonventionellen Lösungsweg. Der Scanner war für viele Iterationen, über einen CSS Glitch, zentriert und funktionierte. Jedoch nur eingeschränkt nach unserer Vorstellung.
In der Tablet und Desktop Ansicht bedeckte er nicht vollständig die von uns vorgegebene Fläche.

**Lösung: Eine Nacht drüber schlafen**  
Eines Abends schaute ich ein Video über das zentrieren von Hintergrundvideos und dort nutze man die ```top & left``` Attribute in Kombination von ```transform: translate()```. Diese Lösung war deutlich eleganter und funktionierte nach ein paar Änderungen der Elternelemente einwandfrei. 

### Fazit
Das Entwickeln einer PWA ist ansich ähnlich wie das einer Website, mit dem Unterschied, dass man ständig seinen Browsercache löschen muss und das Vergessen davon zu viel Frust und langen Gesichtern/Abenden führen kann.
In diesem Praxisprojekt lernten wir viel über die wichtigen Details der Front-End Entwicklung, aber auch nützliche Tricks dabei.

## Anwendungslogik
### Einleitung
Nachdem wir uns darauf geeinigt hatten, dass wir mittels QR-Scanner zusätzliche Bildinformationen auf einer Website wiedergeben wollen, war schnell klar, dass wir versuchen würden, eine PWA mit integriertem QR-Scanner zu entwickeln, da die Verwendung eines geräte-spezifischen QR-Scanners und das sich ständig wiederholende Aufrufen und Schließen einer Website äußerst lästig sein würde. Die Erwartungen für die Anwendung waren erst einmal, dass diese ungefähr so aussieht, wie sie es auch jetzt im abgeschlossenen Zustand tut und dass der QR-Scanner, falls ein solcher überhaupt umgesetzt werden kann, ein Ergebnis liefert mit dem man relativ einfach arbeiten kann. Die Funktionen der Anwendung sollten so einfach wie möglich und ohne große Umwege umgesetzt werden, wobei trotzdem alle zu Beginn festgelegten Funktionen/Ziele erreicht werden sollten.  

Zu Beginn der Arbeit stellten sich uns die zwei folgende Fragen:  
*Ist der QR-Scanner realisierbar?*  
*Sind wir in der Lage, die Website als PWA umzusetzen?*

Um diese Fragen zu klären fanden vorerst zwei seperate Tests statt. Jeder dieser Tests beantwortete jeweils eine Frage. Zum einen wurde nach einer (möglichst einfachen) Möglichkeit gesucht, einen QR-Scanner auf der Website zu integrieren und mit dessen Ergebnis eine Grundvorraussetzung für das Projekt zu schaffen. Als nächstes wurde eine provisorische Website angelegt, die ohne zusätzliche Libraries, also mit nativen Mitteln, zu einer (sehr inkonsestenten) PWA umfunktioniert wurde.  

Nachdem diese beiden Fragen geklärt waren und beide Funktionen realisierbar erschienen gab es im Hinblick auf die restliche Arbeit wenig Bedenken und es stand fest, dass wir zum Ende des Projekts ein Ergebnis liefern können, ganz egal wie qualitativ hochwertig dies sein würde.

### Probleme & Rückblick
Während der Entwicklung der Anwendung kamen zwischenzeitlich immer wieder Fragen auf, die zwar keine wirklichen Probleme hervorriefen, aber durchaus kurzzeitig zum Nachdenken anregten.

Anfangs kam die Frage nach der Definition des Projektrahmens auf. Wie umfangreich sollte die Anwendung eigentlich werden und wie ausgereift sollte der Prototyp sein? Diese Frage konnte über die gesamte Arbeitszeit nie wirklich beantwortet werden, aber das Ergebnis ist zufriedenstellend.

Die Entscheidung, die Anwendung so einfach wie möglich zu gestalten, keine nodeJS Applikation daraus zu machen und lediglich natives Javascript zu verwenden vereinfachte die Arbeit ungemein, warf allerdings auch Fragen im Bezug auf den QR-Scanner, die PWA-Funktionalität und die Inhaltsgestaltung auf. Letztere bezieht sich auf die Frage ob die Entscheidung für unsere Art der Navigation die richtige gewesen ist, oder Seiten/Inhaltserstellung mittels Vue.js oder anderen Frameworks sinnvoller gewesen wäre, da die Inhaltsgestaltung und Navigation nun eher unkonventionell umgesetzt wurde. Beispielsweise gibt es nur eine HTML-Seite, dessen Inhalt aktualisiert und ein- bzw. ausgeblendet wird.

Rückblickend fällt die Nutzung vieler solcher "Dirty Hacks" in der Anwendung auf. Ein Beispiel dafür ist der Geltungsbereich von Javascript Code (Globale Variablen, etc.), was zu verschiedenen Problemen im Hinblick auf Initialisierung und Zugriff führen kann, wodurch bspw. eine bestimmte Include-Reihenfolge erforderlich ist. Ein anderes Beispiel ist Code-Redundanz. Bei der "Seiten"-Navigation wird bspw. Javascript-Code für DOM-Elemente ausgeführt um Eigenschaften festzulegen, die diese bereits besitzen, da die Anwendung keine Information über den Origin, also die vorherige Seite speichert.  

Eine ganz andere und wichtige Frage stellte sich erst gegen Ende des Projekts. Es war die Frage, ob das Erstellen der "fake API" sinnvoll war. Die "fake API" dient lediglich zur Demonstration dafür, dass Bilder und Bildinformationen online abgerufen werden können und nicht lokal gespeichert sein müssen. Um alternativen Bildansichten vom Caching auszuschliessen wurde einfach alles von der API mittels RegExp ausgeschlossen, was nicht gecached werden sollte, anstatt dies irgendwie dynamisch zu lösen, da Third-Party Scripts trotzdem gecached werden sollten.  

Bei der Implementierung dieser Third-Party Scripts gab es generell keine Probleme, allerdings trat eines bei der Findung einer Library zur Bildvergrößerung auf, denn dies wurde durch das bereits bestehendes System stark eingeschränkt, da alle Bilder dynamisch in das HTML eingepflegt werden und viele Libraries so nicht genutzt werden konnten. Die Wahl viel also auf eine Library (Lightbox v2), die in das System eingebaut werden konnte, wodurch die Zoomfunktion (vorerst) eingebüßt werden musste, da diese nicht im Funktionsumfang enthalten ist. Eine spätere Version der Library, welche sich in Entwicklung befindet, wird diese Funktion zwar beinhalten, aber so lange sind die Funktionen des Systems limitiert.

Als im Nachhinein vorgeschlagen wurde, den Scanverlauf lokal zu speichern und löschbar zu machen, konnte dies überraschend schnell und einfach umgesetzt werden, auch wenn es der erste Kontakt mit der IndexedDB war.

### Fazit
Abschließend kann man festhalten, dass das Ziel des Projekts auf jeden Fall erreicht wurde und ein Ergebnis zustande kam, welches durchaus vorzeigbar ist, auch wenn viele Bereiche eventuell nicht ganz produktionsfähig sind. Es gibt mit Sicherheit viele Aspekte, die man hätte besser/eleganter lösen können oder die bereits einen gewissen Lösungsstandard besitzen. Da man sich bei solch einer Arbeit stets in einem Lernprozess befindet, ist dies absolut vertretbar.