const tabs = document.querySelectorAll('.tabs input[type="radio"]');
const home = document.querySelector(".Home");
const projects = document.querySelector(".Projects");
const more = document.querySelector(".More");

tabs.forEach((tab) => {
  document.addEventListener("change", () => {
    const checkedTab = document.querySelector(
      '.tabs input[type="radio"]:checked'
      );
      home.style.display = 'none'  
      projects.style.display = 'none'  
      more.style.display = 'none'  
    
    if (checkedTab.id == "radio-1") {
      home.style.display = "grid";
    } else if(checkedTab.id == 'radio-2'){
      projects.style.display = 'grid'
    } else if(checkedTab.id == 'radio-3'){
      more.style.display = 'grid'
    }
  });
});

const checkedTab = document.querySelector('.tabs input[type="radio"]:checked');
if (checkedTab.id == "radio-1") {
  home.style.display = "grid";
} else if(checkedTab.id == 'radio-2'){
  projects.style.display = 'grid'
} else if(checkedTab.id == 'radio-3'){
  more.style.display = 'grid'
}