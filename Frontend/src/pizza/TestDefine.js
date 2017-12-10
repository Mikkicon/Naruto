
var quest=require('../Questions');

$('.naruto').click(function () {
    localStorage.setItem('test',"Naruto");
    window.location='../../../../AllesOderNichts/Frontend/www/questionRender.html';
    countHowManyQuestionsInTest();
})

$('.psycho').click(function () {
   localStorage.setItem('test',"Psycho");
    window.location='../../../../AllesOderNichts/Frontend/www/questionRender.html';
    countHowManyQuestionsInTest();
});


$('.prots').click(function () {
    localStorage.setItem('test',"Prots");
    window.location='../../../../AllesOderNichts/Frontend/www/questionRender.html';
    countHowManyQuestionsInTest();
});


function countHowManyQuestionsInTest() {
    var list=quest.questions_info;
    var test=localStorage.getItem('test');
    var counter=0
    list.forEach(function (t) {
        if(t.title==test){
            counter++;
        }
    })
    alert(counter);
    localStorage.setItem('testLength',counter);
}