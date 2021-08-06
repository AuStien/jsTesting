"use strict"

$(document).ready(function(){

  const $animals = $("#animals-listing");

    $.ajax({
      type: "GET",
      url: "http://localhost:5000/Animals",
      success: function(animals){
        // console.log("success", data);
        //Two and two, even if its only 1 left
        //Drop down for each different animal type
        //Fixs uniqe divs - now it adds into the older ones too
        $.each(animals, function(i, animal){
          if (i === 0){
            console.log(i + "første");
            // Make new row
            $animals.append(`<div class="row temp"> <span class="col-sm-6 tt"> <img src="${animal.image}" /></span>`);

          } else if (i === 1){
            console.log(i + "andre");
            // Last col
            $(".temp").append(`<span class="col-sm-6 tt"> <img src="${animal.image}" /></span></div>`);
          }
          else if (i % 2 === 0){
            console.log(i + "tredje");
            //Make new row
            $animals.append(`<div class="row temp"> <span class="col-sm-6 tt"> <img src="${animal.image}" /></span>`);
            
          } else if (i % 2 === 1){
            console.log(i + "fjerde");
            //Last col
            $(".temp").each(function (i, obj){
              if (obj.children.length <= 1){
                $(this).append(`<span class="col-sm-6 tt"> <img src="${animal.image}" /></span></div>`);
                return false;
              }

});


          }
        })
      }
    })
});

