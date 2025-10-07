    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const dotsContainer = document.querySelector('.dots');

    let currentIndex = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function updateSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      track.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;

      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
      updateSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
      updateSlide(currentIndex - 1);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        updateSlide(i);
      });
    });


    setInterval(() => {
      updateSlide(currentIndex + 1);
    }, 4000); 