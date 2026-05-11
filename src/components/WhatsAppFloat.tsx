import { MessageCircle } from "lucide-react";

const PHONE = "917218620398";
const MESSAGE = encodeURIComponent(
  "Hi, I'm interested in Mauli Town 36. Please send me the brochure."
);

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] transition hover:scale-110 hover:shadow-2xl md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="white" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366]"></span>
      </span>
    </a>
  );
}