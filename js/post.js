//toggle Save and Edit Button
function edit(){
    document.getElementsByClassName("editButton")[0].style.display="none";
    document.getElementsByClassName("saveButton")[0].style.display="block";
    var text= document.getElementById("blogBody");
    text.contentEditable="true";
    text.style.border="1px solid #d48383";
    var title= document.getElementById("spanTitle");
    title.style.border="2px solid rgb(235, 113, 133)";
    title.contentEditable="true";
    
}
function save(){
    document.getElementsByClassName("saveButton")[0].style.display="none";
    document.getElementsByClassName("editButton")[0].style.display="block";
    
}
var count=0;
function like(){
    document.getElementsByClassName("likeButton")[0].innerHTML= "<i class='fa fa-thumbs-up'></i>&nbsp;" + "Liked!";
       count=count+1;
       if(count==1){
            document.getElementById("likePara").innerHTML= count + " Person likes this!";
       }
       else{
            document.getElementById("likePara").innerHTML= count + " Person likes this!";
       }
}
function allComment(){
    var commentSection = document.getElementById("commentBox").value;
    if(commentSection == ""){
        alert("Do write some comment!");
    } 
    else{
            var template = document.createElement("div");
            var text = document.createTextNode(commentSection);
            template.appendChild(text);
            template.setAttribute("class","newDiv");
            document.getElementById("commentSection").prepend(template);
        
    }
}
