var customerName = "Alliance Jesse";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    const tmHeader = document.getElementById("tm-header")
    tmHeader.textContent = customerName;

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

    const introHeader = document.getElementById("introheader")
    introHeader.textContent = customerName;

};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    const colorClass = document.getElementsByClassName('.tm-white-rect')
    // colorClass.forEach((element) => (element.className = 'tm-blue-rect'))
};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let socialLinks = document.getElementById("social-links")
    socialLinks.style.visibility = "hidden";
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
const introP1 = document.querySelector('#intropara1')
introP1.textContent = 'Alliance was founded in 1931 by Albert Daniels'

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
const introP2 = document.querySelector('#intropara2')

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
const aboutP1 = document.querySelector('#aboutpara1')

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
const aboutP2 = document.querySelector('#aboutpara2')

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
const addressPara = document.querySelector('#addresspara')

}; 



