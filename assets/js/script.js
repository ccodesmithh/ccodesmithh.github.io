anime({
  targets: '.animated-text',
  translateX: [40, 0],
  opacity: [0, 1],
  easing: 'easeOutQuad',
  duration: 800
});

anime({
  targets: '.animated-text-name',
  translateX: [40, 0],
  opacity: [0, 1],
  easing: 'easeOutQuad',
  duration: 800,
  delay: 300 // muncul setelah .animated-text
});

anime({
  targets: '.animated-text-role',
  translateX: [40, 0],
  opacity: [0, 1],
  easing: 'easeOutQuad',
  duration: 800,
  delay: 600 // muncul terakhir
});