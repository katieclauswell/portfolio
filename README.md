# Portfolio
  [![project-languages-used](https://img.shields.io/github/languages/count/katiechurchwell/portfolio?color=important)](https://github.com/katiechurchwell/portfolio)
  [![project-top-language](https://img.shields.io/github/languages/top/katiechurchwell/portfolio?color=blueviolet)](https://github.com/katiechurchwell/portfolio)
## Summary
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)

Welcome! This is a page to showcase some of my web development projects.

## Running Locally
In the terminal, run the following:
- Install dependencies: `npm install`
- Build: `npm run build`
- Run locally: `npm run start`

## Design
Originally there were a couple API calls but those have since been hard-coded; I need to figure out a free way to host a backend. 

The window is composed of the following stack:
- Webcam background and blue noise filter.
  - The webcam images come from the [Windy Webcams API](https://api.windy.com/webcams) (narrowed down by Oregon, Washington and mountain regions). One of the results is randomly chosen and a blue noise filter is overlayed on top to try and counteract some of the jpeggyness.
- Laptop background (currently the photograph Bliss by Charles O'Rear).
- Window sill with transparency for window pane.
  - Beautifully illustrated by <a href="https://twitter.com/PixelArtJourney">Scilex</a>!
- Invisible tool tip trigger for laptop.

The tech stack page utilized the [GitHub Graphql API](https://docs.github.com/en/graphql) to filter my GitHub repositories by topic. That information has since been copied and pasted into ``data/info.js``

## Aspirational Features
* Before refactoring in React, I had used two other JavaScript tools called [Color Thief](https://lokeshdhakar.com/projects/color-thief/) and [Name That Color](https://chir.ag/projects/name-that-color/#6195ED) to take the average color from the webcam image, define the name, and style various elements around the site. Maybe I'll add that back in at some point but I'm happy with how it looks currently.

* For the laptop's tooltip I'd like to change the UI to look like a 90s desktop in miniature. I think it would be fun to add an easter egg in there such as additional theming options that are maybe less professional and more for fun. I was thinking about a "Y2K" theme that adds sparkles to the cursor and gives everything a geocities vibe.

Thanks for stopping by! :v:

## Questions
  If you have any questions about this project, please open an issue or use the contact information below:
  * [katiechurchwell](https://www.github.com/katiechurchwell)
  * [churchwellcatherine@gmail.com](mailto:churchwellcatherine@gmail.com)