
    var Question=require('./Question');
    var correct=localStorage.getItem('rightAns');
    var length=localStorage.getItem('testLength');

    if(window.location.href=='http://localhost:5050/Naruto/Frontend/www/results.html'){
        showRes();
    }
    
    function showRes() {

        $('#colored').text(correct+" out of "+length);
        if(correct > 7){
            document.getElementById("colored").style.color = "green";
        }else if(correct >4 && correct<7){
            document.getElementById("colored").style.color = "yellow";
        }else if(correct <4){
            document.getElementById("colored").style.color = "red";
        }
    }

