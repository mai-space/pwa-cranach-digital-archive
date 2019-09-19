# Styleguide

## Abstände
- Zu einander gehörende Elemente ```padding: 5px;```
- Hierarchisch getrennte Elemente ```padding: 10px;```
- Unabhängige Elemente ```padding: 15px;```
- Außenabstand des Content's zum Displayrand
  - Mobil & Tablet ```padding: 10px;```
  - Desktop ```padding: 25%;```  

## Schriftgrößen
- Seitentitel ```font-size: 44px;```
- Überschriften ```font-size: 22px;```
- Text ```font-size: 16px;```
- Teasertexte ```font-size: 14px;```
- Footer ```font-size: 10px;```  

## Durchschuss
- Für Überschriften: ```line-height: 130;```
- Für alle Fließtexte: ```line-height: 135;```  

## Farbpalette
- Dunkler Hintergrund mit ```--dark: rgb(40, 40, 45);```
- Toolbar und Navbar mit ```--grey: rgb(56, 54, 67);```
- Weniger wichtige Elemente mit ```--lowcontrast: rgb(160, 157, 176);```
- Hervorhebung mit ```--highlight: rgb(107, 91, 205);```
- Schriftfarbe mit ```--light: rgb(238, 238, 238);```
- Abstufung der Schriftfarbe mit ```opacity: 0.9;```  

## Bildgrößen
- Für Mobil ```grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));```
- Für Tablet & Desktop ```grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));```