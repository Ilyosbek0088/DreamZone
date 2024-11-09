let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  // loginForm.classList.remove('active');
}

// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//   // loginForm.classList.toggle('active');
//   navbar.classList.remove('active');
// }

window.onscroll = () =>{
  navbar.classList.remove('active');
  // loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const sendMessage = (event) => {
  event.preventDefault();
  const Name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const message = document.getElementById('message').value;
  console.log(Name);
  const my_text = ` %0A👤Name: ${Name}  %0A📬Email: ${email}  %0A📞Number:${number}  %0A✉Message:${message}`;
  const chat_id = -1002497938815; // Make sure this chat ID is correct
  const token = '7958432129:AAE-PGBnmynyKnY39ehLaqDfXskeBcNeXjk'; // Replace with your actual token
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
  
  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
  // Clear input field
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('number').value = "";
  document.getElementById('message').value = "";
};
