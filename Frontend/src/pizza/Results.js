
    var Question=require('./Question');
    var correct=localStorage.getItem('rightAns');
    var length=localStorage.getItem('testLength');

    if(window.location.href=='http://localhost:5050/Naruto/Frontend/www/results.html'){
        showRes();
    }
    
    function showRes() {
        $('.rightAnswers').text("Good job, you scored "+correct+" out of "+length);
    }

