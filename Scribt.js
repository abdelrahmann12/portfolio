
 
const activeclass  = function (ele) {ele.classList.toggle("active");};


let sidebar = document.querySelector("[data-sidebar]");
let sidebtn = document.querySelector("[data-sidebar-btn]");


sidebar.addEventListener("click" , function () {
    activeclass(sidebar) ;
});

// side bar button

// const selectbtn = document.getElementsByClassName("select-value");
// const selectbox = document.getElementsByClassName("select-btn");
// const selectlist = document.getElementsByClassName("select-list");

// selectbtn.addEventListener("click" , function(){
//     selectbox.classList.add("active");
// });





// =================================================== 

// const navlinks = document.querySelector("[data-nav]");

const navlink = document.getElementsByClassName("nav-link");
const pages   = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i=0 ; i < navlink.length; i++ ){
    navlink[i].addEventListener("click" , function() {
        for ( let i=0 ; i < pages.length; i++ ){
            if(this.innerHTML.toLowerCase() == pages[i].dataset.page){
                pages[i].classList.add("active");
                navlink[i].classList.add("active");
                window.scrollTo(0,0);
            } else{
                    pages[i].classList.remove("active");
                    navlink[i].classList.remove("active");
                  }
    
            }
    });
};



const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });


// ==================================================

for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
  
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
  
    });
  }

// 
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

