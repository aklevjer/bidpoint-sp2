export class ImageGallery {
  constructor(images) {
    this.currentIndex = 0;
    this.images = images;
    this.image = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.currentSpan = null;
  }

  updateUI() {
    const { url, alt } = this.images[this.currentIndex];
    this.image.src = url;
    this.image.alt = alt;
    this.currentSpan.textContent = `${this.currentIndex + 1}/${this.images.length}`;
  }

  nextImage() {
    this.currentIndex++;
    if (this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.updateUI();
  }

  prevImage() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.updateUI();
  }

  setupUI() {
    this.image = document.querySelector(".listing-image");
    this.prevBtn = document.querySelector(".prev-btn");
    this.nextBtn = document.querySelector(".next-btn");
    this.currentSpan = document.querySelector(".current-img-label");

    if (!this.image || !this.prevBtn || !this.nextBtn || !this.currentSpan) {
      throw new Error("Required DOM elements are missing");
    }
  }

  setListeners() {
    this.prevBtn.addEventListener("click", () => this.prevImage());
    this.nextBtn.addEventListener("click", () => this.nextImage());
  }

  setup() {
    this.setupUI();
    this.setListeners();
  }
}
