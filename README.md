# Personal Site

## Summary
Hey, welcome to my portfolio! This space will eventually be remade with React but for now I just incorporate whatever styling elements I want.

## A little bit more about that...
Currently the landing page graphic is generated through the [Windy Webcams API](https://api.windy.com/webcams). A fetch is made for the webcam image that is narrowed down by mountain category and the OR, US region. One of the results is randomly chosen and a blue noise filter is overlayed on top to try and counteract some of the jpeggyness.

Aside from BootStrap, I use two other JavaScript tools called [Color Thief](https://lokeshdhakar.com/projects/color-thief/) and [Name That Color](https://chir.ag/projects/name-that-color/#6195ED). Color Thief takes the average color from the webcam image and Name That Color defines the name. I made the decision to use Color Thief because the webcam images are hosted on another domain and using a canvas-related function wasn't possible. Maybe there's another way? Email me, if so!

## Aspirational Features
I am forever changing my mind about what this site will look like (perhaps it will always change!) but the following is a list of ideas I may or may not do:
- Using GAN to generate headshots each time the user refreshes the page (inspired by [@monolesan](https://twitter.com/monolesan))
- Changing landing page graphic:
  - Dynamic artwork based on current weather
  - Dark mode toggle that switches visual to space/night sky
  - Theme that picks from colors generated from API image

Thanks for stopping by! :v: