function rotateAnnotationCropper(offsetSelector, xCoordinate, yCoordinate, cropper){
    //alert(offsetSelector.left);

    var x = xCoordinate - offsetSelector.offset().left - offsetSelector.width()/2;
    var y = -1*(yCoordinate - offsetSelector.offset().top - offsetSelector.height()/2);
    var theta = Math.atan2(y,x)*(180/Math.PI);        


    var cssDegs = convertThetaToCssDegs(theta);
    var rotate = 'rotate(' +cssDegs + 'deg)';
    cropper.css({'-moz-transform': rotate, 'transform' : rotate, '-webkit-transform': rotate, '-ms-transform': rotate});
    $('body').on('mouseup', function(event){ $('body').unbind('mousemove')});

}

function convertThetaToCssDegs(theta){
var cssDegs = 90 - theta;
return cssDegs;
}

$(document).ready(function(){               

$('#marker').on('mousedown', function(){
    $('body').on('mousemove', function(event){
        rotateAnnotationCropper($('#innerCircle').parent(), event.pageX,event.pageY, $('#marker'));    
    });
                        
});                    
}); 


// const getDateFormat = (date) => {
//   return `${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
//     .getDate()
//     .toString()
//     .padStart(2, "0")}-${date.getFullYear()}`;
// };

// const daysInYear = (year) => {
//   return (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;
// };

// document.querySelectorAll(".useful-datepicker").forEach(() => {
//   var input ;

//   const today = new Date();

//   input.value = getDateFormat(today);

// })

