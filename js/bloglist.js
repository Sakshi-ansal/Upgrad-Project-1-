//To show a confirm box when the user wants to delete the post
function deleteButton(){
    document.getElementById("deleteModal").style.display="none";
    confirm("Are you sure you want to delete this post?");
    document.location.reload() //To refresh the page
}