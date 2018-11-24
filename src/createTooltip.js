class createTooltip{
    constructor() {
        this.taskToolTip = document.createElement('div');
        this.taskToolTip.className = 'tooltip';
    }

    show(target) {
        setTimeout(1000);
        this.taskToolTip.style.display = 'block';
        this.taskToolTip.textContent = localStorage.getItem(target);
        document.body.appendChild(this.taskToolTip);
    }

    hide() {
        this.taskToolTip.style.display = 'none';
    }
}

var tooltip = new createTooltip();
var day = document.getElementsByClassName('day');
[].forEach.call(day,function(el){
    el.addEventListener('mouseover', function (event) {
        event.preventDefault();
        var target = event.target.id; 
        tooltip.show(target);
    }); 
    el.addEventListener('mouseout', function (event) {
        event.preventDefault();
        tooltip.hide();
    });
});