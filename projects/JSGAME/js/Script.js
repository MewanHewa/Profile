var deadsound = new Audio("dead.mp3");
var bgsound = new Audio("bgmusic.mp3");
var coinsound = new Audio("goldcollect.mp3");


var witch = $('#witch');
var d1 = $('#d1');
var d2 = $('#d2');
var d3 = $('#d3');
var d4 = $('#d4');
var d5 = $('#d5');
var d6 = $('#d6');
var d7 = $('#d7');
var d8 = $('#d8');
var d9 = $('#d9');
var d10 = $('#d10');
var d11 = $('#d11');
var d12 = $('#d12');
var d13 = $('#d13');
var d14 = $('#d14');
var d15 = $('#d15');
var d16 = $('#d16');
var d17 = $('#d15');
var d18 = $('#d16');

var c1 = $('#c1');
var c2 = $('#c2');
var c3 = $('#c3');
var c4 = $('#c4');
var c5 = $('#c5');
// var c6 = $('#c6');
// var c7 = $('#c7');
// var c8 = $('#c8');
// var c9 = $('#c9');
// var c10 = $('#coin10');
// var c11 = $('#coin11');
// var c12 = $('#coin12');
// var c13 = $('#coin13');
// var c14 = $('#coin14');
// var c15 = $('#coin15');
// var c16 = $('#coin16');
// var c17 = $('#coin17');
// var c18 = $('#coin18');
// var c19 = $('#coin19');
// var c20 = $('#coin20');


$(document).ready(function () {

});
$(window).on('load',function () {
    console.log("readying window")
    $('#loader').fadeOut(1000);
})

$('#btnplay').click(function () {
    $('#guid').fadeOut(1000);
    bgsound.play();
});

var up =false;

$('#btnstart').click(function () {
    $('#btnstart').css('display','none');
    $('#ground').css('transform', 'translateX(-2000%)');
    $('#rocks').css('transform', 'translateX(-1000%)');

    var interval = setInterval(function () {

        if (collision(witch,d1)) {gameOver();}
        if (collision(witch,d2)) {gameOver();}
        if (collision(witch,d3)) {gameOver();}
        if (collision(witch,d4)) {gameOver();}
        if (collision(witch,d5)) {gameOver();}
        if (collision(witch,d6)) {gameOver();}
        if (collision(witch,d7)) {gameOver();}
        if (collision(witch,d8)) {gameOver();}
        if (collision(witch,d9)) {gameOver();}
        if (collision(witch,d10)) {gameOver();}
        if (collision(witch,d11)) {gameOver();}
        if (collision(witch,d12)) {gameOver();}
        if (collision(witch,d13)) {gameOver();}
        if (collision(witch,d14)) {gameOver();}
        if (collision(witch,d15)) {gameOver();}
        if (collision(witch,d16)) {gameOver();}
        if (collision(witch,d17)) {gameOver();}
        if (collision(witch,d18)) {gameOver();}


        if (collision(witch,c1)){coinCollect(c1);}
        if (collision(witch,c2)){coinCollect(c2);}
        if (collision(witch,c3)){coinCollect(c3);}
        if (collision(witch,c4)){coinCollect(c4);}
        if (collision(witch,c5)){coinCollect(c5);}
        //
        // if (collision(witch,c6)){coinCollect(c6);}
        // if (collision(witch,c7)){coinCollect(c7);}
        // if (collision(witch,c8)){coinCollect(c8);}
        // if (collision(witch,c9)){coinCollect(c9);}
        // if (collision(witch,c10)){coinCollect(c10);}

        if(up===false){
                down();
            }

            $(document).on('keydown',function (e) {
                var key = e.keyCode;
                if(key===32 && up===false){
                    up=setInterval(goup,10);
                }
            });

            $(document).on('keyup',function (e) {
                var key = e.keyCode;
                if(key===32 ){
                    clearInterval(up);
                    up=false;
                }
            });

            function goup() {
                if(0===parseFloat($('#witch').css('top'))){
                    $('#witch').css('top',parseFloat($('#witch').css('top'))+0);
                }else{
                    $('#witch').css('top',parseInt($('#witch').css('top'))-5);
                }

            }

            function down() {

                if(430 <= parseFloat($('#witch').css('top'))) {
                    $('#witch').css('top',parseFloat($('#witch').css('top'))+0);
                }else {
                    $('#witch').css('top',parseFloat($('#witch').css('top'))+1);
                }

            }

            function gameOver() {
                $(witch).css({'background-image': 'url(boom.gif)',
                    'background-size':'cover',
                    'width':'200px',
                    'height':'150px'
                });
                clearInterval(interval);
                deadsound.play();
                $('#gameoverdiv').css({'opacity':'1','zIndex':'55'});
                $('#ground').css('transform', 'translateX(0%)');
                $('#rocks').css('transform', 'translateX(-0%)');
            }

            function coinCollect(c) {
                coinsound.play();
                c.css('display', 'none');
            }
    });

});


$('#gameover').click(function () {
    location.reload(this);
});



function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1/4;
    var r1 = x1 + w1/4;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2/4;
    var r2 = x2 + w2/4;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}


