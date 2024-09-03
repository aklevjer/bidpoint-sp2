import { DEFAULT_AVATAR_IMG } from "../../../constants/index.mjs";

export function updateListingSeller(listingClone, listingData) {
  const listingSellerLink = listingClone.querySelector(".listing-seller-link");
  const listingSellerAvatar = listingClone.querySelector(
    ".listing-seller-avatar",
  );
  const listingSellerName = listingClone.querySelector(".listing-seller-name");

  const { seller } = listingData;

  // Seller link
  listingSellerLink.href = `/profile/?user=${seller.name}`;

  // Seller avatar
  listingSellerAvatar.src = seller.avatar.url || DEFAULT_AVATAR_IMG;
  listingSellerAvatar.alt = seller.avatar.alt || `Avatar for ${seller.name}`;
  listingSellerAvatar.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_AVATAR_IMG}";`,
  );

  // Seller name
  listingSellerName.textContent = seller.name;
}
