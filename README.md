# 2D Image Library
2D Image Library is a small project for my computer graphics course at htw berlin.
The assignment was to write a small three.js program.

## Installation

Install [Node.js](https://nodejs.org/en/download) to load and manage dependencies

```bash
npm i
```

## Start the application

```bash
npx vite
```

If everything went well, you'll see a URL like http://localhost:5173 appear in your terminal, and can open that URL to see your web application.

## The idea
I wanted to create a 2D photo gallery in a 3D space. The initial idea was that the light comes through a window and you can see the shadow of the floor (so the light rays from the window). Unfortunately I failed in the attempt to implement this and had to choose a simpler variant.

In the current version I have several pictures hanging on a wall. 3 spotlights illuminate these pictures and thus cast a shadow on the wall that is in the background.
By moving the mouse you can move on the x-axis to the last picture and thus look at the pictures.
Since there is no camera movement for such a movement from Three.JS itself, I had to implement this myself.

### Material
The choice of material was relatively simple. For the pictures I took the MeshBasicMaterial, because I can display the pictures as normal as I have them. No reflection, no angewisensein on the right lighting.

For the background I chose the MeshPhongMaterial, so that I can throw the shadow of the pictures on it and you can see a certain light cone and a little shine.

### Lights
For the lights I decided to use the SpotLights, due to the adjustability of the light cone this was a better choice than using a DirectLight.
To see a bit of the wall still there is an ambientlight

### Problems
At the beginning I had problems that no textures were shown to me (the images), this was because I had not loaded them asynchronously, or had waited until they were loaded.

Also with the shadow casting I sat for a long time and experimented with different light sources.
I also had to leave the light helpers in, because otherwise some lights were not displayed again and again, but that's probably because my processing power is not enough.
When reading I have then gesehe that one should therefore use as few lights as possible and have therefore decided for three spot lights and the Ambient Light

### Improvements
Of course, I also have a lot of room for improvement. For example, I have a lot of duplicated code in the spotlights, which can certainly be simplified. Also the loading of the textures can be improved. But since the time for this project is already over the targeted 12 hours, I leave this version as it is.

### Images
I compressed all the images to save space and let the site load faster.

## Leistungen
- Hinzufügen und Anpassen von Meshes
- Laden von Texturen auf den Meshes
- Erstellen und Anpassen von Licht
- Verwenden der Helperklassen für die Lichtsteuerung
- Schattensteuerung der Meshes
- Erstellen von Custom Kameramovement, die auf Mausbewegung reagiert
- Erstellen eines 3D Texts
- Verwenden von verschiedenen Transformationen (Translate, Scale)
- Einlesen und verwenden von lil-gui zum debuggen
- Aufteilen des Projects auf verschiedene Dateien (Wie im Tutorial)
