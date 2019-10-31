const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Menu Items
let navItems = document.querySelectorAll("nav a");
navItems.forEach(
  (item, index) => (item.textContent = siteContent.nav[`nav-item-${index + 1}`])
);

//Headline/Slogan area
let cta = document.querySelector(".cta");

cta.querySelector("h1").textContent = siteContent.cta.h1;

cta.querySelector("button").textContent = siteContent.cta.button;

cta.querySelector("#cta-img").src = siteContent.cta["img-src"];

//Main Content
let textContent = document.querySelectorAll(".text-content");
console.log(textContent);

const titles = ["features", "about", "services", "product", "vision"];

textContent.forEach((item, index) => {
  item.querySelector("h4").textContent =
    siteContent["main-content"][`${titles[index]}-h4`];
  item.querySelector("p").textContent =
    siteContent["main-content"][`${titles[index]}-content`];
});

// Middle image
let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Contact
let contact = document.querySelector(".contact");

contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];

const contactInfo = ["address", "phone", "email"];

contact
  .querySelectorAll("p")
  .forEach(
    (item, index) =>
      (item.textContent = siteContent.contact[contactInfo[index]])
  );

// Footer
let footer = document.querySelector("footer");
footer.querySelector("p").textContent = siteContent.footer.copyright;

//Stretch

//Navigation color to green
navItems.forEach(item => {
  item.style.color = "green";
  item.style.fontFamily = "Arial";
  item.style.fontWeight = "bold";
});

//append / prepend
let lambdaLink = document.createElement("a");
let googleLink = document.createElement("a");

googleLink.href = "https://google.com";
googleLink.textContent = "Google";

lambdaLink.href = "https://www.lambdaschool.com";
lambdaLink.textContent = "LambdaSchool";

document.querySelector("nav").prepend(lambdaLink);
document.querySelector("nav").append(googleLink);
