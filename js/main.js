const container = document.querySelector('.animation-container');

const pointSize = 20; // حجم النقاط
const spacing = 18; // المسافة بين النقاط
const thickness = 7; // سماكة الحرف (عدد النقاط بجانب بعضها)

const drawThickPoint = (top, left) => {
  // لرسم نقطة ذات سماكة
  for (let i = 0; i < thickness; i++) {
    const div = document.createElement('div');
    div.classList.add('effect');
    div.style.top = `${top + i * pointSize}px`; // محاذاة رأسي
    div.style.right = `${left}px`; // محاذاة أفقي
    container.appendChild(div);
  }
};

// رسم الجزء الرأسي (المائل قليلاً)
for (let i = 0; i < 12; i++) {
  drawThickPoint(i * spacing, i * 10); // زيادة في المحاذاة الأفقية لتحقيق الميل
}

// رسم الجزء الأفقي (أسفل العمود المائل)
for (let i = 0; i < 10; i++) {
  drawThickPoint(12 * spacing, i * spacing + 120); // المحاذاة لتكملة الميل في القاعدة
}
//  /////////////


const hamburgerBtn = document.querySelector('.hamburger-btn');
const navBar = document.querySelector('.nav-bar');
const closeNavBar = document.querySelector('.close-navBar');


hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('show');
});

closeNavBar.addEventListener('click', () => {
  navBar.classList.remove('show');
});


// animated polygens

document.addEventListener("DOMContentLoaded", () => {
  // Select the effect1 container
  const effect1Container = document.querySelector(".animation-effects .effect1");

  // Number of div elements to create
  const numberOfDivs = 28; // Change this number as needed

  // Create and append div elements dynamically
  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    effect1Container.appendChild(div);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the .effect1 container
  const effect1Container = document.querySelector(".animation-effects .effect1");

  // Set the number of div elements to create
  const numberOfDivs = 28; // Adjust based on your requirements

  // Dynamically create div elements and append them
  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "var(--main-color)";
    div.style.width = "4.2px";
    div.style.height = "4.2px";
    div.style.margin = "0 3px 8px";
    div.style.borderRadius = "50%";
    effect1Container.appendChild(div);
  }
});













