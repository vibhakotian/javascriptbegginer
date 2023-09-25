let startbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let resetbtn=document.getElementById('reset');
let hour=0;
let min=0;
let sec=0;
let count=0;
startbtn.addEventListener('click',function(){
    timer=true;
    stopWatch();
    
})
stopbtn.addEventListener('click',function()
{
    timer=false;
})
resetbtn.addEventListener('click',function(){
timer=false;
hour=0;
min=0;
sec=0;
count=0;
document.getElementById('hr').innerHTML="00";
document.getElementById('min').innerHTML="00";
document.getElementById('sec').innerHTML="00";
document.getElementById('count').innerHTML="00";
})
function stopWatch()
{
    if(timer)
    {
        count++;
        if(count==100)
        {
            sec++;
            count=0;
        }
        if(sec==60)
        {
            min++;
            sec=0;
        }
        if(min==60)
        {
            hour++;
            min=0;
            sec=0;
        }
        let hrString=hour;
        let minString=min;
        let secString=sec;
        let countString=count;
        if(hour<10)
        {
            hrString="0"+hrString;
        }
        if(min<10)
        {
            minString="0"+minString;
        }
        if(sec<10)
        {
            secString="0"+secString;
        }
        if(count<10)
        {
            countString="0"+countString;
        }
        document.getElementById("hr").innerHTML=hrString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("count").innerHTML=countString;
        setTimeout(stopWatch,10);
    }
}