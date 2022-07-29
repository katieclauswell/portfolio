import React, { useEffect } from "react";

export default function Caman(image) {
  console.log("Caman(image)", image)
  const kitten = React.useRef(null);

  useEffect(() => {
    window.Caman(`#${kitten.current.id}`, function () {
      this.exposure(-10);
      this.newLayer(function () {
        this.setBlendingMode("multiply");
        this.opacity(80);
        this.fillColor("#6899ba");
        this.copyParent();
        this.filter.brightness(10);
        this.filter.contrast(20);
      });
      this.clip(10);
      this.render();
    });
  }, [kitten.current]);

  return (
    <div className="App">
      <img
        src={image}
        alt=""
      />
      <img
        id="kitten"
        ref={kitten}
        src={image}
        alt=""
      />
    </div>
  );
}
