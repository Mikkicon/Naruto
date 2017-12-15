
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
        var prbar = document.getElementById("progbar");
        $node.find(".question").text(question.question);
        $node.find('.progress').text(question.id+"/"+testLength);
        $node.find('#progbar').text((question.id *100)/testLength+"%");
        //prbar.style.width = (question.id *100)/testLength+'%';
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
                localStorage.setItem('rightAns',howManyCorrectAns);
                window.location='http://localhost:5050/Naruto/Frontend/www/results.html';
            }
            showQuestions();
            // $node.find('.prev').enable();

        });
        $node.find('.prev').click(function () {
            if (whichQuestion > 1) {
                whichQuestion--;
            }
            if(whichQuestion===1){

            }
            $node.hide();

            showQuestions();


        });
        if(question.answers.one==undefined){
            $node.find('.input1').hide();
            $node.find('.opt1').hide();
        }
        else{
            $node.find('.opt1').show();
            $node.find('.input1').show();
        }
        if(question.answers.two==undefined){
            $node.find('.opt2').hide();
            $node.find('.input2').hide();
        }
        else {
            $node.find('.opt2').show();
            $node.find('.input2').show();
        }
        if(question.answers.three==undefined){
            $node.find('.input3').hide();
            $node.find('.opt3').hide();
        }
        else {
            $node.find('.opt3').show();
            $node.find('.input3').show();
        }
        if(question.answers.four==undefined){
            alert("opt4 hidden");
            $node.find('.opt4').hide();
            $node.find('.input4').hide();
        }
        else{
            $node.find('.input4').show();
            $node.find('.opt4').show();
        }
        $node.show();
        $node.appendTo($pole);


    }

    exports.showQuestions=showQuestions();
});

