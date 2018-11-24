var prev = document.getElementById('prevMonth');
var next = document.getElementById('nextMonth');
var day = document.getElementsByClassName('day');

var month = new Date();
var year = new Date();

var monthIndex=(()=>month.getMonth())();
var yearIndex=(()=>year.getFullYear())();

var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

document.title=`${months[monthIndex]} ${yearIndex}`;

prev.addEventListener('click',function(){
    var h=document.getElementById('month-tittle');
    h.innerHTML='';
    if(monthIndex==0){
        monthIndex=12;
        yearIndex--;
    }
    monthIndex--;
    h.innerHTML=`${months[monthIndex]} ${yearIndex}`;
    document.title=`${months[monthIndex]} ${yearIndex}`;
    var curMonth=document.getElementById('november');
    curMonth.innerHTML='';
    $(function(){
        $.getScript('src/daysGeneration.js',refresh); 
    });
});

next.addEventListener('click',function(e){
    var h=document.getElementById('month-tittle');
    h.innerHTML='';
    if(monthIndex==11){
        monthIndex=-1;
        yearIndex++;
    }
    monthIndex++;
    h.innerHTML=`${months[monthIndex]} ${yearIndex}`;
    document.title=`${months[monthIndex]} ${yearIndex}`;
    var curMonth=document.getElementById('november');
    curMonth.innerHTML='';
    $(function(){
        $.getScript('src/daysGeneration.js',refresh);
    });
})
