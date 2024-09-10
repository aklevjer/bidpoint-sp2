/**
 * Class representing an image gallery with navigation controls.
 */
export class ImageGallery {
  /**
   * Create an ImageGallery instance.
   *
   * @param {Object[]} images - An array of image objects, each with a "url" and "alt" property.
   */
  constructor(images) {
    this.currentIndex = 0;
    this.images = images;
    this.image = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.currentSpan = null;
  }

  /**
   * Updates the UI to reflect the current image.
   */
  updateUI() {
    const { url, alt } = this.images[this.currentIndex];
    this.image.src = url;
    this.image.alt = alt;
    this.currentSpan.textContent = `${this.currentIndex + 1}/${this.images.length}`;
  }

  /**
   * Displays the next image in the gallery.
   * Loops back to the first image if the end of the gallery is reached.
   */
  nextImage() {
    this.currentIndex++;
    if (this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.updateUI();
  }

  /**
   * Displays the previous image in the gallery.
   * Loops back to the last image if the start of the gallery is reached.
   */
  prevImage() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.updateUI();
  }

  /**
   * Sets up the UI elements for the image gallery.
   *
   * @throws {Error} If any required DOM elements are missing.
   */
  setupUI() {
    this.image = document.querySelector(".listing-image");
    this.prevBtn = document.querySelector(".prev-btn");
    this.nextBtn = document.querySelector(".next-btn");
    this.currentSpan = document.querySelector(".current-img-label");

    if (!this.image || !this.prevBtn || !this.nextBtn || !this.currentSpan) {
      throw new Error("Required DOM elements are missing");
    }
  }

  /**
   * Sets up event listeners for navigation buttons.
   */
  setListeners() {
    this.prevBtn.addEventListener("click", () => this.prevImage());
    this.nextBtn.addEventListener("click", () => this.nextImage());
  }

  /**
   * Initializes the image gallery by setting up the UI and event listeners.
   */
  setup() {
    this.setupUI();
    this.setListeners();
  }
}
