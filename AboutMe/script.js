// ===============================
// MENU TOGGLE
// ===============================
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// =============================== 
// CONTACT FORM VALIDATION 
// =============================== 
 
const contactForm = document.querySelector("#contact-form"); 
 
if (contactForm) { 
 
    contactForm.addEventListener("submit", function(e) { 
        e.preventDefault(); 
 
        let name = 
contactForm.querySelector("input[name='name']").value.trim(); 
        let email = 
contactForm.querySelector("input[name='email']").value.trim(); 
        let message = 
contactForm.querySelector("textarea[name='message']").value.trim(); 
 
        if (name === "") { 
            alert("Full Name is required."); 
            return; 
        } 
 
        if (!validateEmail(email)) { 
            alert("Please enter a valid email address."); 
            return; 
        } 
 
        if (message === "") { 
            alert("Message cannot be empty."); 
            return; 
        } 
 
        alert("Message sent successfully!"); 
        contactForm.reset(); 
    }); 
} 
 
// Email validation function 
function validateEmail(email) { 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    return pattern.test(email); 
} 

// =============================== 
// COMMENT FORM + DYNAMIC COMMENT 
// =============================== 
const commentForm = document.querySelector("#comment-form"); 
if (commentForm) { 
commentForm.addEventListener("submit", function(e) { 
e.preventDefault(); 
let name = 
commentForm.querySelector("input[name='name']").value.trim(); 
let message = 
commentForm.querySelector("textarea[name='message']").value.trim(); 
if (name === "" || message === "") { 
alert("Please fill in all fields."); 
return; 
} 
// Create new comment 
const commentList = document.querySelector(".comment-list"); 
const newComment = document.createElement("div"); 
newComment.classList.add("comment-item"); 
newComment.innerHTML = ` 
<div class="comment-author">${name}</div> 
<div class="comment-text">${message}</div> 
`; 
// Add new comment to the top of the list 
commentList.insertBefore(newComment, commentList.firstChild); 
alert("Comment published successfully!"); 
commentForm.reset(); 
}); 
} 