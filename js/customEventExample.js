document.addEventListener('DOMContentLoaded', function () {

  const colorfulButton = document.getElementById('btn');

  colorfulButton.addEventListener('colorWhileScroll', function (e) {
    colorfulButton.style.backgroundColor = e.detail.scrollColor;
  });

  window.addEventListener('scroll', function () {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);

    changeNumber(first, second, third)
  });

  changeNumber = (first, second, third) => {

    const event = new CustomEvent('colorWhileScroll', {

      detail: {
        scrollColor: `rgb(${first}, ${second}, ${third})`
      }

    });

    colorfulButton.dispatchEvent(event);
  }
});
