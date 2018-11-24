 var daysCounter = ((monthIndex,yearIndex)=>{
    var date=new Date();
    var days=new Date(date.getYear(yearIndex), date.getMonth(monthIndex)-1, 0);
    return days.getDate();
 })();

var monthIndex=(()=>{
    var month = new Date;
    return month.getMonth();
})();

var yearIndex=(()=>{
    var year = new Date;
    return year.getFullYear();
})();


var prevMonth=(()=>{
    var prev = new Date();
    return prev.getMonth() - 1;
})();

var nextMonth=(()=>{
    var prev = new Date();
    return prev.getMonth() + 1;
})();

/* var date = {
    daysCounter:(() => {
        var date=new Date();
        var days=new Date(date.getYear(), date.getMonth() + 1, 0);
        return days.getDate();
     })(),
    monthIndex:(() => {
        var month = new Date;
        return month.getMonth();
    })(),
    yearIndex: (() => {
        var year = new Date;
        return year.getFullYear();
    })()
}
 */
