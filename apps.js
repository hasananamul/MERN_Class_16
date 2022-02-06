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
let accordion_headder = document.querySelectorAll(".accordion_headder");
accordion_headder.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    if (item.classList.contains("active")) {
      this.nextElementSibling.style.height =
        this.nextElementSibling.scrollHeight + "px";
      this.nextElementSibling.style.visibility = "visible";
      item.nextElementSibling.style.opacity = "1";
    } else {
      this.nextElementSibling.style.height = "0px";
      this.nextElementSibling.style.visibility = "hidden";
      item.nextElementSibling.style.opacity = "0";
    }
    accordion_headder.forEach((item) => {
      if (item !== this) {
        item.classList.remove("active");
        item.nextElementSibling.style.visibility = "hidden";
        item.nextElementSibling.style.height = "0px";
        item.nextElementSibling.style.opacity = "0";
      }
    });
  });
});
