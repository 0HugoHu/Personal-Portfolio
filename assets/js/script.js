'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalDate.innerHTML = this.querySelector("[data-testimonials-date]").innerHTML;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}


const filterFunc = function (selectedValue) {
  // filter variables
  const filterItems = document.querySelectorAll("[data-filter-item]");

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// Sample project data
const projectsData = [
  {
    category: "Android App",
    title: "Harry Potter™ Strategy Game",
    imageSrc: "./assets/images/project-1.jpg",
    link: "https://github.com/0HugoHu/Harry-Potter-Strategy-Game"
  },
  {
    category: "iOS App",
    title: "Duke Digital Asset Management",
    imageSrc: "./assets/images/project-17.jpg",
    link: "https://github.com/0HugoHu/ECE564-AssetMgmt/"
  },
  {
    category: "Web App",
    title: "Customized Chat AI (Frontend + Microservice)",
    imageSrc: "./assets/images/project-16.jpg",
    link: "https://github.com/0HugoHu/IDS706-Fall2023-FinalProject"
  },
  {
    category: "Web App",
    title: "Text Summarizer (Autoscale)",
    imageSrc: "./assets/images/project-15.jpg",
    link: "https://github.com/0HugoHu/HugoHu-Project-4"
  },
  {
    category: "Web App",
    title: "Mini Uber",
    imageSrc: "./assets/images/project-2.jpg",
    link: "https://github.com/0HugoHu/Django-Web-App"
  },
  {
    category: "iOS App",
    title: "Duke People",
    imageSrc: "./assets/images/project-14.jpg",
    link: "https://github.com/0HugoHu/ECE564-HW6"
  },
  {
    category: "Web App",
    title: "Carbon Credit Mall (2020)",
    imageSrc: "./assets/images/project-12.jpg",
    link: "https://github.com/0HugoHu/CarbonCredits-MetroTravel"
  },
  {
    category: "Web App",
    title: "Mini TikTok Server",
    imageSrc: "./assets/images/project-13.jpg",
    link: "https://github.com/0HugoHu/StandAloneTikTok"
  },
  {
    category: "Android App",
    title: "Fragment Time Utilization and Collection Management (2019)",
    imageSrc: "./assets/images/project-4.jpg",
    link: "https://github.com/0HugoHu/MoDengXian"
  },
  {
    category: "Others",
    title: "Battleship Board Game on CMD",
    imageSrc: "./assets/images/project-18.jpg",
    link: "https://github.com/0HugoHu/Battleship-Board-Game"
  },
  {
    category: "Others",
    title: "Circuit Simulation on Windows (2019)",
    imageSrc: "./assets/images/project-5.jpg",
    link: "https://github.com/0HugoHu/ELEC2645-Circuit-Simulation"
  },
  {
    category: "Embedded System",
    title: "Advanced Calculator (2021)",
    imageSrc: "./assets/images/project-6.jpg",
    link: "https://github.com/0HugoHu/ELEC3662-Advanced-Calculator"
  },
  {
    category: "Android App",
    title: "Finger Storm Game (2015)",
    imageSrc: "./assets/images/project-7.jpg",
    link: "https://github.com/0HugoHu/FingerStorm"
  },
  {
    category: "Android App",
    title: "Parking Robot based on 3D LiDAR",
    imageSrc: "./assets/images/project-3.jpg",
    link: "https://github.com/0HugoHu/ELEC3875-Final-Project"
  },
  {
    category: "Android App",
    title: "Shude Focus Forum (2016)",
    imageSrc: "./assets/images/project-8.jpg",
    link: "https://github.com/0HugoHu/SDFocus"
  },
  {
    category: "Embedded System",
    title: "Brave Heart Game (2020)",
    imageSrc: "./assets/images/project-9.jpg",
    link: "https://github.com/0HugoHu/ELEC2645-EmbeddedSystem-BraveHeart"
  },
  {
    category: "Web App",
    title: "Seat Reservation (2019)",
    imageSrc: "./assets/images/project-10.jpg",
    link: "https://github.com/0HugoHu/SeatReservation"
  },
  {
    category: "Web App",
    title: "AI Powered Picture Generator",
    imageSrc: "./assets/images/project-11.jpg",
    link: "https://github.com/0HugoHu/IDS721-Dalle2"
  },
];

const projectList = document.getElementById("project-list");


// Iterate through the project data and generate list items
projectsData.forEach((project) => {
  const listItem = document.createElement("li");
  listItem.className = "project-item active";
  listItem.setAttribute("data-filter-item", "");
  listItem.setAttribute("data-category", project.category.toLowerCase());

  listItem.innerHTML = `
      <a href="${project.link}" target="_blank">
          <figure class="project-img">
              <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src="${project.imageSrc}" alt="${project.category}" loading="lazy">
          </figure>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-category">${project.category}</p>
      </a>
  `;

  projectList.appendChild(listItem);
});



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


const data = [
  {
    src: "./assets/images/photos/Sugar Mountain/DJI_0834.jpg",
    alt: "Sugar Mountain Resort",
    category: "Travel",
    date: "Dec 24, 2023",
    title: "Sugar Mountain Resort",
    text: "Sugar Mountain Resort is a ski area in North Carolina, United States. It has 125 acres of skiable terrain and 21 total trails."
  },
  {
    src: "./assets/images/photos/Cary Chinese New Year/DSCF0378.jpg",
    alt: "Cary Chinese New Year",
    category: "Festival",
    date: "Dec 20, 2023",
    title: "Cary Chinese New Year",
    text: "Every year, the Chinese community in Cary will hold a Chinese New Year celebration, including latern festival and Kung Fu show."
  },
  {
    src: "./assets/images/photos/Great Smoky Mountain/DSCF8748.jpg",
    alt: "Great Smoky Mountain",
    category: "Travel",
    date: "Oct 22, 2023",
    title: "Great Smoky Mountain",
    text: "The name \"Smoky\" comes from the natural fog that often hangs over the range and presents as large smoke plumes from a distance."
  },
  {
    src: "./assets/images/photos/Atlanta Others/Atlanta-MICS-23-10-16-781.jpg",
    alt: "Travel to Georgia and Tennessee",
    category: "Travel",
    date: "Oct 16, 2023",
    title: "Travel to Georgia and Tennessee",
    text: "Georgia is a southeastern U.S. state whose terrain spans coastal beaches, farmland and mountains."
  },
  {
    src: "./assets/images/photos/Atlanta Animals/Atlanta-MICS-23-10-15-603.jpg",
    alt: "Wild Animal Safari - Pine Mountain",
    category: "Travel",
    date: "Oct 15, 2023",
    title: "Wild Animal Safari - Pine Mountain",
    text: "Wild Animal Safari is a drive through animal park. The park is home to more than 550 animals representing 75 species."
  },
  {
    src: "./assets/images/photos/Atlanta Jellyfish/Atlanta-MICS-23-10-14-410.jpg",
    alt: "Georgia Aquarium",
    category: "Travel",
    date: "Oct 14, 2023",
    title: "Georgia Aquarium",
    text: "The Georgia Aquarium houses more than a hundred thousand animals, all of which reside in 10 million US gallons of marine and salt water."
  },
  {
    src: "./assets/images/photos/ECE Retreat/DJI_0811.JPG",
    alt: "ECE Department Retreat",
    category: "Activity",
    date: "Sept 27, 2023",
    title: "ECE Department Retreat",
    text: "This year, the ECE Department Retreat was held at the beautiful coastal city of Wilmington, NC."
  },
  {
    src: "./assets/images/photos/Jordan Lake/DSCF5339.jpg",
    alt: "Jordan Lake",
    category: "Activity",
    date: "Sept 2, 2023",
    title: "Jordan Lake",
    text: "Jordan Lake is a reservoir in New Hope Valley, west of Cary and south of Durham in Chatham County, North Carolina."
  },
  {
    src: "./assets/images/photos/Eno River Farm/Durham-Farm-23-08-12-075.jpg",
    alt: "Eno River Farm",
    category: "Activity",
    date: "Aug 12, 2023",
    title: "Eno River Farm",
    text: "It's time for berries! Eno River Farm is a family-owned and operated farm located in the heart of North Carolina."
  },
  {
    src: "./assets/images/photos/New York Street/NewYork-CPBB-23-06-25-209.jpg",
    alt: "The Street View of New York",
    category: "Travel",
    date: "Aug 4, 2023",
    title: "The Street View of New York",
    text: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean."
  },
  {
    src: "./assets/images/photos/New York Skyview/NewYork-TheMET-23-05-19-191.jpg",
    alt: "The Skylines of New York",
    category: "Travel",
    date: "Aug 4, 2023",
    title: "The Skylines of New York",
    text: "The skyline of New York City is the city's overall structure as it emerges from the line of the horizon."
  },
  {
    src: "./assets/images/photos/Intrepid Museum/DSCF4053.jpg",
    alt: "Intrepid Sea, Air and Space Museum",
    category: "Travel",
    date: "Jul 7, 2023",
    title: "Intrepid Sea, Air and Space Museum",
    text: "The Intrepid Sea, Air & Space Museum is an American military and maritime history museum in New York City."
  },
  {
    src: "./assets/images/photos/Independent Day/DSCF3443.jpg",
    alt: "Independence Day",
    category: "Festival",
    date: "Jul 4, 2023",
    title: "Independence Day",
    text: "Independence Day is a federal holiday in the United States commemorating the Declaration of Independence of the United States."
  },
  {
    src: "./assets/images/photos/Brooklyn Bridge/NewYork-CPBB-23-06-25-013.jpg",
    alt: "Brooklyn Bridge",
    category: "Travel",
    date: "Jun 25, 2023",
    title: "Brooklyn Bridge",
    text: "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City."
  },
  {
    src: "./assets/images/photos/Empire State Building/NewYork-CPBB-23-06-24-002.jpg",
    alt: "Empire State Building",
    category: "Travel",
    date: "Jun 24, 2023",
    title: "Empire State Building",
    text: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City."
  },
  {
    src: "./assets/images/photos/Orchestra/NewYork-CPBB-23-06-21-028.jpg",
    alt: "Hamilton (2020) - Musical",
    category: "Activity",
    date: "Jun 21, 2023",
    title: "Hamilton (2020) - Musical",
    text: "The Hamilton musical is a sung-and-rapped-through musical by Lin-Manuel Miranda. It tells the story of American Founding Father Alexander Hamilton."
  },
  {
    src: "./assets/images/photos/Times Square/DSCF3134.jpg",
    alt: "Times Square",
    category: "Travel",
    date: "June 19, 2023",
    title: "Times Square",
    text: "Times Square is a major commercial intersection, tourist destination, entertainment center in the Midtown Manhattan section of New York City."
  },
  {
    src: "./assets/images/photos/American Museum of Natural History/DSCF1620.jpg",
    alt: "American Museum of Natural History",
    category: "Travel",
    date: "Jun 16, 2023",
    title: "American Museum of Natural History",
    text: "Since 1869, the American Museum of Natural History has been one of the world's preeminent science and research institutions."
  },
  {
    src: "./assets/images/photos/Madame Tussauds/NewYork-TheEdge-23-05-21-220.jpg",
    alt: "Madame Tussauds New York",
    category: "Travel",
    date: "May 21, 2023",
    title: "Madame Tussauds New York",
    text: "Madame Tussauds New York is a wax museum located on 42nd Street close to Times Square in New York City."
  },
  {
    src: "./assets/images/photos/The MET/NewYork-TheMET-23-05-19-189.jpg",
    alt: "The Metropolitan Museum of Art",
    category: "Travel",
    date: "May 19, 2023",
    title: "The Metropolitan Museum of Art",
    text: "The Metropolitan Museum of Art of New York City, colloquially \"the Met\", is the largest art museum in the United States."
  },
  {
    src: "./assets/images/photos/Halloween/Halloween 3.jpg",
    alt: "Halloween 2022",
    category: "Festival",
    date: "Oct 31, 2022",
    title: "Halloween 2022",
    text: "This year I made my own pumpkin lantern. It was a lot of fun!"
  },
  {
    src: "./assets/images/photos/Duke/DUKE Fall 01.jpg",
    alt: "Duke Fall 2022",
    category: "Activity",
    date: "Oct 15, 2022",
    title: "Duke Fall 2022",
    text: "The first fall at Duke University. As the maple leaves turn red, the chapel view becomes more beautiful."
  }

];


const folderMapping = {
  "Duke Fall 2022": "Duke",
  "Halloween 2022": "Halloween",
  "The Metropolitan Museum of Art": "The MET",
  "Madame Tussauds New York": "Madame Tussauds",
  "American Museum of Natural History": "American Museum of Natural History",
  "Times Square": "Times Square",
  "Hamilton (2020) - Musical": "Orchestra",
  "Empire State Building": "Empire State Building",
  "Brooklyn Bridge": "Brooklyn Bridge",
  "Independence Day": "Independent Day",
  "Intrepid Sea, Air and Space Museum": "Intrepid Museum",
  "The Street View of New York": "New York Street",
  "The Skylines of New York": "New York Skyview",
  "Eno River Farm": "Eno River Farm",
  "Jordan Lake": "Jordan Lake",
  "ECE Department Retreat": "ECE Retreat",
  "Georgia Aquarium": "Atlanta Jellyfish",
  "Wild Animal Safari - Pine Mountain": "Atlanta Animals",
  "Travel to Georgia and Tennessee": "Atlanta Others",
  "Great Smoky Mountain": "Great Smoky Mountain",
  "Cary Chinese New Year": "Cary Chinese New Year",
  "Sugar Mountain Resort": "Sugar Mountain",
};

// Get the ul element where the list items will be added
const ul = document.getElementById("photography-list");

// Get the pop-up elements
const popupContainer = document.getElementById("popup-container");
const popupOverlay = document.getElementById("popup-overlay");
const popupContent = document.getElementById("popup-content");
const popupClose = document.getElementById("popup-close");
const popupTitle = document.getElementById("popup-title");
const popupCategory = document.getElementById("popup-category");
const popupDate = document.getElementById("popup-date");
const popupText = document.getElementById("popup-text");
const popupImages = document.getElementById("popup-images");


// Function to open the pop-up with data
function openPopup(item) {
  popupTitle.textContent = item.title;
  popupCategory.textContent = item.category;
  popupDate.textContent = item.date;
  popupText.textContent = item.text;

  // Load images for the current title
  loadImagesForTitle(item.title);

  popupContainer.classList.toggle("active");
  popupOverlay.classList.toggle("active");
}

// Function to close the pop-up
function closePopup() {
  popupContainer.classList.toggle("active");
  popupOverlay.classList.toggle("active");
}


// Loop through the data and generate list items
data.forEach(item => {
  const li = document.createElement("li");
  li.className = "photography-post-item";

  li.innerHTML = `
      <a href="#">
          <figure class="photography-banner-box">
              <img src="${item.src}" alt="${item.alt}" loading="lazy">
          </figure>
          <div class="photography-content">
              <div class="photography-meta">
                  <p class="photography-category">${item.category}</p>
                  <span class="dot"></span>
                  <time datetime="2022-02-23">${item.date}</time>
              </div>
              <h3 class="h3 photography-item-title">${item.title}</h3>
              <p class="photography-text">${item.text}</p>
          </div>
      </a>
  `;

  li.addEventListener("click", () => {
    openPopup(item);
  });

  ul.appendChild(li);
});


// Close pop-up when the close button is clicked
popupClose.addEventListener("click", closePopup);

// Close pop-up when clicking outside the content area
popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    closePopup();
  }
});

