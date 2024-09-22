//create the api for the question we used
const questiondata = [
    {
        'ques':" 1.What does HTML stand for?",
        'a':"HYPER TEXT MARKUP LANGUAGE",
        'b':"Hyperlink and text markup language",
        'c':"Home Tool markup language",
        'd':"none",
        'correct':"a",
    },
    {
        'ques':"2.Who is making the Web standards?",
        'a':"none",
        'b':"Mozilla",
        'c':"The World Wide Web Consortium",
        'd':"Google",
        'correct':"c",
    },
    {
        'ques':"3.Choose the correct HTML element for the largest heading:",
        'a':"h6",
        'b':"heading",
        'c':"head",
        'd':"h1",
        'correct':"d",
    },
    {
      'ques':"4.What is the correct HTML element for inserting a line break?",
      'a':"br",
      'b':"lb",
      'c':"break",
      'd':"none",
      'correct':"a",
  },
  {
    'ques':"5.What is the correct HTML for adding a background color?",
    'a':"body style=background-color:yellow;",
    'b':"body  bg=yellow",
    'c':"none",
    'correct':"a",
},
{
  'ques':"6.Choose the correct HTML element to define emphasized text",
  'a':"i",
  'b':"em",
  'c':"italic",
  'd':"none",
  'correct':"b",
},
{
  'ques':"7.What does CSS stand for?",
  'a':"Creative Style Sheet",
  'b':"Computer Style Sheet",
  'c':"Colourful Style Sheet",
  'd':"Cascading Style Sheet",
  'correct':"d",
},
{
  'ques':"8.Which character is used to indicate an end tag?",
  'a':"^",
  'b':"<",
  'c':"*",
  'd':"/",
  'correct':"d",
},
{
  'ques':"9.How can you open a link in a new tab/browser window?",
  'a':"a href=url new",
  'b':"a href=url target=new",
  'c':"a href=url target=_blank",
  'd':"none",
  'correct':"c",
}


]

var a  = document.getElementById('quesbox');
var optionInput = document.querySelectorAll('.option');

let index = 0 ; 
let total  = questiondata.length;
let right = 0;
let wrong = 0;
const getdata =()=>{
 if(index<total){
  const data = questiondata[index];
  a.innerText  = data.ques;
  optionInput[0].nextElementSibling.innerHTML = data.a
  optionInput[1].nextElementSibling.innerHTML = data.b
  optionInput[2].nextElementSibling.innerHTML = data.c
  optionInput[3].nextElementSibling.innerHTML = data.d;
 }else{
  endquiz();
 }
}
getdata();

const getanswer=()=>{
    const data = questiondata[index]; 
    const ans = getOption();
     if(ans === data.correct){
         right++;
    }else{
        wrong++;
    }
    index++;
    getdata();
    reset();
    return;
}

const getOption = () => {
    let selectedOption = null;  // Initialize variable to store the selected option
    optionInput.forEach((input) => {
      if (input.checked) {
        selectedOption = input.value;  // Store the value of the checked option
      }
    });
    return selectedOption;  // Return the selected option (or null if none is selected)
  }

  const reset = () =>{
    optionInput.forEach((input) => {
       input.checked = false
    })
  }

  const endquiz =() =>{
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('end-message').style.display = 'block';

  // Display the user's score and total score
  document.getElementById('user-score').innerText = right;
  document.getElementById('total-score').innerText = total;

  console.log("Quiz completed! Right: " + right + ", Wrong: " + wrong);
  }

  
