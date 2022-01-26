# Personal Site

## Summary
Hello! Welcome to my personal site. This space will eventually be polished up and used professionally but for now it's a frankensteined mess of things I'm trying out when I have the time.

To see where I'm currently at, you can check out the deployed site [here](https://katiechurchwell.github.io/portfolio/).

## How it Works/Credits
Currently the landing page graphic is generated through the [Windy Webcams API](https://api.windy.com/webcams). A fetch is made for the webcam image that is narrowed down by mountain category and the OR, US region. One of the results is randomly chosen.

That image is then populated into a [p5.js](https://p5js.org) canvas where the Floyd-Steinberg dithering algorithm is applied. The dithering code largely comes from [The Coding Train](https://www.youtube.com/watch?v=0L2n8Tg2FwI). 

[Anderoonies](https://github.com/anderoonies) from the [p5.js discord channel](https://thecodingtrain.com/discord) helped me with getting the webcam image url implemented into the dithering algorithm correctly; big thank you to them! 

## Aspirational Features
I am forever changing my mind about what this site will look like (perhaps it will always change!) but the following is a list of ideas I may or may not do:
- Using GAN to generate headshots each time the user refreshes the page (inspired by [@monolesan](https://twitter.com/monolesan))
- Changing landing page graphic:
  - Dynamic based on current weather
  - Dark mode toggle that switches visual to space/night sky
  - Parallax artwork
  - p5.js artwork with movement

Thanks for stopping by! :v:
