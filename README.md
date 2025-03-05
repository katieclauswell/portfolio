# Portfolio

Welcome! This is a React page to showcase some of my web development projects.

## Running Locally

In the terminal, run the following:

- Install dependencies: `npm install`
- Build: `npm run build`
- Run locally: `npm run start`

## Design

The homepage window is composed of the following stack:

- Webcam background and blue noise filter.
  - The webcam images come from the [Windy Webcams API](https://api.windy.com/webcams) (narrowed down by Oregon, Washington and mountain regions). One of the results is randomly chosen and a blue noise filter is overlayed on top to try and counteract some of the jpeggyness.
- Laptop background (currently the photograph Bliss by Charles O'Rear).
- Window sill with transparency for window pane.
  - Beautifully illustrated by <a href="https://twitter.com/PixelArtJourney">Scilex</a>!
- Invisible tool tip trigger for laptop.

## Aspirational Features

- Before refactoring in React, I had used two other JavaScript tools called [Color Thief](https://lokeshdhakar.com/projects/color-thief/) and [Name That Color](https://chir.ag/projects/name-that-color/#6195ED) to take the average color from the webcam image, define the name, and style various elements around the site. Maybe I'll add that back in at some point but I'm happy with how it looks currently.

- For the laptop's tooltip I'd like to change the UI to look like a 90s desktop in miniature. I think it would be fun to add an easter egg in there such as additional theming options that are maybe less professional and more for fun. I was thinking about a "Y2K" theme that adds sparkles to the cursor and gives everything a geocities vibe.

Thanks for stopping by! :v:
