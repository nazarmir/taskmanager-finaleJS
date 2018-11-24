function setMonthTitle(monthIndex, yearIndex) {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var h = document.createElement('h3');
    var before = document.getElementById('names-of-days');
    h.innerHTML = `${months[monthIndex]} ${yearIndex}`;
    h.id = 'month-tittle';
    document.body.insertBefore(h, before);
}
setMonthTitle(monthIndex, yearIndex);