window.onload = function(){ 

document.getElementById('sites__container').onclick = function visibleForm(params) {

    alert("hello function work");

    var element = document.getElementById('new-here');

    var toggleVisibility = function(element) {
        if(element.style.display=='block'){
            element.style.display='none';
        } else {
            element.style.display='block';
        }
    };

}



}
