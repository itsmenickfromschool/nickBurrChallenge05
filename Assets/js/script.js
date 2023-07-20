
$(function () {
  console.log(dayjs())

  var saveButton = $('.saveBtn');
  saveButton.on('click', function () {
    var data= $(this).siblings("textarea").val()
    var id = $(this).parent().attr("id")
    localStorage.setItem(id,data)
  });

  $(document).ready(function() {
   var timeBlocks = $('div.row');
   console.log(timeBlocks);
   console.log(typeof timeBlocks);
   for (i=0; i< timeBlocks.length; i++){
    var id = parseInt(timeBlocks[i].id);
    var hour =parseInt(dayjs().format('H'));
    var hourText = localStorage.getItem(id);
    var textArea = $('textarea');  // take out remove classes and take classes out of html
  
    if (id === hour){
      $(`#${id}`).addClass('present');

    } else if (id > hour){
        $(`#${id}`).addClass('future');
      
    } else if (id < hour){
     
      $(`#${id}`).addClass('past');
    }

   
   
    if (hourText !== null) {
      $(`#${id}`).children(textArea).val(hourText);
    } 
  }
  
  
});
  



  
  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?




  
  //
  // TODO: Add code to display the current date in the header of the page. DONE! 
  var today = dayjs();
  var currentDate = today.format('MMM DD, YYYY');
  console.log(currentDate);
  $('#currentDay').text(currentDate);
});

