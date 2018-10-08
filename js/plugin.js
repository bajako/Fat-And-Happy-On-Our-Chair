document.addEventListener('DOMContentLoaded', function () {

  const accept = document.querySelector('.accept');
  const cancel = document.querySelector('.cancel');
  const modal = document.querySelector('.modal');
  const showModal = document.querySelector('.modal-container');
  const now = new Date().getTime().toString();
  let timeDifference = null;

  let addPlugin = () => {
    showModal.style.display = "flex";
  };


  let compareTimestamps = (now) => {
    let myRecordInLocalStorage = JSON.parse(localStorage.getItem('test'));
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
    return localStorage.removeItem('test');
  };

  let removeModal = () => {
    accept.dataset.id = 'true';
    cancel.dataset.id = 'true';
    modal.classList.remove('show-modal');
    window.removeEventListener('scroll', noScroll);
  };

  addPlugin();

  if (localStorage.getItem('test') !== null) {

    compareTimestamps(now);

    if (timeDifference < 300) {

      removeModal();

    } else if (timeDifference > 300) {

      removeRecordFromLocalStorage();
      handleModal()

    }
  } else {

    handleModal()

  }

  accept.onclick = function () {
    if (accept.dataset.id === 'true') {

      let myRecordInLocalStorage = {timestamp: new Date().getTime()};
      localStorage.setItem('test', JSON.stringify(myRecordInLocalStorage));

    }
  };

  cancel.onclick = function () {
    if (cancel.dataset.id === 'true') {

      let myRecordInLocalStorage = {timestamp: new Date().getTime()};
      localStorage.setItem('test', JSON.stringify(myRecordInLocalStorage));

    }
  };
});
