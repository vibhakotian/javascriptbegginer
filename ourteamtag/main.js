const prev=document.getElementById('prev');
const next=document.getElementById('next');
const random=document.getElementById('random');

var people=[
    {name:"Alice",job:"Software devloper",
    image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
    details:"Hi am software devloper worked at google and amazon i have 5 years of experience as java developer "},
    {name:"Jacob",job:"AI devloper",
    image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
    details:"hi there AI developer here just fresher in this field learning new routes with help of AI"},
    {name:"Sarah",job:"ML devloper",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnHiTawbigKGcLDvPhL0KiL9jjVVrrtxBOR8LGrsRX1yzh5jg811DYlUSRoMZEjIX0IM&usqp=CAU",
    details:"why have fear when ML is here .ML makes life interseting and easier "},
    {name:"Nathan",job:"Blockchain devloper",
    image:"https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg",
    details:"I guess future is blockchain its safer and better"},
    {name:"Jennifer",job:"UI UX devloper",
    image:"https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
    details:"I love making things beautiful and cathcy wehter its your software or website"},
    {name:"Freddy",job:"Front-end devloper",
    image:"https://media.istockphoto.com/id/1399366111/photo/handsome-young-mixed-race-man-smiling-and-happy-while-standing-in-studio-isolated-against-a.webp?b=1&s=170667a&w=0&k=20&c=odwoJctbPxx-EcHHK7E3ih0yjCW1tG-W1LyYqgCaILc=",
    details:"hello world how are you hope you are doing fine"},
    {name:"Roy",job:"FullStack devloper",
    image:"https://img.freepik.com/premium-photo/closeup-view-senior-attractive-man-smiling-looking-straight-into-camera_2221-6866.jpg",
    details:"hello world how are you hope you are doing fine"},
    {name:"Tom",job:"Cybersecurity",
    image:"https://thumbs.dreamstime.com/b/portrait-handsome-mature-man-home-attractive-year-old-52197333.jpg",
    details:"hello world how are you hope you are doing fine"},
    {name:"Ammy",job:"AI devloper",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXn0W8hzSTQDEtCXNAtjLuqOllTrWymz1Zx31Rwby4H__ZXqEMMGKfX5DXw20XWHqfj-U&usqp=CAU",
    details:"hello world how are you hope you are doing fine"},

]
var currentindex=0;
function displaycurrent()
{
    var currenperson=people[currentindex];
    document.getElementById("name").textContent=currenperson.name;
    document.getElementById("job").textContent=currenperson.job;
    document.getElementById("image").src=currenperson.image;
    document.getElementById("detail").textContent=currenperson.details;
}
next.addEventListener("click",function()
{
    if(currentindex<people.length-1)
    {
        currentindex++;
        displaycurrent();
    }
})
prev.addEventListener("click",function()
{
    if(currentindex>=0)
    {
        currentindex--;
        displaycurrent();
    }
})
random.addEventListener("click",function()
{
    currentindex=randomnumber();
    displaycurrent();
})
function randomnumber()
{
    return Math.floor(Math.random()*people.length);
}
