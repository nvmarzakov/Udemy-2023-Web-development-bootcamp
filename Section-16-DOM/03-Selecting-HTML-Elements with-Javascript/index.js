// document.querySelector("#list a"); => <a href.....>
// document.querySelector("#list .item");
// document.querySelectorAll("#list .item");  => NodeList(3) [li.item, li.item, li.item] 
document.querySelectorAll("#list .item")[2].style.color = "green";
document.querySelector("li a").style.color = "red";