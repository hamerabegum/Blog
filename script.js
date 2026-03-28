function searchBlog(){
let input=document.getElementById("search").value.toLowerCase();
let blog=document.getElementsByClassName("blog");

for(let i=0;i<blog.length;i++){
let title=blog[i].getElementsByTagName("h2")[0];

if(title.innerHTML.toLowerCase().indexOf(input)>-1){
blog[i].style.display="block";
}else{
blog[i].style.display="none";
}
}
}