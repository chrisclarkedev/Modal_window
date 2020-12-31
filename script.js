"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  // Event listener when user clicks (X) button
  // Modal goes to hidden
  // Overlay goes to hidden
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  // Event listener when user clicks show modal hidden is removed and modal is shown
  modal.classList.remove("hidden");
  // Event listener when user click show modal hidden is removed and modal overlay is display in background
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// KEYBOARD EVENT (GLOBAL) for "ESC" key
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // If the pressed key is "ESC"
  if (e.key === "Escape") {
    // If modal doesn't contain hidden class then execute the close the modal function
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
