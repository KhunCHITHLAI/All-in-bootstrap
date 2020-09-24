function clickme()
{
    var first=document.getElementById("text1").value
    var last=document.getElementById("text2").value
    document.getElementById("result").innerHTML="My Name is"+first+last;
    alert("My Name is"+first+last);

    
}


function changebgcolor()
{
    var color=document.getElementById("color");
var body=document.getElementById("body");

body.style.background=color.value;

}
