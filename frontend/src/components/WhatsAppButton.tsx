export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9476933255"
      aria-label="Chat on WhatsApp"
      className="whatsapp-fab fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-pill border border-whatsapp/25 bg-whatsapp/90 px-4 py-2.5 text-[13px] font-medium text-white shadow-[0_6px_20px_-6px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-300 hover:scale-105"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.19c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.25-4.77-4.14-4.91-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.65.5.26.6.87 2.02.95 2.17.08.15.13.32.03.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.29.15.46.13.64-.05.18-.19.75-.87.95-1.17.2-.29.39-.24.65-.14.26.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
