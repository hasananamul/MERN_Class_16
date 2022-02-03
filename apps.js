/**
 * Get element function
 * @param {} element
 * @returns
 */

function $(element) {
  return document.querySelector(element);
}

/**
 * Modal section scripting
 */
$(".banner_button button").addEventListener("click", () => {
  $(".hasan_modals").classList.add("active");
  $(".hasan_modal_content").classList.add("active");
});
$(".hasan_modals").addEventListener("click", function (e) {
  if (e.target == this) {
    $(".hasan_modals").classList.remove("active");
  }
});

/**
 * Modal alert scripting
 */

$(".modals_header .close_btn").addEventListener("click", () => {
  $(".hasan_modal_alert").classList.add("active");
});
$(".hasan_modal_alert .alert_close_btn").addEventListener("click", () => {
  $(".hasan_modal_alert").classList.remove("active");
});
$(".hasan_modal_alert .modal_alert_button .keep").addEventListener(
  "click",
  () => {
    $(".hasan_modal_alert").classList.remove("active");
  }
);
$(".hasan_modal_alert .modal_alert_button .discard").addEventListener(
  "click",
  () => {
    $(".hasan_modal_alert").classList.remove("active");
    $(".hasan_modals").classList.remove("active");
  }
);

/**
 * Accordion section scripting
 */

let accordion_content = document.querySelectorAll(".accordion_content");

let accordion_headder = document.querySelectorAll(".accordion_headder");

accordion_headder.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
    accordion_headder.forEach((item) => {
      if (item !== this) {
        item.classList.remove("active");
        item.nextElementSibling.classList.remove("active");
      }
    });
  });
});

// let accordion_content = document.querySelectorAll(".accordion_content");

// let accordion_section = document.querySelector(".accordion_section");
// let accordion_headder = document.querySelectorAll(".accordion_headder");
// for (let x = 0; x < accordion_headder.length; x++) {
//   accordion_headder[x].addEventListener("click", function () {
//     for (let i = 0; i < accordion_section.children.length; i++) {
//       accordion_section.children[i].firstElementChild.classList.remove(
//         "active"
//       );
//       accordion_section.children[i].lastElementChild.classList.remove("active");
//     }
//     this.classList.toggle("active");
//     if (this.classList.contains("active")) {
//       this.nextElementSibling.classList.add("active");
//     } else {
//       this.nextElementSibling.classList.remove("active");
//     }
//   });
// }
