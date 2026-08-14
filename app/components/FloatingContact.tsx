export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/918603195242?text=Hi%20Chintu%20Chawla%20Photography,%20I%20have%20a%20photography%20query%20and%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Chintu Chawla Photography on WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-105"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-7 w-7"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.31.18 11.86c0 2.09.55 4.13 1.59 5.93L.08 24l6.36-1.67a11.85 11.85 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.18-1.24-6.17-3.39-8.41ZM12.05 21.75h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.87 9.87 0 0 1-1.51-5.23C2.15 6.42 6.58 2 12.04 2c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.91 6.99c0 5.46-4.44 9.86-9.89 9.86Zm5.41-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.76-1.68-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>

        <span className="hidden font-medium text-white md:block">
          Chat with Us
        </span>
      </a>
    </div>
  );
}