var UserName = document.getElementById("UserName");
var text = document.getElementById("text");
var intContainer = document.getElementById("intContainer");
var quizNbr = document.getElementById("quizNbr")
var logBtn = document.getElementById("logBtn")
var quiz1 = document.getElementById("quiz1");
var rsltPage = document.getElementById("rsltPage");

var questionEle = document.getElementById("questionEle");
var optionEle = document.getElementById("optionEle");
var pageNbr = document.getElementById("pageNbr")

function showQUiz(){
    if(UserName.value.length < 3 || text.value.length < 3){
        alert("Please enter your details!")
    }else{
        intContainer.style.display = "none"
        quizNbr.style.display = "block"
    }
}

var htmlQuestions = [
    {
        "id": 1,
        "question": "HTML stands for?",
        "options": {
            "a": "Hyper Text Markup Language",
            "b": "Hyper Text Programming Language",
            "c": "Hyper Text Styling Language",
            "d": "Hyper Text Scripting Language"
        },
        "answer": "Hyper Text Markup Language"
    },
    {
        "id": 2,
        "question": "Which HTML tag is used to define an internal style sheet?",
        "options": {
            "a": "style",
            "b": "script",
            "c": "link",
            "d": "css"
        },
        "answer": "style"
    },
    {
        "id": 3,
        "question": "What does the <a> tag define in HTML?",
        "options": {
            "a": "Anchor (hyperlink)",
            "b": "Article",
            "c": "Audio",
            "d": "Address"
        },
        "answer": "Anchor (hyperlink)"
    },
    {
        "id": 4,
        "question": "Which tag is used to display a horizontal rule in HTML?",
        "options": {
            "a": "hr",
            "b": "br",
            "c": "line",
            "d": "hline"
        },
        "answer": "hr"
    },
    {
        "id": 5,
        "question": "What is the purpose of the <head> tag in HTML?",
        "options": {
            "a": "Contains metadata and links to scripts or stylesheets",
            "b": "Defines the main body content",
            "c": "Creates a header",
            "d": "Defines a footer"
        },
        "answer": "Contains metadata and links to scripts or stylesheets"
    },
    {
        "id": 6,
        "question": "Which HTML attribute specifies an alternate text for an image?",
        "options": {
            "a": "alt",
            "b": "title",
            "c": "src",
            "d": "longdesc"
        },
        "answer": "alt"
    },
    {
        "id": 7,
        "question": "Which tag is used to define a table row in HTML?",
        "options": {
            "a": "tr",
            "b": "td",
            "c": "th",
            "d": "table"
        },
        "answer": "tr"
    },
    {
        "id": 8,
        "question": "What does the <title> tag define in an HTML document?",
        "options": {
            "a": "The title of the document in the browser tab",
            "b": "The title of a section",
            "c": "The title of an image",
            "d": "The title of a hyperlink"
        },
        "answer": "The title of the document in the browser tab"
    },
    {
        "id": 9,
        "question": "Which tag is used to create a list with bullets?",
        "options": {
            "a": "ul",
            "b": "ol",
            "c": "li",
            "d": "list"
        },
        "answer": "ul"
    },
    {
        "id": 10,
        "question": "Which attribute specifies the destination URL for a hyperlink?",
        "options": {
            "a": "href",
            "b": "src",
            "c": "target",
            "d": "rel"
        },
        "answer": "href"
    },
    {
        "id": 11,
        "question": "What is the purpose of the <meta> tag in HTML?",
        "options": {
            "a": "Provides metadata about the document",
            "b": "Links stylesheets",
            "c": "Defines sections",
            "d": "Creates hyperlinks"
        },
        "answer": "Provides metadata about the document"
    },
    {
        "id": 12,
        "question": "Which tag is used to create a drop-down list in HTML?",
        "options": {
            "a": "select",
            "b": "option",
            "c": "list",
            "d": "dropdown"
        },
        "answer": "select"
    },
    {
        "id": 13,
        "question": "What does the iframe tag do in HTML?",
        "options": {
            "a": "Embeds another HTML document within the current document",
            "b": "Creates an image frame",
            "c": "Defines a form",
            "d": "Creates a button"
        },
        "answer": "Embeds another HTML document within the current document"
    },
    {
        "id": 14,
        "question": "What is the correct tag for inserting a line break in HTML?",
        "options": {
            "a": "br",
            "b": "break",
            "c": "lb",
            "d": "newline"
        },
        "answer": "br"
    },
    {
        "id": 15,
        "question": "Which HTML tag is used to define emphasized text?",
        "options": {
            "a": "em",
            "b": "i",
            "c": "strong",
            "d": "bold"
        },
        "answer": "em"
    },
    {
        "id": 16,
        "question": "What does the <table> tag define in HTML?",
        "options": {
            "a": "A table structure",
            "b": "A table row",
            "c": "A table cell",
            "d": "A table header"
        },
        "answer": "A table structure"
    },
    {
        "id": 17,
        "question": "Which tag is used to define a section in HTML?",
        "options": {
            "a": "section",
            "b": "div",
            "c": "article",
            "d": "aside"
        },
        "answer": "section"
    },
    {
        "id": 18,
        "question": "Which attribute is used to uniquely identify an element in HTML?",
        "options": {
            "a": "id",
            "b": "class",
            "c": "style",
            "d": "name"
        },
        "answer": "id"
    },
    {
        "id": 19,
        "question": "Which HTML tag is used to insert an image?",
        "options": {
            "a": "img",
            "b": "picture",
            "c": "media",
            "d": "figure"
        },
        "answer": "img"
    },
    {
        "id": 20,
        "question": "Which HTML tag is used to create a form?",
        "options": {
            "a": "form",
            "b": "input",
            "c": "button",
            "d": "fieldset"
        },
        "answer": "form"
    }
]


