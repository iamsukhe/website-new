function classToggle(){
    var items = document.querySelectorAll(".nav");
    // console.log(items);
    // items.forEach(nav => {
    //     nav.classList.toggle("navbarToggle")
    // });
    $(".nav").slideToggle("slow");
}

document.querySelector('.toggle-icon').addEventListener("click" , classToggle)