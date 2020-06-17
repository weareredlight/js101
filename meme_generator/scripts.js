window.addEventListener('load', function() {
  const fileInput = document.querySelector('input');
  const preview = document.querySelector('.preview');
  const topInput = document.querySelector('#topinput');
  const bottomInput = document.querySelector('#bottominput');
  const imageEl = preview.querySelector('img');
  const topEl = preview.querySelector('p#top');
  const bottomEl = preview.querySelector('p#bottom');

  function updateImage(event) {
    const curFiles = event.target.files;
    if (curFiles.length === 0) {

    } else {
      const file = curFiles[0];
      imageEl.src = window.URL.createObjectURL(file);
    }
  }

  function updateTopText(event) {
    topEl.textContent = event.target.value;
  }

  function updateBottomText(event) {
    bottomEl.textContent = event.target.value;
  }

  fileInput.addEventListener('change', updateImage);
  topInput.addEventListener('input', updateTopText);
  bottomInput.addEventListener('input', updateBottomText);
});

