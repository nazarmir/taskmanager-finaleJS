var limit = 24 * 3600 * 1000; // 24 часа
var localStorageInitTime = localStorage.getItem('localStorageInitTime');
if (localStorageInitTime === null) {
    localStorage.setItem('localStorageInitTime', +new Date());
} else if(+new Date() - localStorageInitTime > limit){
    localStorage.clear();
    localStorage.setItem('localStorageInitTime', +new Date());
}