console.log("Home frontend javascript file");
// Rotate the whole sphere
    anime({
      targets: '.sphere',
      rotate: 360,
      easing: 'linear',
      duration: 5000,
      loop: true
    });

    // Animate the circle strokes
    anime({
      targets: '.sphere circle',
      strokeDasharray: [0, 1000],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: (el, i) => i * 400,
      direction: 'alternate',
      loop: true
    });

    // Pulse effect (scale in/out)
    anime({
      targets: '.sphere',
      scale: [1, 1.08],
      easing: 'easeInOutQuad',
      duration: 1800,
      direction: 'alternate',
      loop: true
    });