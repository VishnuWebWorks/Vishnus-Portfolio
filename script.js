function createBurst() {
    let animContainer = document.querySelector(".animation-container");
    let burst = document.querySelector(".burst");

    burst.style.top = Math.random() * innerHeight + "px";
    burst.style.left = Math.random() * innerWidth + "px";

    let burstClone = burst.cloneNode(true);
    animContainer.appendChild(burstClone);

    setTimeout(() => {
        burstClone.remove();
    }, 2000);
}
setInterval(createBurst, 200);



var box = document.getElementById ("box");

window.addEventListener('hashchange', function () {

    var hash = window.location.hash;

    if (hash == "#about") {
        box.style.transform = "translateX(0)"
    }

});

document.getElementById("reloadImage").addEventListener("click", function () {
    box.style.transform = "translateX(0)"
});






window.onload = function () {
    var tabs = ['Languages', 'Frontend', 'Backend'];
    tabs.forEach(function (tab) {
        document.getElementById(tab).classList.add('active-tab');
    });
}

function setActiveTab(tab) {
    var tabs = ['Languages', 'Frontend', 'Backend'];
    tabs.forEach(function (t) {
        document.getElementById(t).classList.remove('active-tab');
        document.getElementById(t + '-link').classList.remove('active-link');
    });
    document.getElementById(tab).classList.add('active-tab');
    document.getElementById(tab + '-link').classList.add('active-link');
}







const collectionofdata = [
    {
        heding: "Introducing  Do U Know - Your Gateway to Career Excellence-Website",
        content: " Do U Know for a seamless job search experience. Showcase your strengths with a detailed profile and discover opportunities across various industries. Your privacy is safeguarded.",
        images: ["slide1-img1.png", "slide1-img2.png", "slide1-img3.png", "slide1-img4.png"],
        id: "Myproject"
    },
    {
        heding: "Overview of Avengers-Themed Website ",
        content: "The provided HTML code forms an Avengers-themed website with a main page and individual character pages for Iron Man, Hulk, and Thor, each linked to its own CSS file for styling. The pages include images, descriptions, and autoplay audio, offering an immersive experience. The main page features navigation buttons linking to these character pages. The design is responsive and consistent, though minor HTML errors and the use of autoplay could be refined for better user experience.",
        images: ["slide2-img1.png", "slide2-img2.png", "slide2-img3.png", "slide2-img4.png"],

    },
    {
        heding: "Overview of Web-based Game and Login Form Implementation",
        content: "The HTML files set up a login page with a basic layout and a game page with a game area containing a movable character and an animated block. The CSS styles these elements, ensuring the game container and its components are displayed correctly with animations. JavaScript adds interactivity, allowing the character to move left or right with arrow keys or touch controls and detects collisions with the falling block, triggering a game over alert when a collision occurs.",
        images: ["slide3.png", "slide3-img1.png", "slide3-img2.png", "slide3-img3.png"],
       
    },
    {
        heding: "Website Design and Style",
        content: "This HTML and CSS code sets up a personal website for Vishnu, featuring links to his developed games and sample programs. The layout includes a background image and color, with styled buttons for each link. For smaller screens (under 600px), the design adjusts by changing the background image and resizing elements to fit better. Button hover effects, which turn the background black, provide interactive feedback to users.",
        images: ["slide4.png", "slide4-img1.png", "slide4-img2.png", "slide4-img3.png"],
        
    },
    {
        heding: "BMI Calculator React App with Validation ",
        content: "Frontend is react then backend is SQLThis React code creates a BMI calculator application. It uses useState to manage height, weight, BMI value, BMI status, and error messages. Users input height and weight, which are validated as numeric. The calculateBmi function computes BMI and sets the status based on BMI ranges. If inputs are invalid, an error message is displayed. The clearAll function resets all fields. The CSS styles the layout with a centered, responsive design and interactive buttons.",
        images: ["slide5.png"],
      
    },

];


const headings = document.getElementById('boxheading');
const content = document.getElementById('content');
const img_1 = document.getElementById('img1');
const img_2 = document.getElementById('img2');
const img_3 = document.getElementById('img3');
const img_4 = document.getElementById('img4');



function loddata(no) {
    const vieweddata = collectionofdata[no];
    headings.innerHTML = vieweddata.heding;
    content.innerHTML = vieweddata.content;
    img_1.src = vieweddata.images[0];
    img_2.src = vieweddata.images[1];
    img_3.src = vieweddata.images[2];
    img_4.src = vieweddata.images[3];



    var fullImgBox = document.getElementById("fullImgBox")
    fullImgBox.style.display = "flex";
}

function closeFullImg() {
    var fullImgBox = document.getElementById("fullImgBox")
    fullImgBox.style.display = "none";
}







function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Message must be filled out.");
        return false;
    }

    document.getElementById("contactForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    document.getElementById("contactForm").reset();
    return false; 
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}



var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0"
}

function closemenu(){
  sidemenu.style.right = "-200px "
}


const scriptURL = `https://script.google.com/macros/s/AKfycbwFlQMAijWeUkMS43SnJei_nq_iJN0B8cheJH3VcdsrQ_JSx7cBlVhCGWWamJTF16hqLQ/exec`
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})



