function DaysGeneration() { 
    var curMonth = new Date(yearIndex,monthIndex+1,0);
    var countOfDaysInCurrentMonth=curMonth.getDate();
    var firstDay = new Date(yearIndex,monthIndex,1);
    var arrayOfDaysNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    var month = document.getElementById('november');
    var curDay=new Date();

    for (let i = 1; i <= countOfDaysInCurrentMonth; i++) {
        var days = document.createElement('div');
        var dayNumber = document.createElement('span');
        days.className='day';
        dayNumber.className = 'day-number';
        dayNumber.innerHTML = i;
        days.id = i;
        days.appendChild(dayNumber);
        month.appendChild(days);
        switch(arrayOfDaysNames[firstDay.getDay()]){
            case 'пн':document.getElementById('1').style.gridColumnStart = '1';
                break;
            case 'вт':document.getElementById('1').style.gridColumnStart = '2';
                break;
            case 'ср':document.getElementById('1').style.gridColumnStart = '3';
                break;
            case 'чт':document.getElementById('1').style.gridColumnStart = '4';
                break;
            case 'пт':document.getElementById('1').style.gridColumnStart = '5';
                break;
            case 'сб':document.getElementById('1').style.gridColumnStart = '6';
                break;
            case 'вс':document.getElementById('1').style.gridColumnStart = '7';
                break;
        }

        if(curDay.getDate()==i  && curDay.getMonth()+1 == monthIndex+1 ){
            dayNumber.style.color='red';
        }
        
    }
};
DaysGeneration();