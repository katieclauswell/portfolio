export default function randomWebcamImage() {
  const webcams = [
    {
      title: "Sisters › West",
      image:
        "https://images-webcams.windy.com/74/1582164074/current/preview/1582164074.jpg",
    },

    {
      title:
        "Klamath › North-East: Llao Rock - Wizard Island Boat Tour Dock - Mount Thielsen",
      image:
        "https://images-webcams.windy.com/65/1605569565/current/preview/1605569565.jpg",
    },

    {
      title: "Culver › North-West",
      image:
        "https://images-webcams.windy.com/07/1637286107/current/preview/1637286107.jpg",
    },
  ];

  var max = webcams.length;
  var i = Math.floor(Math.random() * max);
  return webcams[i];
}
