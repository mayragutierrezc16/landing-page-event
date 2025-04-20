const form = document.getElementById('rsvp-form');
const thanks = document.querySelector('.thanks-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Acá podrías enviar a un backend real
  form.style.display = 'none';
  thanks.style.display = 'block';
});
