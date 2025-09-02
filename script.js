// Load Lottie dari file lokal
lottie.loadAnimation({
  container: document.getElementById('cartoon'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/cartoon-man-wave.json'  // sesuai folder
});

// Elements
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const seeBtn = document.getElementById('seeBtn');
const backBtn = document.getElementById('backBtn');

// Pindah ke Slide 2 (zoom-in)
seeBtn.addEventListener('click', () => {
  slide1.classList.remove('active');
  slide2.classList.add('active', 'zoom-in');
  setTimeout(() => slide2.classList.remove('zoom-in'), 500);
});

// Kembali ke Slide 1 (zoom-out)
backBtn.addEventListener('click', () => {
  slide2.classList.add('zoom-out');
  setTimeout(() => {
    slide2.classList.remove('active', 'zoom-out');
    slide1.classList.add('active');
  }, 500);
});
