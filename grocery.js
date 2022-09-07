/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
}*/






/*const dropdowns = Array.from(document.getElementsByClassName("dropdown-content"));
const dropdownButtons = Array.from(document.getElementsByClassName('dropbtn'));

let currentDropdown = 0;
let dropdownAmount = 0;

dropdownButtons.forEach(function(dropdownBtn, index) {
  dropdownBtn.addEventListener('click', function() {
    dropdowns[index].classList.toggle('show');
    currentDropdown = index;
    dropdownAmount++;
  });
});

window.addEventListener('click', function(event) {
  if (event.target !== dropdownButtons[currentDropdown]) {
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
      dropdownAmount = 0;
    }
  } else if (dropdownAmount > 1) {
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show') && i !== currentDropdown) {
        openDropdown.classList.remove('show');
      }
    }
    dropdownAmount = 1;
  }
});*/



const dropdowns = Array.from(document.getElementsByClassName("dropdown-content"));
const dropdownButtons = Array.from(document.getElementsByClassName('dropbtn'));

let currentDropdown = 0;
let dropdownAmount = 0;

dropdownButtons.forEach(function(dropdownBtn, index) {
  dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdowns[index].classList.toggle('show');
    currentDropdown = index;
    dropdownAmount++;
    
    if (dropdownAmount > 1) { // closes other dropdowns if more than one is open
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show') && i !== currentDropdown) {
          openDropdown.classList.remove('show');
        }
      }
      dropdownAmount = 1;
    }
  });
});

window.addEventListener('click', function(event) {
  for (let i = 0; i < dropdowns.length; i++) {
    const openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
    dropdownAmount = 0;
  }
});





let input = document.getElementById("search");
//get list of value
let list = document.querySelectorAll(".list li");

//function search on the list.
function search (){
  for(let i = 0; i < list.length; i += 1){
   //check if the element contains the value of the input
   if(list[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
     list[i].style.display = "block";
   }else{
     list[i].style.display = "none";
   }
  }
}

//to the change run search.
input.addEventListener('input', search);





let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}



let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("all-product");
    if (n > slides.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2-1].style.display = "block";
}





let counter = 0;
function addFav() {
  let increase = document.getElementById("fav");
  counter+= 1;
  increase.innerHTML = counter;
}

  let count = 0;
  const amount = document.getElementById("totalAmount");
  const price = parseInt(document.getElementById("price").innerHTML);
 function increment() {
    count+=1;
    document.getElementById("basket").innerHTML = count;
    document.getElementById("countBtn").innerHTML = count;
    amount.innerHTML = parseInt(amount.innerHTML) + price;
}
    
function decrement() {
    amount.innerHTML = parseInt(amount.innerHTML) - price;
    document.getElementById("basket").innerHTML = count;
    document.getElementById("countBtn").innerHTML = count;
    if (document.getElementById("countBtn").innerHTML == 0) {
      document.getElementById("under-btn").style.display = "none";
      document.getElementById("cart").style.display = "block";
    }else if (count > 0) {
      count-=1;
      document.getElementById("under-btn").style.display = "block";
    }else {
      
    }
}

function disappear() {
  let remove = document.getElementById("cart");
  remove.style.display = "none";
  if (remove.style.display = "none") {
        document.getElementById("under-btn").style.display = "block";
  }else{
    document.getElementById("under-btn").style.display = "none";
  }
}







function myFunction2() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}







function dropDown() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function filter() {
  var x = document.getElementById("brands");
  if (x.className === "grocery-category") {
    x.className += " responsive1";
  } else {
    x.className = "grocery-category";
  }
}








function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("grocery-category-img");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();






function changeArea() {
  document.getElementById("myDropdownArea").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-area')) {
    let dropdowns = document.getElementsByClassName("dropdown-content-area");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


  
function pasteIt() {
  let m = document.getElementById("choosed");
  let n = document.getElementById("preSelect");
  let o = document.getElementById("trick");;
  o.innerHTML = n.innerHTML
  document.getElementById("faCheck").style.display = "inline-flex";
  }

function pasteIt2() {
  
  }

function myShow() {
  let m = document.getElementById("choosed");
  let n = document.getElementById("preSelect");
  let o = document.getElementById("trick");
  let q = document.getElementById("choosed2");
    m.innerHTML = o.innerHTML;
    q.innerHTML = o.innerHTML;
    document.getElementById("yourArea2").style.display = "flex";
  }



function rmv() {
  document.getElementById("alert").style.width = "0";
  document.getElementById("alert").innerHTML = null;
  document.getElementById("nav1").style.height = "40px"
}


function myBasket() {
  document.getElementById("myDropdownBasket").classList.toggle("shows");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdiv')) {
    let dropdownbasket = document.getElementsByClassName("dropdown-content-basket");
    let i;
    for (i = 0; i < dropdownbasket.length; i++) {
      let openDropdownbasket = dropdownbasket[i];
      if (openDropdownbasket.classList.contains('shows')) {
        openDropdownbasket.classList.remove('shows');
      }
    }
  }
}