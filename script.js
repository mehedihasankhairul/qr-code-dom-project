// get form and input
const form = document.querySelector('form');
const input = document.querySelector('input');
// create image element
const qrImg = document.getElementById('qrImage');
// select download button
const downloadBtn = document.getElementById('download');

// add event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const qrValue = input.value;
  if (!qrValue) return;
  console.log(qrValue);
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;


  // clear input
  input.value = '';
  downloadBtn.classList.remove('invisible');
  downloadBtn.href = qrImg.src + `&download=${qrValue}.png`;

});

// Save qrImg

