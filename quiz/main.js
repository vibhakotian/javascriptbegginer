let points=0;
let currentQuestion=0;
const detail=[
    {
        question:'Which house do you think luna love god  belong?',
        Option:['Slytherin',
        'Hufflepluff',
        'Gryffindor',
        'Ravenclaw'],
        Answer:'Gryffindor'

    },
    {
        question:'What position does Harry play on the Gryffindor Quidditch team?',
        Option:['Seeker','defender','attacker','Runner'],
        Answer:'Seeker'
    },
    {
        question:'What kind of pet does Harry own?',
        Option:['Dog','Rat','Owl','Egale'],
        Answer:'Owl'
    },
    {
        question:'Who makes laws for the magical world? ',
        Option:['Magic Coporation','Ministry of Magic','Magic President','Society of Magic'],
        Answer:'Ministry of Magic'
    },
    {
        question:" What are the names of Harry’s parents?",
        Option:['James and  Lilly','Snape and Lily','Rose and James','Jenny and Lisa'],
        Answer:'James and  Lilly'
    }
];
const poi=document.getElementById('po');
const questionElement=document.getElementById('question');
const butn=document.querySelectorAll('.button');
function startQuiz()
{
    currentQuestion=0;
    points=0;
    showQuestion(currentQuestion);

}
function showQuestion(index)
{

    if(index<detail.length)
    {
        questionElement.textContent=detail[index].question;
        for(let i=0;i<butn.length;i++)
        {
            butn[i].textContent=detail[index].Option[i];
        }
    }
    else
    {
        alert(`Quiz completed! You scored ${points} out of ${detail.length}`);
        startQuiz();
    }
}
function checkanswer(selectedOption)
{
    const currentAnswer=detail[currentQuestion].Answer;
    if(selectedOption==currentAnswer)
    {
        points++;
    }
    currentQuestion++;
    poi.textContent=points;
    showQuestion(currentQuestion);
    
}
butn.forEach((button)=>{
    button.addEventListener('click',()=>{
        checkanswer(button.textContent);
    });
});
startQuiz();