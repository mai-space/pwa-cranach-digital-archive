# Reflexion/Auswertung nach Abschluss des Projekts
## Verzeichnis
- [Anwendungslogik](#anwendungslogik)
- [Design](#design)

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

Bei der Implementierung dieser Third-Party Scripts gab es generell keine Probleme, allerdings trat eines bei der Findung einer Library zur Bildvergrößerung auf, denn dies wurde durch das bereits bestehendes System stark eingeschränkt, da alle Bilder dynamisch in das HTML eingepflegt werden und viele Libraries so nicht genutzt werden konnten. Die Wahl fiel also auf eine Library (Lightbox v2), die in das System eingebaut werden konnte, wodurch die Zoomfunktion (vorerst) eingebüßt werden musste, da diese nicht im Funktionsumfang enthalten ist. Eine spätere Version der Library, welche sich in Entwicklung befindet, wird diese Funktion zwar beinhalten, aber so lange sind die Funktionen des Systems limitiert.

Als im Nachhinein vorgeschlagen wurde, den Scanverlauf lokal zu speichern und löschbar zu machen, konnte dies überraschend schnell und einfach umgesetzt werden, auch wenn es der erste Kontakt mit der IndexedDB war.

### Fazit
Abschließend kann man festhalten, dass das Ziel des Projekts auf jeden Fall erreicht wurde und ein Ergebnis zustande kam, welches durchaus vorzeigbar ist, auch wenn viele Bereiche eventuell nicht ganz produktionsfähig sind. Es gibt mit Sicherheit viele Aspekte, die man hätte besser/eleganter lösen können oder die bereits einen gewissen Lösungsstandard besitzen. Da man sich bei solch einer Arbeit stets in einem Lernprozess befindet, ist dies absolut vertretbar.

## Design
### Einleitung
Da bereits etwas Erfahrung im Front-End Bereich vorhanden war, herrschte in diesem Gebiet gesunder Optimismus. Es stellten sich die üblichen Fragen im Zusammenhang mit Webdesign.  

*Womit wollen wir das Design umsetzen (pures CSS, Vue.js, etc.)?*  
*Wie aufwendig soll das Design gestaltet sein (Animationen, Übergänge, evtl. sogar Sounddesign)?*  

Es wurde sich im Endeffekt für einen einfachen, aber effektiven Weg entschieden. Im vorherigen Semester im Modul Screendesign wurden bereits Entwürfe für einen Galeriebegleiter entwickelt, jedoch basierten diese stark auf dem Abspielen von Audiodateien. In der geplanten Anwendung sollte der Fokus allerdings auf den Bildern und den dazugehörigen Textinformationen liegen, weshalb nur wenige Elemente der vergangenen Entwürfe in das Design übernommen werden konnten. Zusätzlich sollte sich an aktuellen Trends orientiert werden, sodass noch etwas recherchiert und eigene Konzepte konzipiert werden mussten.  

Die Entscheidung fiel letzten Endes auf moderne Farben, eine klassische Navigationsleiste und im Hinblick auf Farbenblindheit auch geeignete Akzentfarben. Zu diesem Zeitpunkt waren die meisten geplanten Funktionen der Anwendung bereits definiert, was das Erstellen von ersten [Mockups](Mockups.md) wesentlich einfacher machte.  

Um Anwendern ein konfliktfreies Nutzen der Anwendung zu ermöglichen, war es wichtig, dass alle Funktionen leicht erlernbar, quasi selbsterklärend, aber auch erwartungskonform und der Aufgabe angemessen in das Design integriert werden. Dabei war die Konsistenz zwischen den verschiedenen Ansichten besonders wichtig. Um diese Konsistenz zu schaffen und den Lernprozess zu optimieren, wurde ein [Styleguide](Styleguide.md) für die weitere Gestaltung angelegt.  

### Probleme & Rückblick
Bekannterweise werden aktuell-geöffnete Tabs in Navigationsleisten optisch hervorgehoben. In diesem Fall geschieht dies mit einer einer Farbe. Da die Icons bereits in der im Styleguide festgelegten Farbe erstellt wurden und als svg-Dateien exportiert wurden, lassen diese sich nicht einfach über fill-tags einfärben. Nach einer kurzen Recherche wurde ermittelt, dass der CSS-Tag ```filter``` die Lösung für dieses Problem bietet. Mittels einer seperaten ```active```-Klasse und Javascript wurde so der gewünschte Effekt erreicht.  

Schon zu Beginn stand fest, dass die Darstellung der Anwendung auf sämtlichen Geräten wie Smartphones, Tablets und Desktop-PCs konsistent sein soll. Für dieses Vorhaben gibt es verschiedene Ansätze und es wurde der Weg über sog. Media-Queries gelöst, da diese die optimale Möglichkeit bieten, die verschiedenen Viewports zu gestalten.

Da beim Design auf die Hauptaspekte der Anwendung, also auf die Darstellung von Bildern und zugehörige Textinformationen großen Wert gelegt wird, war es eine Herausforderung, eine geeignete Darstellung für die Galerie, sowie die alternativen Ansichten zu finden. Es sollten zwar möglichst viele Bilder dargestellt werden, jedoch sollte sich das nicht negativ auf die Übersichtlichkeit auswirken. Auch für solche Probleme gibt es verschiedene Lösungsmöglichkeiten. Für die mobile Ansicht wurde eine einzeilige Darstellung gewählt, da sonst die vorhandenen Bildinformationen kaum oder garnicht sichtbar wären und die Bilder möglicherweise von Anwendern nicht erkannt werden könnten, die in ihrer Sicht beeinträchtigt sind. Für Tablets wurde eine ähnliche Ausgangsgröße gewählt, welche sich jedoch immer flexibel nach der Bildschirmgröße ausrichtet. Dafür wurde der CSS-Tag ```flex-grid``` mit dem einem kleinen Tick über ```repeat(autofill, minmax())``` verwendet. 

Da die Bildinformationen über viel Text verfügen, musste eine elegante und nutzerfreundliche Lösung dafür gefunden werden, damit dieser nicht den gesamten Bildschirm einnimmt. Die Entscheidung fiel auf aus-/einklappbare Rubriken, sodass der Anwender stets die Kontrolle darüber hat, welche Rubriken ihn interessieren.

Da es in der Anwendung, abgesehen von der Navigationsleiste und Back-Buttons, nur einen einzigen richtigen Button gibt, musste ein Weg ermittelt werden, diesen in das Design einzufügen ohne dieses zu beeinträchtigen. Der Button ist nun in seiner Darstellung an die Suchleiste angelehnt, hat jedoch die Größe einer Überschrift, welche durch Gewichtung der Funktion des Buttons absolut gerechtfertigt ist.  

Ein wirkliches Problem in der Gestaltung, so stellte sich heraus, war der QR-Code-Scanner. Da die genutzte Library ein Video-Feed mit eigenen Style-Eigenschaften ausliefert, wurde das Integrieren des Scanners in die Nutzeroberfläche erheblich erschwert. Zunächst wurde über eine "sanfte" Methode versucht, den Video-Feed in den Inhaltsbereich zu integrieren, da dies allerdings wenig Erfolg brachte, lieferte eine Stackoverflow Recherche einen eher unkonventionellen Lösungsweg. Der QR-Scanner war für viele Iterationen über einen CSS-Glitch zentriert, war jedoch nur eingeschränkt dort positioniert, wo er sich befinden sollte. In der Tablet- und Desktop-Ansicht bedeckte er nicht vollständig die vorgegebene Fläche. Die Lösung für dieses Problem lieferte ein Video, welches über das Zentrieren von Hintergrundvideos handelte. Dort wurden die ```top & left``` Attribute in Kombination mit ```transform: translate()``` verwendet. Diese Lösung war deutlich eleganter und funktionierte nach ein paar Änderungen an den CSS-Elementen einwandfrei.   

### Fazit
Der Lernprozess im Bereich der Front-End Entwicklung während dieses Praxisprojekts war sehr groß und es konnten sich viele wichtige Details und Tricks angeeignet werden. Die Vorgehensweise war stets strategisch durchdacht und geplant. Von Anfang an wurde ein angestrebtes Ziel in kleinere Teilprobleme zerlegt, welche anschließend zusammengefügt wurden. Etwas Feintuning führte letztlich zu einem fast optimalen Ergebnis. Mit dem Endergebnis kann man sehr zufrieden sein, auch wenn es hier und da sicherlich Verbesserungsmöglichkeiten gibt, die teilweise bereits ermittelt wurden und in Zukunft weiter ausgearbeitet werden könnten.