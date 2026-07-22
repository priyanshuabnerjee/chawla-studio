export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50">

      <a
        href="https://wa.me/919876543210?text=Hi%20Chawla%20Studio,%20I'm%20interested%20in%20booking%20a%20wedding%20shoot."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <span className="text-2xl">💬</span>

        <span className="hidden font-medium text-white md:block">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}