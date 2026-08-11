import { MessageCircle } from "lucide-react";
import { company, whatsappMessage } from "@/lib/content";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      aria-label="Chat with WorkBridge Consulting NG on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-lift transition hover:-translate-y-1 hover:bg-[#0F7A6E] sm:bottom-7 sm:right-7"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
