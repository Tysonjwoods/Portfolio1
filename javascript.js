function prepareEventHandlers(){
  document.getElementById("ContactMe").onsubmit=function(){
    if(document.getElementById("email").value== ""){
      document.getElementById("errorMessage").innerHTML="Please Enter a valid Email!";
      return false;
    }else{document.getElementById("errorMessage").innerHTML=" ";
    return true;
  }
};
}
var wordCount = document.getElementsByTagName("P").length;

window.onload=function(){
  prepareEventHandlers();
}