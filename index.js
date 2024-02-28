function openImageModal() {
  const galleryModal = new bootstrap.Modal(
    document.getElementById("galleryModal")
  );
  galleryModal.show();
}

document
  .getElementById("scrollUpButton")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
