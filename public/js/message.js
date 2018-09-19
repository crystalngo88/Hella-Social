$(function(){
    
    var interests = JSON.parse(sessionStorage.getItem("interests"));
    
    var buttons = $('button');

    interests.forEach(interest => {
        changeButtonClass(interest);
    })

    


    function changeButtonClass(buttonName){
        for(var i = 0; i < buttons.length; i++){
            if (buttons[i].innerHTML === buttonName) {
                buttons[i].setAttribute("class", "selectedTab");
            }
        }
    }
    

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    

     
})