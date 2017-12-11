
$(document).ready(function() {
   var naruto=require('../Questions');
   var howManyCorrectAns=0;
    var whichQuestion=1;
    var $pole=$('.inserQuestion');
    var ONE_ROW_HTML=$(".wrapperForQuestion").html();
    var list=naruto.questions_info;
    var testLength=localStorage.getItem('testLength');
    var test=localStorage.getItem('test');
    function showQuestions() {
        var counter=1;
        list.forEach(function (t) {
            if(t.id.toString()==whichQuestion&&test==t.title){
                showOneQuestion(t);
            }

            counter++;

        })
    }


    function showOneQuestion(question) {
        var $node=$(ONE_ROW_HTML);
        //alert(question.question);
        $node.find(".question").text(question.question);
        //alert(question.answers.one);
        $node.find('.opt1').text(question.answers.one);
        $node.find('.opt2').text(question.answers.two);
        $node.find('.opt3').text(question.answers.three);
        $node.find('.opt4').text(question.answers.four);

        $node.find('.next').click(function () {
            whichQuestion++;
            $("input[name='radioName']:checked").val();
            var ans=$node.find("input[name='exampleRadios']:checked").val();
            if(ans==question.correctAns){
                howManyCorrectAns++;
            }
            $node.hide();
            if(testLength==question.id){
                window.location='../../../../Naruto/Frontend/www/index.html';
            }
            showQuestions();
        })
        $node.show();
        $node.appendTo($pole);
    }
    exports.showQuestions=showQuestions();
})

