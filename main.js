const questions=[
    {
        question:"who is SpongBob's best friend",
        answers:[
            {text:"Patrik",correct:true},
            {text:"Squidward",correct:false},
            {text:"Gary",correct:false},
            {text:"MR.Krub",correct:false},
        ]
    },
    {
        question:"where do SpongeBob's lives",
        answers:[
            {text:"in a Pinapple",correct:true},
            {text:"on the ground",correct:false},
            {text:"on the moon",correct:false},
            {text:"in an orange",correct:false},
        ]
    },
    {
        question:"What is the name of SpongeBob's pet snail?",
        answers:[
            {text:"Patrik",correct:false},
            {text:"Squidward",correct:false},
            {text:"Gary",correct:true},
            {text:"MR.Krub",correct:false},
        ]
    },
    {
        question:"what can SpongeBob do the best",
        answers:[
            {text:"teach patrik",correct:false},
            {text:"danse with sidny",correct:false},
            {text:"cook burgers at krusty krub",correct:true},
            {text:"play games",correct:false},
        ]
    },
    {
        question:"what is the secret ingredient of the krusty krub burgers",
        answers:[
            {text:"love",correct:false},
            {text:"meat",correct:false},
            {text:"cheez",correct:false},
            {text:"pankaton",correct:true},
        ]
    },

];

const questionElement= document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + "." + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}
  function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild);
    answerButton.removeChild(answerButton.firstChild);
  }

  function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect= selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
  }

  function showScore(){
     resetState();
     questionElement.innerHTML= `you scored ${score} out of ${questions.length} `;
     nextButton.innerHTML="play Again";
     nextButton.style.display= 'block'
 }

  nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  })


 startQuiz();