const quizData=[
    {
   question:"prime minister of india?",
   a:"modi",
   b:"Trump",
   c:"biden",
   d:"Rahul Gandhi",
   correct:"a"

   }, 
  {
   question:" what  is the most widly used programming lanugage?",
   a:"python",
   b:"javascript",
   c:"java",
   d:"c",
   correct:"c"
   },
   {
       question:"who own the ipl of 2020?",
       a:"chennai super kings",
       b:"Mumbai indians",
       c:"Delhi capitals",
       d:"Rcb",
       correct:"b"

   },
   {
       question:"In what year java script was launched",
       a:"1999",
       b:"1865",
       c:"1995",
       d:"1947",
       correct:"c"

    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz=document.getElementById("quiz");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let currentQuiz = 0;
let score=0;




loadQuiz();


   function loadQuiz() {
       deselectAnswers();
       const currentQuizData=quizData[currentQuiz];
       questionEl.innerText = currentQuizData.question;
       a_text.innerText = currentQuizData.a;
       b_text.innerText = currentQuizData.b;
       c_text.innerText = currentQuizData.c;
       d_text.innerText = currentQuizData.d;


      

   }

   function getSelected(){


       let answer = undefined;

       answerEls.forEach((answerEl)=>{
           if(answerEl.checked){
               answer=answerEl.id;
           }
       });
       return answer;

   }
   function deselectAnswers(){
       answerEls.forEach((answerEl) => {
           answerEl.checked=false;
               
          
       });
   }
   submitBtn.addEventListener("click",() =>{
       //chek to see the answer

       const answer = getSelected();
     
       if(answer){
           if(answer===quizData[currentQuiz].correct){
               score++;
           }
           currentQuiz++;
           if(currentQuiz<quizData.length){
               loadQuiz();
           }else{
               //to do show result
               quiz.innerHTML = `
               <h2  class="l">You answered correctly at ${score}/${quizData.length} questions.</h2>
               <button onclick="location.reload()" class="h">Reload</button>`;
               
           }

       }
    
   });