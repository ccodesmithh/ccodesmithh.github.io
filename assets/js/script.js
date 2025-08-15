
document.addEventListener('DOMContentLoaded', () => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  const tl = anime.timeline({
    autoplay: true
  });
  tl.add({
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
    targets: '.hero .container .content',
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=900")

  .add({
    targets: '.photo-hero',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=700")

  .finished.then(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  });

  const target = document.querySelector('.services-title');
  const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime.timeline()
          .add({
            targets: ".services-title",
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1000,
            easing: "easeOutQuad"
          })
          .add({
            targets: ".services-description",
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1000,
            easing: "easeOutQuad"
          }, "-=700")
          .add({
            targets: ".card",
            opacity: [0, 1],
            // translateY: [70, -10],
            duration: 1000,
            direction: "alternate",
            easing: "easeOutQuad",
            delay: function(el, i)  {
              return i * 150;
            },
            endDelay: function(el, i, l) {
              return (l - 1) * 150;
            },


          }, "-=700")
          obs.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.0,
      rootMargin: "0px 0px 200px 0px"
    }); 

    observer.observe(target);
  });