var indexNumber = 0;
var correctAnswer = 0
var wrongAnswer = 0
pageNbr.innerHTML = `${indexNumber + 1}/${htmlQuestions.length}`


function startHtmlQuiz(){
    quizNbr.style.display = "none";
    quiz1.style.display = "block";
    
    
    var optionObj = htmlQuestions[indexNumber].options;
    if(indexNumber+1 < 10){
        questionEle.innerHTML =  `0${indexNumber+1}: ${htmlQuestions[indexNumber].question}`;
    }else{
        questionEle.innerHTML =  `${indexNumber+1}: ${htmlQuestions[indexNumber].question}`;
    }
    
    optionEle.innerHTML = "";
    for (var key in optionObj) {
        optionEle.innerHTML += `<li onclick="checkAns(this)">${optionObj[key]}</li>`
    }
}

var nxtBtn = document.getElementById("nxtBtn");
var sbtmBtn = document.getElementById("sbtmBtn");

function checkAns(element){
    var allLiEle = optionEle.children;
    var ans = htmlQuestions[indexNumber].answer
    console.log(ans)
    var result = element.innerHTML == htmlQuestions[indexNumber].answer;
    if(result){
        element.style.background = "green";    
        element.style.color = "white";
        correctAnswer++;    
    }else{
        element.style.background = "red";   
        element.style.color = "white";
        wrongAnswer++    
    }
    
    for(var i= 0; i < allLiEle.length; i++){
        if(allLiEle[i].innerHTML.toLowerCase() == ans.toLowerCase()){
            allLiEle[i].style.background = "green" 
            break;
        }
        
    }
    
    for(var i= 0; i < allLiEle.length; i++){
        allLiEle[i].style.pointerEvents = "none"
    }
    nxtBtn.disabled = false;
}

function nextHtmlQuestion(){
    if(indexNumber < htmlQuestions.length-1){
        indexNumber++
        startHtmlQuiz()
        nxtBtn.disabled = true
    }else{
        nxtBtn.style.display = "none"
        sbtmBtn.style.display = "block"
    }
    pageNbr.innerHTML = `${indexNumber + 1}/${htmlQuestions.length}`
}

