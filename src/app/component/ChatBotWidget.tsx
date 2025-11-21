"use client";
import { useEffect } from "react";

export default function ChatBotWidget() {
  useEffect(() => {
    // Ensure global ID is defined before loading the launcher
    (window as any).CollectId = "5fce35c6b835161b6a2470b8"; // window-scoped [web:2][web:4]
    // Also define a bare global for scripts that read from global scope (optional but safe)
    // @ts-ignore
    (globalThis as any).CollectId = "5fce35c6b835161b6a2470b8"; // bare global [web:4]

    // Avoid duplicate script injection
    if (!document.querySelector('script[src="https://collectcdn.com/launcher.js"]')) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://collectcdn.com/launcher.js"; // current CDN [web:2]

      document.head.appendChild(script);
    }
    

    return () => {
      // Do not remove launcher.js if used app-wide; if this component unmounts, you can skip cleanup.
      // If you must clean up:
      const s = document.querySelector('script[src="https://collectcdn.com/launcher.js"]');
      if (s) s.parentNode?.removeChild(s);
    };
  }, []);

  return null;
}
