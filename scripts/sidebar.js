function toggle() {
    var sidebar = document.getElementById("left-sidebar");
    sidebar.style.visibility = "visible";

    var hamburger = document.getElementById("hamburger");
    hamburger.style.visibility = "hidden";
}


function close_sidebar() {
    var sidebar = document.getElementById("left-sidebar");
    sidebar.style.visibility = "hidden";

    var hamburger = document.getElementById("hamburger");
    hamburger.style.visibility = "visible";

}