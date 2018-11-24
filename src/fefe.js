var input=document.getElementById('inputTask');

input.addEventListener('keyup',function(e){
    e.preventDefault();
    if(e.keyCode==13){
        console.log(input.value);
        input.value='';
        input.blur();
    }
})