function submit(){
    quiz1.style.display = "none"
    rsltPage.style.display = "block"
    var crtAns = document.getElementById("crtAns")
    var wrgAns = document.getElementById("wrgAns")
    var prctAns = document.getElementById("prctAns")
    crtAns.innerHTML = correctAnswer;
    wrgAns.innerHTML = wrongAnswer;
    prctAns.innerHTML = `${(correctAnswer/htmlQuestions.length)*100}%`;

}
var msg = document.getElementById("msg")
function showResultPage(){
    var crtAns = document.getElementById("crtAns")
    var wrgAns = document.getElementById("wrgAns")
    var prctAns = document.getElementById("prctAns")
    var percentage = (correctAnswer/htmlQuestions.length)*100;
    crtAns.innerHTML = correctAnswer;
    wrgAns.innerHTML = wrongAnswer;
    prctAns.innerHTML = `${percentage}%`;

}


// console.log(indexNumber)
// var cssQuestions = [
//     {
//         "id": 1,
//         "question": "What does CSS stand for?",
//         "options": {
//             "a": "Cascading Style Sheets",
//             "b": "Colorful Style Sheets",
//             "c": "Creative Style Sheets",
//             "d": "Computer Style Sheets"
//         },
//         "answer": "Cascading Style Sheets"
//     },
//     {
//         "id": 2,
//         "question": "Which property is used to change the background color of an element?",
//         "options": {
//             "a": "background-color",
//             "b": "color",
//             "c": "bgcolor",
//             "d": "background-style"
//         },
//         "answer": "background-color"
//     },
//     {
//         "id": 3,
//         "question": "Which CSS property controls the text size?",
//         "options": {
//             "a": "font-size",
//             "b": "text-size",
//             "c": "size",
//             "d": "text-style"
//         },
//         "answer": "font-size"
//     },
//     {
//         "id": 4,
//         "question": "Which CSS property is used to make text bold?",
//         "options": {
//             "a": "font-weight",
//             "b": "font-bold",
//             "c": "text-bold",
//             "d": "weight-bold"
//         },
//         "answer": "font-weight"
//     },
//     {
//         "id": 5,
//         "question": "How do you add a comment in CSS?",
//         "options": {
//             "a": "/* This is a comment */",
//             "b": "// This is a comment",
//             "c": "# This is a comment",
//             "d": "<!-- This is a comment -->"
//         },
//         "answer": "/* This is a comment */"
//     },
//     {
//         "id": 6,
//         "question": "Which property is used to change the font of an element?",
//         "options": {
//             "a": "font-family",
//             "b": "font-type",
//             "c": "font-style",
//             "d": "font-text"
//         },
//         "answer": "font-family"
//     },
//     {
//         "id": 7,
//         "question": "Which property is used to align text horizontally?",
//         "options": {
//             "a": "text-align",
//             "b": "align",
//             "c": "horizontal-align",
//             "d": "text-position"
//         },
//         "answer": "text-align"
//     },
//     {
//         "id": 8,
//         "question": "Which property is used to add space inside the border of an element?",
//         "options": {
//             "a": "padding",
//             "b": "margin",
//             "c": "spacing",
//             "d": "border-space"
//         },
//         "answer": "padding"
//     },
//     {
//         "id": 9,
//         "question": "Which CSS property controls the visibility of an element?",
//         "options": {
//             "a": "visibility",
//             "b": "display",
//             "c": "hidden",
//             "d": "opacity"
//         },
//         "answer": "visibility"
//     },
//     {
//         "id": 10,
//         "question": "How do you make a list not display bullet points?",
//         "options": {
//             "a": "list-style-type: none;",
//             "b": "list: none;",
//             "c": "text-decoration: none;",
//             "d": "list-style: no-bullets;"
//         },
//         "answer": "list-style-type: none;"
//     },
//     {
//         "id": 11,
//         "question": "Which CSS property is used to set the space between lines of text?",
//         "options": {
//             "a": "line-height",
//             "b": "text-height",
//             "c": "spacing",
//             "d": "letter-spacing"
//         },
//         "answer": "line-height"
//     },
//     {
//         "id": 12,
//         "question": "How do you select an element with the id 'header' in CSS?",
//         "options": {
//             "a": "#header",
//             "b": ".header",
//             "c": "header",
//             "d": "*header"
//         },
//         "answer": "#header"
//     },
//     {
//         "id": 13,
//         "question": "Which CSS property is used to change the text color of an element?",
//         "options": {
//             "a": "color",
//             "b": "text-color",
//             "c": "font-color",
//             "d": "text-style"
//         },
//         "answer": "color"
//     },
//     {
//         "id": 14,
//         "question": "How do you apply a CSS style to a class?",
//         "options": {
//             "a": ".classname",
//             "b": "#classname",
//             "c": "*classname",
//             "d": "classname"
//         },
//         "answer": ".classname"
//     },
//     {
//         "id": 15,
//         "question": "Which property is used to set the width of an element's border?",
//         "options": {
//             "a": "border-width",
//             "b": "border-thickness",
//             "c": "border-size",
//             "d": "border-style"
//         },
//         "answer": "border-width"
//     },
//     {
//         "id": 16,
//         "question": "Which CSS property is used to specify the stacking order of elements?",
//         "options": {
//             "a": "z-index",
//             "b": "position",
//             "c": "stack",
//             "d": "display"
//         },
//         "answer": "z-index"
//     },
//     {
//         "id": 17,
//         "question": "Which property specifies whether an element is floated left or right?",
//         "options": {
//             "a": "float",
//             "b": "position",
//             "c": "align",
//             "d": "clear"
//         },
//         "answer": "float"
//     },
//     {
//         "id": 18,
//         "question": "What is the default position property in CSS?",
//         "options": {
//             "a": "static",
//             "b": "relative",
//             "c": "absolute",
//             "d": "fixed"
//         },
//         "answer": "static"
//     },
//     {
//         "id": 19,
//         "question": "Which property specifies the amount of space between the content and border?",
//         "options": {
//             "a": "padding",
//             "b": "margin",
//             "c": "spacing",
//             "d": "border-spacing"
//         },
//         "answer": "padding"
//     },
//     {
//         "id": 20,
//         "question": "Which CSS unit is relative to the size of the root element?",
//         "options": {
//             "a": "rem",
//             "b": "em",
//             "c": "px",
//             "d": "%"
//         },
//         "answer": "rem"
//     }
// ]

