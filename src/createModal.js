var body=document.body,
        day=document.getElementsByClassName('day'),
        infoBlock=document.getElementById('infoBlock'),
        tittleOfDay=document.createElement('span'),
        buttonAdd=document.createElement('input'),
        getBlockToDo=document.getElementById('todo'),
        before=document.getElementById('names-of-days'),
        inputTask=document.getElementById('inputTask'),
        placeOfTasks = document.getElementById('todo'),
        createdTasks=document.createElement('div'),
        op=document.createElement('span');
    
    var options={
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    tittleOfDay.id='infoOfDay';
    createdTasks.id='listOfTask';
    tittleOfDay.innerHTML='No Date Selected';

    placeOfTasks.appendChild(buttonAdd);
    placeOfTasks.appendChild(createdTasks);
    body.insertBefore(tittleOfDay,before);

    buttonAdd.setAttribute('type','button');
    buttonAdd.setAttribute('value','+');
    buttonAdd.id='addTask';
    
    var listOsTasks=document.getElementById('listOfTask')
    var dataInput=document.getElementById('addTask');
    var currDay;
    var innerTasks=[];
    function refresh(){
        [].forEach.call(day,function(el,item){
            el.addEventListener('click', function (event) {
                event.preventDefault();
                tittleOfDay.innerHTML='';
                inputTask.value='';
                //listOsTasks.innerHTML='';
                innerTasks.splice(0,innerTasks.length);
                createdTasks.innerHTML='';
                var date = new Date(yearIndex,monthIndex,item+1);
                currDay=this;
                

                tittleOfDay.innerHTML=date.toLocaleString("ru", options);

                getBlockToDo.style.display = 'block';
                
                for (let i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i) == 0) {
                        localStorage.setItem(tittleOfDay.innerHTML, '');
                    }     
                    if (localStorage.key(i) == tittleOfDay.innerHTML) {
                        
                        var arr=localStorage.getItem(tittleOfDay.innerHTML).split(',');
                        console.log(arr);
                        
                       
                        for (let i = 0; i < arr.length; i++) { 
                            var pLocal = document.createElement('p');
                            var spanLocal = document.createElement('span');
                            spanLocal.innerHTML = '-';
                            spanLocal.className = 'remove';
                            pLocal.className = 'todoToDo';
                            pLocal.innerHTML = arr[i];
                            listOsTasks.appendChild(pLocal);
                            pLocal.appendChild(spanLocal);
                            var tittleIntoDay=document.createElement('span');
                            tittleIntoDay.className='tittleInDay';
                            tittleIntoDay.innerHTML=arr[i];
                            currDay.appendChild(tittleIntoDay);
                        }
                        removeItem(minus);
                    }          
                }

                window.onbeforeunload = function() {
                    localStorage.clear();
                    return "Данные не сохранены. Точно перейти?";
                };
            });
    
        });
    }
    refresh();

    function handleListener(){
        inputTask.addEventListener('keyup',function(event){
            event.preventDefault();
            if(event.keyCode==13){
                if (inputTask != null && inputTask.value.length == 0 ) {
                    alert('Введите данные.');
                    return false;
                }
                if (inputTask.value.length > 30 ) {
                    alert('Длина ввода превышает допустимое значение.');
                    return false;
                }
                
                var tittleOfTask=document.createElement('p');
                tittleOfTask.className='bounceIn';

                var spanLocal = document.createElement('span');
                spanLocal.innerHTML = '-';
                spanLocal.className = 'remove';
                tittleOfTask.innerHTML=inputTask.value;
                tittleOfTask.appendChild(spanLocal);


                //МИРИК СТИЛИЗУЙ ЭТОТ tittleIntoDay как и таски в правой колонке
                
                var tittleIntoDay=document.createElement('span');
                tittleIntoDay.className='tittleInDay';
                tittleIntoDay.innerHTML=inputTask.value;


                var today = new Date(yearIndex,monthIndex, currDay.id);
                console.log(today.toLocaleString("ru", options));
                var dday=new Date();

                if(parseInt(tittleOfDay.innerHTML) > dday.getDate()){
                    currDay.style.backgroundColor='rgba(0, 128, 0, 0.7)';
                }else if(parseInt(tittleOfDay.innerHTML) == dday.getDate()){
                    currDay.style.backgroundColor='rgb(255, 200, 80)';
                }
                else{
                    currDay.style.backgroundColor='rgba(255, 0, 0, 0.7)';
                }


                var tiDay=document.getElementsByClassName('tittleInDay');

                if(tiDay.length>=3){
                    currDay.style.overflowY='scroll';
                }

                innerTasks.push(inputTask.value);

                playSound();
                
                currDay.appendChild(tittleIntoDay);
                listOsTasks.appendChild(tittleOfTask);
                removeItem(minus)
                inputTask.value = '';
            }  
        });
        dataInput.addEventListener('click',function(event){
            event.preventDefault();
            var keyOfTask=tittleOfDay.innerHTML;//ключ
            
            localStorage[keyOfTask]=innerTasks;
            //window.location.reload();
            var arr=localStorage.getItem(tittleOfDay.innerHTML).split(',');
            console.log(arr);
            arr.concat(innerTasks);
            localStorage[tittleOfDay.innerHTML] = arr;
            //clearPromArr(arr);
            //
        });
    }
    handleListener();

    function playSound(){   
        document.getElementById('sound').play();
    }


    var minus=document.getElementsByClassName('remove');

    const hasClass = (el, test) => el.classList.contains(test);

    function removeItem(minus){
        [].forEach.call(minus,function(el){
            el.addEventListener('click', function (event) {
                if (hasClass(event.target, "remove")) {
                    event.target.parentNode.remove();
                  }
            });
        });
    }
    

    $(document).on('click', '.day', 
        function () {
            $('.day').removeClass('colorOfDay'); 
            $(this).addClass('colorOfDay');
    });