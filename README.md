# Personal Site

## Summary
This space will eventually be polished up and used professionally but for now it's a frankensteined mess of things I'm trying out when I have the time/want to procrastinate on my schoolwork.

To see where I'm currently at, you can check out the deployed site [here](https://katiechurchwell.github.io/portfolio/).

## Process
Currently the landing page graphic is generated through the [Windy Webcams API](https://api.windy.com/webcams). A fetch is made for the webcam image that is narrowed down by mountain category and the OR, US region. One of the results is randomly chosen.

Originally I was using [p5.js](https://p5js.org) to apply a Floyd-Steinberg dithering algorithm but nowadays I'm using a blue noise filter overlay on top of the background. I upped the saturation a bit to create a vintage National Geographic feel. Though it's not as cool as applying an algorithm to every pixel, it's a bit faster and more practical.

## Aspirational Features
I am forever changing my mind about what this site will look like (perhaps it will always change!) but the following is a list of ideas I may or may not do:
- Using GAN to generate headshots each time the user refreshes the page (inspired by [@monolesan](https://twitter.com/monolesan))
- Changing landing page graphic:
  - Dynamic based on current weather
  - Dark mode toggle that switches visual to space/night sky
  - Parallax artwork

Thanks for stopping by! :v:
