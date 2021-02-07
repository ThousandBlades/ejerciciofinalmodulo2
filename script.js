$('[data-setdata]').click(function(){
    $('[data-data-p]').data( "test", { clap: "*Clap!* *Clap!*" } );
    $( '[data-data-p2]' ).text( $( '[data-data-p]' ).data( "test" ).clap );
});

$('[data-getdata]').click(function () {
    alert($('[data-data-p]').data( "test" ).clap)
});


$('[data-addclass]').click(function(){
    $('[data-addclass-p]').addClass( "text-danger" );
});

$('[data-slidetoggle]').click(function(){
    $('[data-slidetoggle-img]').slideToggle();
});

$('[data-append]').click(function(){
    $('[data-append-p]').append("*Clap!* *Clap!*<br>");
});

$('[data-val]').click(function () {
    alert($('[data-val-form]').val())
});

$( '[data-fadeout]' ).click(function() {
    $( '[data-fadeinout]' ).fadeOut();
});

$( '[data-fadein]' ).click(function() {
    $( '[data-fadeinout]' ).fadeIn();
});

$('[data-focus-form]').focus(function(){
    $('[data-focus-form]').animate({ "width": "+=10%", "height": "+=10%" }, "slow")
  });
$( '[data-focus]' ).click(function() {
    $('[data-focus-form]').animate({ "width": "202px", "height": "25px" }, "slow");
});

$('[data-hide]').click(function() {
    $('[data-hide-para]' ).hide();
});

$( '[data-show]' ).click(function() {
    $( '[data-hide-para]' ).show();
});

$('[data-slide-Up]').click(function () {
    $('[data-slide]').slideUp();
});
$('[data-slide-down]').click(function () {
    $('[data-slide]').slideDown();
});