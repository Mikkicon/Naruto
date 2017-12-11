(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var question_info = [
    {
        id:1,
        title: "Naruto",
        question:"Do you like Madara?",
        answers:{
            one:"No",
            two:"Who is it?",
            three:"Yes",
            four:"TOMAT"
        },
        correctAns:"three"
    },
    {
        id:1,
        title: "Psycho",
        question:"Do you like Misha's mom?",
        answers:{
            one:"No",
            two:"Who is it?",
            three:"Yes",
            four:"YA EBAL TVOU TELKY Y"
        },
        correctAns:"four"
    },
    {
        id:1,
        title: "Prots",
        question:"Protsessorr zdarova?",
        answers:{
            one:"HALO",
            two:"Who is it?",
            three:"Yes",
            four:"JAMALA"
        },
        correctAns:"four"
    },
    {
        id:2,
        title: "Prots",
        question:"Typa loh?",
        answers:{
            one:"Loh",
            two:"Chmo?",
            three:"Privet",
            four:"Gaben"
        },
        correctAns:"two"
    },

    {
        id:2,
        title: "Psycho",
        question:"GGGGGGAAA?",
        answers:{
            one:"No",
            two:"Who is it?",
            three:"EEEEEEBOOI",
            four:"TOMAT"
        },
        correctAns:"two"
    },
    {
        id:2,
        title: "Naruto",
        question:"Do you like Me?",
        answers:{
            one:"No",
            two:"Who is it?",
            three:"YAYAY",
            four:"TOMAT"
        },
        correctAns:"four"
    }

];


exports.questions_info = question_info;
},{}],2:[function(require,module,exports){
/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    //This code will execute when the page is ready
    // var PizzaMenu = require('./pizza/PizzaMenu');
    // var PizzaCart = require('./pizza/PizzaCart');
    // var Pizza_List = require('./Pizza_List');
    // var OrderValidation = require('./pizza/PizzaValidationForm');
    // //var GoogleCart=require('./pizza/GoogleMap');
    //
    // PizzaCart.initialiseCart();
    // PizzaMenu.initialiseMenu();


    var AllQuestions=require('./Questions');
    var Question=require('./pizza/Question');
    var TestDefine=require('./pizza/TestDefine');

    if(window.location.href=='http://localhost:63342/Naruto/Frontend/www/questionRender.html'){
        Question.showQuestions;

    }
});
},{"./Questions":1,"./pizza/Question":3,"./pizza/TestDefine":4}],3:[function(require,module,exports){

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


},{"../Questions":1}],4:[function(require,module,exports){

var quest=require('../Questions');

$('.naruto').click(function () {
    localStorage.setItem('test',"Naruto");
    window.location='../../../../Naruto/Frontend/www/questionRender.html';
    countHowManyQuestionsInTest();
})

$('.psycho').click(function () {
   localStorage.setItem('test',"Psycho");
    window.location='../../../../Naruto/Frontend/www/questionRender.html';
    countHowManyQuestionsInTest();
});


$('.prots').click(function () {
    localStorage.setItem('test',"Prots");
    window.location='../../../../Naruto/Frontend/www/questionRender.html';
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
    // alert(counter);
    // localStorage.setItem('testLength',counter);
}
},{"../Questions":1}]},{},[2]);
