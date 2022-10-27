function checkCookies() {
  let text = "";

  if (navigator.cookieEnabled == true) {
    text = "This website uses Cookies to enable us serve you better and help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. Will you like to continue allowing the Cookies?";
  } else {
     text = "Cookies are not enabled.";
  }
  document.getElementById("demo").innerHTML = text;
}


let cookiesbtn = document.getElementById("cookiesBtn");
cookiesbtn.addEventListener("click", closeit);
let cookiescontainer = document.getElementById("cookies");

function closeit() {
  cookiescontainer.innerHTML = null;
  cookiescontainer.style.width = "0";
  cookiescontainer.style.padding = "0";
}


function rmv() {
  document.getElementById("alert").style.width = "0";
  document.getElementById("alert").innerHTML = null;
  document.getElementById("nav1").style.height = "40px"
}



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





function dropDown() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




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
    if (document.getElementById("countBtn").innerHTML == 0) {
      document.getElementById("under-btn").style.display = "none";
      document.getElementById("cart").style.display = "block";
    }else if (count > 0) {
      count-=1;
      document.getElementById("under-btn").style.display = "block";
    }else {
            
    }
    amount.innerHTML = parseInt(amount.innerHTML) - price;
    document.getElementById("basket").innerHTML = count;
    document.getElementById("countBtn").innerHTML = count;  

    if (amount.innerHTML < 0) {
      return amount.innerHTML = 0;      
    }
}




function disappear() {
  document.getElementById("basketContent").innerText = "";
  const para = document.createElement("p");
  const myBas = document.getElementById("basketContent");
  const yhea = document.getElementById("deletes");
  yhea.style.display = "flex";
  para.appendChild(yhea);
  myBas.appendChild(para);
  let remove = document.getElementById("cart");
  remove.style.display = "none";
  if (remove.style.display = "none") {
        document.getElementById("under-btn").style.display = "block";
  }else{
    document.getElementById("under-btn").style.display = "none";
  }
}




function degenerate() {
    let div = document.getElementById("deletes");
    div.remove();
    if (document.getElementById("basketContent").innerText == "") {
      document.getElementById("basketContent").innerText = "It looks like you've not added any item here";
    }else {
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
    btnText.style.backgroundColor = "blue"
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    btnText.style.backgroundColor = "purple"
  }
}






function filter() {
  let x = document.getElementById("brands");
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







