anime.timeline()
.add({
    targets: '.circle',
    keyframes: [
        { opacity: 0, duration: 150 },
        { opacity: 1, duration: 150 },
        { opacity: 0, duration: 150 },
        { opacity: 1, duration: 150 },
        { opacity: 0, duration: 150 },
        { opacity: 1, duration: 150 }
    ],
    easing: 'easeInOutSine'
})
.add({
    targets: '.circle',
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuad'
})
.add({
  targets: '.nav-links',
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeInOutQuad'
})

.add({
  targets: '.animated-text',
  translateX: [40, 0],
  opacity: [0, 1],
  easing: 'easeOutQuad',
}, "-=700")

.add({
  targets: '.animated-text-name',
  translateX: [40, 0],
  opacity: [0, 1],
  easing: 'easeOutQuad',
}, "-=700")

.add({
  targets: '.animated-text-role',
  translateX: [40, 0],
  opacity: [0, 1],
  easing: 'easeOutQuad',
}, "-=700")

.add({
  targets: '.content-social',
  opacity: [0, 1],
  easing: 'easeOutQuad',
}, "-=800")

.add({
  targets: '.buttons',
  opacity: [0, 1],
  easing: 'easeOutQuad',
}, "-=800")

.add({
  targets: '.content',
  opacity: [0, 1],
  easing: 'easeOutQuad',
}, "-=900")

.add({
  targets: '.photo',
  translateY: [-400, -470],
  opacity: [0, 1],
  easing: 'easeOutQuad',
}, "-=700");