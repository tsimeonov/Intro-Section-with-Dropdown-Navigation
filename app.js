const featuresLink = document.getElementById("features");
const featuresDropdown = document.querySelector("#featuresDropdown");
const companyLink = document.getElementById("company");
const companyDropdown = document.querySelector("#companyDropdown");
const featuresImg = document.querySelector("#features img");
const companyImg = document.querySelector("#company img");

featuresLink.addEventListener("click", () => {
  featuresDropdown.classList.toggle("active");
  if (featuresDropdown.classList.contains("active")) {
    featuresImg.src = "./images/icon-arrow-up.svg";
  } else {
    featuresImg.src = "./images/icon-arrow-down.svg";
  }
});

companyLink.addEventListener("click", () => {
  companyDropdown.classList.toggle("active");
  if (companyDropdown.classList.contains("active")) {
    companyImg.src = "./images/icon-arrow-up.svg";
  } else {
    companyImg.src = "./images/icon-arrow-down.svg";
  }
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const featureMobile = document.getElementById("featureMobile");
const companyMobile = document.getElementById("companyMobile");
const featuredList = document.getElementById("featuredList");
const companyList = document.getElementById("companyList");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("open");
  document.body.style.backgroundColor = "#979797";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  document.body.style.backgroundColor = "#fff";
});

featureMobile.addEventListener("click", () => {
  featuredList.classList.toggle("open");
});

companyMobile.addEventListener("click", () => {
  companyList.classList.toggle("open");
});
