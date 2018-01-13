$(document).ready(function() {

  var arrayWithNameElements = ['#element1','#element2','#element3','#element4','#element5','#element6','#element7','#element8','#element9','#element10','#element11','#element12','#element13','#element14','#element15','#element16'];
  var arrayWithValue = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
  var i, idElem1, idElem2, valueElem1, valueElem2, colorElem1, colorElem2, count = 0;

  //this function shuffles the elements in the array
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
  }// end function shuffle ();

  function getColor (x) {
    var colorItem;
    if (x == '1') {
      colorItem = 'hsl(25, 85%, 65%)';
      return colorItem;
    } else if (x == '2') {
        colorItem = 'hsl(55, 85%, 65%)';
        return colorItem;
    } else if (x == '3') {
        colorItem = 'hsl(90, 85%, 65%)';
        return colorItem;
    } else if (x == '4') {
        colorItem = 'hsl(160, 85%, 65%)';
        return colorItem;
    } else if (x == '5') {
        colorItem = 'hsl(220, 85%, 65%)';
        return colorItem;
    } else if (x == '6') {
        colorItem = 'hsl(265, 85%, 65%)';
        return colorItem;
    } else if (x == '7') {
        colorItem = 'hsl(310, 85%, 65%)';
        return colorItem;
    } else {
        colorItem = 'hsl(360, 85%, 65%)';
        return colorItem;
    }
  }

function resetValue() {
  idElem1 = 0;
  idElem2 = 0;
  valueElem1 = 0;
  valueElem2 = 0;
  count = 0;
}

function resetDefoultColor() {
  $('#' + idElem1).css('background-color','rgb(32, 64, 86)');
  $('#' + idElem1).css('color','rgb(32, 64, 86)');
  $('#' + idElem2).css('background-color','rgb(32, 64, 86)');
  $('#' + idElem2).css('color','rgb(32, 64, 86)');
}

function changeToGreyColor() {
  $('#' + idElem1).css('background-color','#696969');
  $('#' + idElem1).css('color','#D3D3D3');
  $('#' + idElem2).css('background-color','#696969');
  $('#' + idElem2).css('color','#D3D3D3');
}

  //shuffle array
  arrayWithValue = shuffle(arrayWithValue);

  //назначаем каждому элементу на странице перетасованный элемент массива
  for ( i=0; i<16; i++) {
    $(arrayWithNameElements[i]).html (arrayWithValue[i]);
  }

  $('.target-item').click(function() {
    if (count == 0) {
      idElem1 = $(this).attr('id');
      valueElem1 = $(this).html();
      colorItem1 = getColor($(this).html());
      $(this).css('background-color',colorItem1);
      $(this).css('color','white');
      count++;
    } else if (count == 1) {
      idElem2 = $(this).attr('id');
      valueElem2 = $(this).html();
      colorItem2 = getColor($(this).html());
      $(this).css('background-color', colorItem2);
      $(this).css('color','white');

        if (valueElem1 == valueElem2) {
          $('#console').html(' равны ');//удалить
          window.setTimeout(function() {
            changeToGreyColor();
            resetValue();
          }, 350);

        } else {
          $('#console').html(' НЕ равны ');//удалить
          window.setTimeout(function() {
            resetDefoultColor(); //сбрасывает на цвета по умолчанию
            resetValue(); //обнуляет буферные значения
          }, 350);

        }
      }
  }).delay(500); //end $('.target-item').click(function()

  $('#resetAll').click(function() {
    resetValue();
    $('.target-item').css('background-color','rgb(32, 64, 86)');
    $('.target-item').css('color','rgb(32, 64, 86)');
    arrayWithValue = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
    arrayWithValue = shuffle(arrayWithValue);
    for ( i=0; i<16; i++) {
      $(arrayWithNameElements[i]).html(arrayWithValue[i]);
    }    
  });


});// end $(document).ready(function()
