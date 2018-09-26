document.addEventListener('DOMContentLoaded', function () {

  const accept = document.querySelector('.accept');
  const cancel = document.querySelector('.cancel');
  const modal = document.querySelector('.modal');
  const now = new Date().getTime().toString();
  let timeDifference = null;

  let compareTimestamps = (now) => {
    let myRecordInLocalStorage = JSON.parse(localStorage.getItem('optAd360'));
    let dateString = myRecordInLocalStorage.timestamp;

    timeDifference = (parseInt(now) - parseInt(dateString)) / 1000;
    return timeDifference;
  };

  let handleModal = () => {
    window.addEventListener('scroll', noScroll);
    accept.addEventListener('click', removeModal);
    cancel.addEventListener('click', removeModal);
  };

  let noScroll = () => {
    window.scrollTo(0, 0);
  };

  let removeRecordFromLocalStorage = () => {
    return localStorage.removeItem('optAd360');
  };

  let removeModal = () => {
    accept.dataset.id = 'true';
    cancel.dataset.id = 'true';
    modal.classList.remove('show-modal');
    window.removeEventListener('scroll', noScroll);
  };


  if (localStorage.getItem('optAd360') !== null) {

    compareTimestamps(now);

    if (timeDifference < 86400) {

      removeModal();

    } else if (timeDifference > 86400) {

      removeRecordFromLocalStorage();
      handleModal()

    }
  } else {

    handleModal()

  }

  accept.onclick = function () {
    if (accept.dataset.id === 'true') {

      let myRecordInLocalStorage = {timestamp: new Date().getTime()};
      localStorage.setItem('optAd360', JSON.stringify(myRecordInLocalStorage));

    }
  };

  cancel.onclick = function () {
    if (cancel.dataset.id === 'true') {

      let myRecordInLocalStorage = {timestamp: new Date().getTime()};
      localStorage.setItem('optAd360', JSON.stringify(myRecordInLocalStorage));

    }
  };
});
