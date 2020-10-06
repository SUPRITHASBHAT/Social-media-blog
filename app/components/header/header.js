// spa.$(component,{});
   
spa.$extend('header',{
// time = setInterval("{$}timer()", 5 ),
// timer: function() {
//     var photoNumber = Math.random(7);
//     var photo = photoNumber + 'png';
//     alert('photo: ' + photo);
//    },

/*onclick function: on click of header welcome loads firstPage content*/
gotofirstpage: function() {

    spa.$render('firstPage',{
        target: '#container'
    });
},

/*toggle on click of about*/
clearAbout: function() {
        $("#about").toggle();
}
});