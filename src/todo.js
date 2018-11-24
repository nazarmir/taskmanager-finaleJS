(function ToDo() {
    var toDoPlace = document.getElementById('infoBlock');
    var inputsDiv = document.createElement('div');
    var input = document.createElement('input');
    inputsDiv.id = 'todo';
    input.id='inputTask';
    input.className = 'bounceIn';
    //input.setAttribute('maxlength', '50');
    input.setAttribute('type', 'text');
    toDoPlace.appendChild(inputsDiv);
    inputsDiv.appendChild(input);
})();