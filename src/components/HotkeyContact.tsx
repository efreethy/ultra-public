"use client";

import { useEffect } from "react";

export default function HotkeyContact() {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement as HTMLElement | null;
      const isEditable =
        !!activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.isContentEditable);

      if (event.metaKey && event.key.toLowerCase() === "d") {
        if (isEditable) return;
        event.preventDefault();
        event.stopPropagation();

        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.location.hash = "contact";
        }

        // Attempt to focus the first field to encourage message writing
        window.setTimeout(() => {
          const nameInput = document.getElementById(
            "name"
          ) as HTMLInputElement | null;
          nameInput?.focus({ preventScroll: true });
        }, 350);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return null;
}
