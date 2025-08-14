"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HotkeyContact() {
  const router = useRouter();
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

        // Always navigate to the contact page
        const currentPath = window.location.pathname;
        if (currentPath !== "/contact") {
          router.push("/contact");
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
