function averageColor(webcamUrl) {
    const colorThief = new ColorThief();
    const img = new Image();
    
    img.addEventListener('load', function() {
      const rgb = colorThief.getColor(img);
      const rgbFormatted = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
      document.documentElement.style.setProperty('--third', `rgb(${rgbFormatted})`)
    });
    
    img.crossOrigin = 'Anonymous';
    img.src = webcamUrl;
};