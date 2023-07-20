// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  console.log(dayjs())

  var saveButton = $('.saveBtn');
// localStorage.getItem

//
   // this.localStorage.setItem("$(:input)", this.localStorage );
   //  var saveButton = $('.saveBtn')

  
   
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
    //  timeBlocks[i].addClass('past');
    var id = parseInt(timeBlocks[i].id);
    // id = parseInt(id);
    var hour =parseInt(dayjs().format('H'));
    // hour = parseInt(hour);
   
    console.log("hour:" + hour);

    console.log("id:", id);
    console.log(typeof hour);
    console.log(typeof id);
    // take out remove classes and take classes out of html
    console.log("hour = id:" + hour === id);
    console.log("hour = id:" + hour )
    if (id === hour){
      // $(`#${id}`).removeClass('past');
      // $(`#${id}`).removeClass('future');
      $(`#${id}`).addClass('present');
      
    } else if (id > hour){
        // $(`#${id}`).removeClass('past');
        // $(`#${id}`).removeClass('present');
        $(`#${id}`).addClass('future');
      
    } else if (id < hour){
      // $(`#${id}`).removeClass('present');
      // $(`#${id}`).removeClass('future');
      $(`#${id}`).addClass('past');
      // id.removeClass('past');
    }
    var hourText = localStorage.getItem(id);
    var textArea = $('textarea');  
    console.log(hourText);
    if (hourText !== null) {
      $(`#${id}`).children(textArea).val(hourText);
    } 
    //add text to the text area of the var id
    //selector.children.textarea.val(hourtext) if hour text != null then set it to it.

    // console.log(timeBlocks[i].children[1]);
    // var id = 
    // make an id variable = timeblocks[i]Traverse to the ID
    //localStorage.getItem(id)
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

