/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable image component that displays an image with a fallback placeholder in case the image fails to load or is unavailable.
 * It accepts the image source, alternative text, and additional CSS classes as props.
 * The component is designed to be responsive and visually consistent with the overall portfolio design.
 */

import { useState } from "react";

export default function ImageWithFallback({ src, alt, className = "" }) {
  const [imageError, setImageError] = useState(false);

  // Show a placeholder if there is no image or the image fails to load
  if (!src || imageError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-[#f7f4f0] via-[#ead8d4] to-[#b68f86] ${className}`}
      >
        <div className="flex h-full items-center justify-center text-sm font-medium text-[#77716b]">
          Image unavailable
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setImageError(true)}
      className={`object-cover ${className}`}
    />
  );
}
