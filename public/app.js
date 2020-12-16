function call(name) {
  return document.querySelector(name);
}
function callAll(name) {
  return document.querySelectorAll(name);
}

let mobileNav = call("#mobileNav"),
  ham = call(".ham"),
  close = call(".close"),
  overlay = call(".overlay");

ham.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  overlay.classList.toggle("show");
});

close.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  overlay.classList.toggle("show");
});

let next = call("#next");
let h1 = call("#h1");
let p = call("#p");
let img1 = call("#img1");

next.addEventListener("click", () => {
  let counter = 1;
  if (counter === 1) {
    h1.innerText = "We are available all across the globe";
    p.textContent = `With stores all over the world, it's easy for you to find furniture for
    your home or place of business. Locally, we’re in most major cities
    throughout the country. Find the branch nearest you using our store
    locator. Any questions? Don't hesitate to contact us today.`;
  }
  if (counter === 2) {
    h1.innerText = "Manufactured with the best materials";
    p.textContent = `Our modern furniture store provide a high level of quality. Our company
    has invested in advanced technology to ensure that every product is made
    as perfect and as consistent as possible. With three decades of experience
    in this industry, we understand what customers want for their home and
    office.`;
  }
});
