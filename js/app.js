document.addEventListener('DOMContentLoaded', function () {

  /* SECTION TWO DISAPPEAR */
  var boxOne = document.querySelector('.box-one');
  var boxTwo = document.querySelector('.box-two');
  var imageDescription1 = boxOne.querySelector('.image-description');
  var imageDescription2 = boxTwo.querySelector('.image-description');

  boxOne.addEventListener('mouseenter', function () {
    imageDescription1.classList.add('invisible');
  });

  boxOne.addEventListener('mouseleave', function () {
    imageDescription1.classList.remove('invisible');
  });

  boxTwo.addEventListener('mouseenter', function () {
    imageDescription2.classList.add('invisible');
  });

  boxTwo.addEventListener('mouseleave', function () {
    imageDescription2.classList.remove('invisible');
  });

  var next2 = document.querySelector('.section-three .arrow-right-price'),
    prev2 = document.querySelector('.section-three .arrow-left-price'),
    el2 = document.querySelectorAll('.section-three div.slider'),
    z = 0;

  el2[z].classList.add('visible');

  var nextPrice = function () {
    el2[z].classList.remove('visible');
    z++;

    if (z === el2.length) {
      z = 0;
    }
    el2[z].classList.add('visible');
  };

  var prevPrice = function () {

    el2[z].classList.remove('visible');
    z--;

    if (z < 0) {
      z = el2.length - 1;
    }

    el2[z].classList.add('visible');
  };

  next2.addEventListener('click', function () {
    nextPrice();
  });

  prev2.addEventListener('click', function () {
    prevPrice();
  });

  /* SECTION ONE SLIDER */
  var next = document.querySelector('.arrow-right'),
    prev = document.querySelector('.arrow-left'),
    el = document.querySelectorAll('.slider li'),
    i = 0;

  el[i].classList.add('visible');

  var nextChair = function () {
    el[i].classList.remove('visible');
    i++;

    if (i === el.length) {
      i = 0;
    }

    el[i].classList.add('visible');
  };

  var prevChair = function () {

    el[i].classList.remove('visible');
    i--;

    if (i < 0) {
      i = el.length - 1;
    }

    el[i].classList.add('visible');
  };

  next.addEventListener('click', function () {
    nextChair();
  });

  prev.addEventListener('click', function () {
    prevChair();
  });

  /* SECTION FOUR COMPOSE ORDER */
  var composeOne = document.querySelector('#dropdownMenu1'),
    composeOneList = document.querySelector('.dropdown-menu-one'),
    composeOneFirst = composeOneList.getElementsByTagName('li')[0],
    composeOneSecond = composeOneList.getElementsByTagName('li')[1],
    composeOneThird = composeOneList.getElementsByTagName('li')[2];

  var composeTwo = document.querySelector('#dropdownMenu2'),
    composeTwoList = document.querySelector('.dropdown-menu-two'),
    composeTwoFirst = composeTwoList.getElementsByTagName('li')[0],
    composeTwoSecond = composeTwoList.getElementsByTagName('li')[1],
    composeTwoThird = composeTwoList.getElementsByTagName('li')[2];

  var composeThree = document.querySelector('#dropdownMenu3'),
    composeThreeList = document.querySelector('.dropdown-menu-three'),
    composeThreeFirst = composeThreeList.getElementsByTagName('li')[0],
    composeThreeSecond = composeThreeList.getElementsByTagName('li')[1];

  var composeTransport = document.querySelector('.transport');

  var chair = document.getElementById('chair'),
    chair2 = document.getElementById('chair2'),
    color = document.getElementById('color'),
    color2 = document.getElementById('color2'),
    fabric = document.getElementById('fabric'),
    fabric2 = document.getElementById('fabric2'),
    transport = document.getElementById('transport'),
    transport2 = document.getElementById('transport2'),
    orderResult = document.getElementById('orderResult'),
    orderResultTemp = document.getElementById('orderResultTemp');

  function orderCalculate() {
    orderResult.dataset.value = parseInt(chair2.dataset.value) + parseInt(color2.dataset.value) + parseInt(fabric2.dataset.value) + parseInt(transport2.dataset.value);
  }

  function firstCheck() {
    if (parseInt(orderResult.dataset.value) < parseInt(orderResultTemp.dataset.value)) {
      orderResult.dataset.value = parseInt(orderResultTemp.dataset.value);
    }
    orderResult.innerText = orderResult.dataset.value + ' zł';
  }

  orderResult.classList.toggle('invisible');


  /* CHAIR MENU */
  composeOne.addEventListener('click', function () {

    chair.innerText = 'Twój fotel';

    composeOneList.classList.toggle('invisible');
    chair2.classList.add('invisible');

    orderResultTemp.dataset.value = orderResult.dataset.value;
    orderResult.dataset.value = parseInt(orderResult.dataset.value) - parseInt(chair2.dataset.value);

    firstCheck();
  });


  /* FIRST CHAIR */
  composeOneFirst.addEventListener('click', function () {

    chair.innerText = composeOneFirst.innerText;
    chair2.innerText = composeOneFirst.dataset.value;
    chair2.dataset.value = composeOneFirst.dataset.value;

    composeOneList.classList.toggle('invisible');
    orderResult.classList.remove('invisible');
    chair2.classList.toggle('invisible');

    orderCalculate();
    orderResult.innerText = orderResult.dataset.value + ' zł';
  });

  /* SECOND CHAIR */
  composeOneSecond.addEventListener('click', function () {

    chair.innerText = composeOneSecond.innerText;
    chair2.innerText = composeOneSecond.dataset.value;
    chair2.dataset.value = composeOneSecond.dataset.value;

    composeOneList.classList.toggle('invisible');
    orderResult.classList.remove('invisible');
    chair2.classList.toggle('invisible');

    orderCalculate();
    orderResult.innerText = orderResult.dataset.value + ' zł';
  });

  /* THIRD CHAIR */
  composeOneThird.addEventListener('click', function () {

    chair.innerText = composeOneThird.innerText;
    chair2.innerText = composeOneThird.dataset.value;
    chair2.dataset.value = composeOneThird.dataset.value;

    composeOneList.classList.toggle('invisible');
    orderResult.classList.remove('invisible');
    chair2.classList.toggle('invisible');

    orderCalculate();
    orderResult.innerText = orderResult.dataset.value + ' zł';
  });


  /* COLOR MENU */
  composeTwo.addEventListener('click', function () {

    color.innerText = '';

    composeTwoList.classList.toggle('invisible');
    color2.classList.add('invisible');

    orderResultTemp.dataset.value = orderResult.dataset.value;
    orderResult.dataset.value = parseInt(orderResult.dataset.value) - parseInt(color2.dataset.value);

    firstCheck();
  });

  /* FIRST COLOR */
  composeTwoFirst.addEventListener('click', function () {

    color.innerText = composeTwoFirst.innerText;
    color2.innerText = composeTwoFirst.dataset.value;
    color2.dataset.value = composeTwoFirst.dataset.value;

    composeTwoList.classList.toggle('invisible');
    orderResult.classList.remove('invisible');
    color2.classList.toggle('invisible');

    orderCalculate();
    orderResult.innerText = orderResult.dataset.value + ' zł';
  });

  /* SECOND COLOR */
  composeTwoSecond.addEventListener('click', function () {

    color.innerText = composeTwoSecond.innerText;
    color2.innerText = composeTwoSecond.dataset.value;
    color2.dataset.value = composeTwoSecond.dataset.value;

    composeTwoList.classList.toggle('invisible');
    orderResult.classList.remove('invisible');
    color2.classList.toggle('invisible');

    orderCalculate();
    orderResult.innerText = orderResult.dataset.value + ' zł';
  });

  /* THIRD COLOR */
  composeTwoThird.addEventListener('click', function () {

    color.innerText = composeTwoThird.innerText;
    color2.innerText = composeTwoThird.dataset.value;
    color2.dataset.value = composeTwoThird.dataset.value;

    composeTwoList.classList.toggle('invisible');
    orderResult.classList.remove('invisible');
    color2.classList.toggle('invisible');

    orderCalculate();
    orderResult.innerText = orderResult.dataset.value + ' zł';
  });


  /* FABRIC MENU */
  composeThree.addEventListener('click', function () {

    fabric.innerText = '';

    composeThreeList.classList.toggle('invisible');
    fabric2.classList.add('invisible');

    orderResultTemp.dataset.value = orderResult.dataset.value;
    orderResult.dataset.value = parseInt(orderResult.dataset.value) - parseInt(fabric2.dataset.value);

    firstCheck();
  });

  /* FIRST FABRIC */
  composeThreeFirst.addEventListener('click', function () {

    fabric.innerText = composeThreeFirst.innerText;
    fabric2.innerText = composeThreeFirst.dataset.value;
    fabric2.dataset.value = composeThreeFirst.dataset.value;

    composeThreeList.classList.toggle('invisible');
    orderResult.classList.remove('invisible');
    fabric2.classList.toggle('invisible');

    orderCalculate();
    orderResult.innerText = orderResult.dataset.value + ' zł';
  });

  /* SECOND FABRIC */
  composeThreeSecond.addEventListener('click', function () {

    fabric.innerText = composeThreeSecond.innerText;
    fabric2.innerText = composeThreeSecond.dataset.value;
    fabric2.dataset.value = composeThreeSecond.dataset.value;

    composeThreeList.classList.toggle('invisible');
    orderResult.classList.remove('invisible');
    fabric2.classList.toggle('invisible');

    orderCalculate();
    orderResult.innerText = orderResult.dataset.value + ' zł';
  });

  /* TRANSPORT OPTION */
  var j = 1;
  composeTransport.addEventListener('click', function () {

    j = j + 1;

    if (j % 2 === 0) {
      transport.innerText = 'Transport';
      transport2.innerText = composeTransport.dataset.value;
      transport2.dataset.value = composeTransport.dataset.value;
      orderCalculate();
      orderResult.innerText = orderResult.dataset.value + ' zł';
      firstCheck();
    }
    else if (j % 2 !== 0) {
      transport.innerText = '';
      transport2.dataset.value = 0;
      orderCalculate();
      orderResult.innerText = orderResult.dataset.value + ' zł';
      orderResultTemp.dataset.value = orderResult.dataset.value;
    }
    transport2.classList.toggle('invisible');
  });
});
