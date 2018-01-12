$(document).ready(function() {

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


  var arrayWithNameElements = ['#element1','#element2','#element3','#element4','#element5','#element6','#element7','#element8','#element9','#element10','#element11','#element12','#element13','#element14','#element15','#element16'];
  var arrayWithValue = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];

  //shuffle array
  arrayWithValue = shuffle(arrayWithValue);

  //назначаем каждому элементу на странице перетасованный элемент массива
  for (var i=0; i<16; i++) {
    jQuery(arrayWithNameElements[i]).html (arrayWithValue[i]);
  }

  



//var str = 'Привет';
//jQuery('#console').html(str);


});