const container = document.getElementById("image-list-container");
const enlargeContainer = document.getElementById("enlarge-container");
const enlargeOverlay = document.getElementById("enlarge-overlay");
const modal = document.getElementById("enlarge-modal");
const modalImage = document.getElementById("enlarge-image");
const closeBtn = document.getElementById("enlarge-close");

// Function to open the modal and display the clicked image
function openModal(imageSrc) {
  enlargeContainer.classList.toggle("active");
  enlargeOverlay.classList.toggle("active");
  modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
  enlargeContainer.classList.toggle("active");
  enlargeOverlay.classList.toggle("active");
}


// Event listener for opening the modal when an image is clicked
container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    openModal(e.target.src);
  }
});

// Event listener for closing the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);

// Event listener for closing the modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


async function loadImagesForTitle(title) {
  const folderName = folderMapping[title];


  if (!folderName) {
    console.error("Folder mapping not found for title: " + title);
    return;
  }

  // Clear existing images
  container.innerHTML = "";

  try {
    const response = await fetch(`./assets/images/photos/${folderName}/images.json`);
    const imageUrls = await response.json();

    // Load images from the folder
    for (const imageUrl of imageUrls) {
      const img = document.createElement("img");
      img.src = `./assets/images/photos/${folderName}/${imageUrl}`;
      container.appendChild(img);
    }

  } catch (error) {
    console.error("Error loading images:", error);
  }
}

