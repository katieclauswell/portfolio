export default function randomWebcamImage() {
  const webcams = [
    {
      title: "West Sisters, Oregon",
      image:
        "https://images-webcams.windy.com/74/1582164074/current/preview/1582164074.jpg",
    },
    {
      title: "North-East Klamath, Oregon",
      image:
        "https://images-webcams.windy.com/65/1605569565/current/preview/1605569565.jpg",
    },
    {
      title: "North-West Culver, Oregon",
      image:
        "https://images-webcams.windy.com/07/1637286107/current/preview/1637286107.jpg",
    },
    {
      title: "Fish Lake at Leavenworth, Washington",
      image:
        "https://images-webcams.windy.com/48/1268964748/current/preview/1268964748.jpg",
    },
    {
      title: "Paradise at Mt Rainier, Washington",
      image:
        "https://images-webcams.windy.com/91/1319663191/current/preview/1319663191.jpg",
    },
    {
      title: "Skamania at Mount Adams, Washington",
      image:
        "https://images-webcams.windy.com/30/1359923130/current/preview/1359923130.jpg",
    },
    {
      title: "Tatoosh Range at Paradise, Washington",
      image:
        "https://images-webcams.windy.com/07/1384985407/current/preview/1384985407.jpg",
    },
    {
      title: "Deer Park at East Mount Spokane, Washington",
      image:
        "https://images-webcams.windy.com/51/1486503051/current/preview/1486503051.jpg",
    },
    {
      title: "Clallam at South-West Mount Olympus, Washington",
      image:
        "https://images-webcams.windy.com/39/1523123339/current/preview/1523123339.jpg",
    },
    {
      title: "West Puyallup River Junction, Washington",
      image:
        "https://images-webcams.windy.com/95/1578985195/current/preview/1578985195.jpg",
    },
    {
      title: "Puyallup River Junction, Washington",
      image:
        "https://images-webcams.windy.com/97/1579121997/current/preview/1579121997.jpg",
    },
    {
      title: "West Bellingham, Washington",
      image:
        "https://images-webcams.windy.com/35/1579291835/current/preview/1579291835.jpg",
    },
  ];

  var max = webcams.length;
  var i = Math.floor(Math.random() * max);
  return webcams[i];
}
