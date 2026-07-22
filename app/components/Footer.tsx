export default function Footer() {
  return (
    <footer className="bg-[#1A120D] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-widest mb-4">
              CHAWLA STUDIO
            </h2>

            <p className="text-gray-400 leading-7">
              Capturing timeless love stories with elegance,
              creativity and emotions that last forever.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Jamshedpur, Jharkhand</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@chawlastudio.com</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          © 2026 Chawla Studio. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}