// var nxtBtn1 = document.getElementById("nxtBtn1");
// index = 0
// function startCssQuiz(){
//     quizNbr.style.display = "none";
//     quiz1.style.display = "block";
    
//     nxtBtn1.style.display = "block"
//     nxtBtn.style.display = "none"
//     index = 0;
    
    
//     var optionObj = cssQuestions[index].options;
//     if(index+1 < 10){
//         questionEle.innerHTML =  `0${index+1}: ${cssQuestions[index].question}`;
//     }else{
//         questionEle.innerHTML =  `${index+1}: ${cssQuestions[index].question}`;
//     }
    
//     optionEle.innerHTML = "";
//     for (var key in optionObj){
//         optionEle.innerHTML += `<li onclick="checkCssAns(this)">${optionObj[key]}</li>`
//     }
// }

// function nextCssQuestion(){
//     console.log("hbshxbshbxh")
//     if(index < cssQuestions.length-1){
//         index++;
//         startCssQuiz()
//         // nxtBtn.disabled = true
//     }else{
//         nxtBtn1.style.display = "none"
//         sbtmBtn.style.display = "block"
//     }
//     pageNbr.innerHTML = `${index + 1}/${cssQuestions.length}`
// }


// function checkCssAns(element){
//     var allLiEle = optionEle.children;
//     var ans = cssQuestions[index].answer
//     console.log(ans)
//     var result = element.innerHTML == cssQuestions[index].answer;
//     if(result){
//         element.style.background = "green";    
//         element.style.color = "white";
//         correctAnswer++;    
//     }else{
//         element.style.background = "red";   
//         element.style.color = "white";
//         wrongAnswer++    
//     }
    
//     for(var i= 0; i < allLiEle.length; i++){
//         if(allLiEle[i].innerHTML.toLowerCase() == ans.toLowerCase()){
//             allLiEle[i].style.background = "green" 
//             break;
//         }
        
//     }
    
//     for(var i= 0; i < allLiEle.length; i++){
//         allLiEle[i].style.pointerEvents = "none"
//     }
//     nxtBtn.disabled = false;
// }





