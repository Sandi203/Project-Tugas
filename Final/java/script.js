

function validateForm(){
    var name = document.forms["form"]["name"];
    var email = document.forms["form"]["email"];
    var gender = document.forms["form"]["Gender"];
    var cs = document.forms["form"]["cs"];
    var msg = document.forms["form"]["msg"];
    

    // validate Name
    if(name.value==""){
        window.alert("Please Insert Your Name");
        return false;
    }
    else if(name.value.length < 5){
        window.alert("Name Too Short");
        return false;
    }
    else if(name.value.length > 20){
        window.alert("Name Too Long");
        return false;
    }

    //Validate Email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value==""){
        window.alert("Please Insert Your Email");
        return false;
    }
    else if(!email.value.match(mailformat)){
        window.alert("Email does not valid");
        return false;
    }

    //Validate Gender
    if(gender.value==""){
        window.alert("Please Choose Your Gender");
        return false;
    }
    
    //Validate Contact Reason
    if(cs.value=="none"){
        window.alert("Please Choose Your Contact Reason");
        return false;
    }

    //Validate Message
    if(msg.value==""){
        window.alert("Please Insert Your Message");
        return false;
    }
    
}

    var slideIndex = 1;
    showDivs(slideIndex);


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
   x[slideIndex-1].style.display = "block";
}


function filter(x){
    if(x == 'All'){
        $('.item').show('1000');
    }
    else{
        $('.item').not('.'+x).hide('1000');
        $('.item').filter('.'+x).show('1000');
    }
    $('.list').filter('.'+x).addClass('active').siblings().removeClass('active');
}