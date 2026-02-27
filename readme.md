# Lern-Periode-9

## Auswahl
In der vorherigen Lernperiode habe ich TypeScript als Frontend-Technologie verwendet.
In dieser Lernperiode habe ich mich für Node.js mit Express als Backend-Technologie entschieden. Dadurch kann ich ein Frontend mit einem Backend verbinden und APIs erstellen.
Node.js verwendet JavaScript, was das Lernen einfacher macht, da ich durch TypeScript bereits mit der Syntax vertraut bin.


## Heute habe ich 
mich mit der Back-End-Technologie Node.js und Express beschäftigt, um eine Ergänzung zu meinem bestehenden TypeScript-Frontend aus der letzten Lernperiode zu entwickeln.
Zuerst habe ich Express installiert und einen einfachen Server erstellt, der auf Port 3000 läuft mit einer Hello World Ausgabe. Danach habe ich einen API-Endpoint (/api/hello) erstellt, der eine JSON-Antwort zurückgibt.
Ich habe mein Rock-Paper-Scissors-Frontend geändert, indem ich eine fetch() erstellt habe, welche Anfragen an meinen Express-Server sendet und die Antwort in der Browser-Konsole anzeigt.
Damit habe ich erfolgreich einen Tracer-Bullet-Prototype erstellt. Dieser zeigt, dass mein Frontend und Backend miteinander kommunizieren können. Dies ist die Grundlage, um später Spiellogik oder Daten vom Backend verarbeiten zu lassen.
Während der Umsetzung bin ich auf ein CORS-Problem gestossen. Nach einer kurzen Recherche fand ich heraus, dass ich die entsprechenden Header im Express-Server setzen musste.
Ich habe damit das grundlegende Konzept einer Client-Server-Kommunikation praktisch umgesetzt und verstanden.

Dieses Tutorial hat mir geholfen, ein Hello World zu erstellen: https://www.youtube.com/watch?v=VtXFGsekYuo



## 27.02.2026
- [x] Express-Tutorial recherchieren und nachvollziehen
- [x] Backend erweitern, sodass es eine zufällige Spielauswahl generiert
- [x] Spiellogik aus dem Frontend ins Backend verschieben
- [x] Backend-Projektstruktur verbessern und verstehen

Heute habe ich mein Backend mit Node.js und Express weiter aufgebaut. Ich habe die Projektstruktur verbessert und die Dateien in src, routes und game aufgeteilt. Danach habe ich den Server korrekt eingerichtet und darauf geachtet, dass JSON-Daten mit express.json() verarbeitet werden können. Ich habe eine POST-Route /api/play erstellt, über die das Frontend eine Spielauswahl senden kann. Zusätzlich habe ich begonnen, die Spiellogik aus dem Frontend ins Backend zu verschieben und eine Funktion erstellt, die eine zufällige Gegnerauswahl generiert. Beim Testen mit PowerShell sind Import- und Pfadprobleme aufgetreten, die ich durch Anpassen der Ordnerstruktur teilweise beheben konnte. Der Server läuft nun auf Port 3000 und die Route ist erreichbar.

## 6.03.2026
- [ ] Import-/Export-Problem vollständig lösen. (rps.js korrekt exportieren, play.js korrekt importieren, Route erfolgreich testen)
- [ ] Gewinnerlogik im Backend fertigstellen. (Funktion getResult(player, enemy), Rückgabe von "win" | "lose" | "draw", JSON-Response erweitern)
- [ ] Eingabe validieren (nur Rock, paper, scissors erlauben, bei falscher Eingabe HTTP 400 Senden)
- [ ] Frontend an Backend anbinden. (fetch("/api/play") verwenden, Ergebnis im HTML anzeigen, Prompt/Alert entfernen)
  
