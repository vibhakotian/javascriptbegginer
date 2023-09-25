const increase=document.getElementById('in');
const decrease=document.getElementById('de');
const reset=document.getElementById('reset');
let count=0;
increase.addEventListener("click",function()
{
    count++;
    document.getElementById('text').innerHTML=count;

})
decrease.addEventListener("click",function()
{
    count--;
    document.getElementById('text').innerHTML=count;
})
reset.addEventListener("click",function()
{
    count=0;
    document.getElementById('text').innerHTML=count;
})