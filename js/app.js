const menuBtn = document.getElementsByClassName("menu-btn");
const mobileMenu = document.getElementsByClassName("mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-menu-nav-link");
// let spinner = document.getElementsByClassName("spinner")[0];
// let loadingText = document.getElementsByTagName("h3")[0];
const githubButton = document.getElementsByClassName("github-button")[0];
//hides button if href contains "none"
window.onload = () => {
  if (window.location.href.indexOf("https://eliasafuentes.com/index.php/project") > -1) {
    if (githubButton.getAttribute("href").includes("none")) {
      githubButton.style.display = "none";
    }
  }
};
let backToTopBtn = document.getElementsByClassName("backto-top")[0];
let clickedBtn = function () {
  mobileMenu[0].classList.toggle("active");
};

//toggle mobile nav bar
menuBtn[0].addEventListener("click", clickedBtn);

// console.log(menuBtn[0]);

//remove active when clicking on mobile nav link
mobileNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu[0].classList.toggle("active");
  });
});

//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//Show/hide button when scrolled
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

//scroll animation
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Add an event listener to the button
backToTopBtn.addEventListener("click", scrollToTop);

/*----------------------Testimonials--------------------------*/
/*
import { html, render } from "https://unpkg.com/lit-html?module";

var postData = [];
var postImages = [];

var findImageById = function (id) {
  var Image = postImages.filter(item => item.id == id);

  return Image[0].image;
};

axios
  .get("wp-json/wp/v2/testimonials")
  .then(function (response) {
    var postIds = [];
    postData = response.data;
    var featuredImgId = [];
    //loop over all posts get the id of each and push into array
    response.data.map(item => postIds.push(item.id));
    response.data.map(item =>
      featuredImgId.push({
        id: item.id,
        imageId: item.featured_media
      })
    );
    function getImage0() {
      return axios.get("/wp-json/wp/v2/media/" + featuredImgId[0].imageId);
    }

    function getImage1() {
      return axios.get("/wp-json/wp/v2/media/" + featuredImgId[1].imageId);
    }

    function getImage2() {
      return axios.get("/wp-json/wp/v2/media/" + featuredImgId[2].imageId);
    }

    axios
      .all([getImage0(), getImage1(), getImage2()])
      .then(
        axios.spread(function (image0, image1, image2) {
          postImages.push({
            id: postIds[0],
            image: image0.data.source_url
          });
          postImages.push({
            id: postIds[1],
            image: image1.data.source_url
          });
          postImages.push({
            id: postIds[2],
            image: image2.data.source_url
          });
          initApp(response);
          // console.log(postImages);
        })
      )
      .catch(function (error) {
        //handle the error
        console.log(error);
      });
  })
  .catch(function (error) {
    //handle the error
    console.log(error);
  });

var initApp = function (data) {
  let testimonialsData = data.data;

  Array.prototype.swap = function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
  };
  let clickedLeft = function () {
    postData.swap(1, 0);
    render(appTemplate(postData), document.getElementById("testimonials-app"));
  };
  let clickedRight = function () {
    postData.swap(1, 2);
    render(appTemplate(postData), document.getElementById("testimonials-app"));
  };
  function decodeEntities(encodedString) {
    var div = document.createElement("div");
    div.innerHTML = encodedString;
    return div.textContent;
  }
  const appTemplate = data => html`
    <div class="testimonials-container">
      <div class="test-sides test-left" @click=${e => clickedLeft()}>
        <div class="person-img" style="background: url('${findImageById(data[0].id)}');">
          <div class="hover-bg">
            <div class="name">${data[0].fname}</div>
          </div>
        </div>
      </div>
      <div class="test-center">
        <div class="header">
          <div class="user-img" style="background: url('${findImageById(data[1].id)}')"></div>
          <div class="info">
            <h4>${data[1].fname}</h4>
            <span>${data[1].usertitle}</span>
          </div>
        </div>
        <p>${decodeEntities(data[1].content.rendered)}</p>
      </div>
      <div class="test-sides test-right" @click=${e => clickedRight()}>
        <div class="person-img" style="background: url('${findImageById(data[2].id)}')">
          <div class="hover-bg">
            <div class="name">${data[2].fname}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // appTemplate.onload = pageLoad();

  // removes spinner animation once content is loadead
  // function pageLoad() {
  //   spinner.style.display = "none";
  //   loadingText.style.display = "none";
  // }
  // render(appTemplate(postData), document.getElementById("testimonials-app"));
};
*/
