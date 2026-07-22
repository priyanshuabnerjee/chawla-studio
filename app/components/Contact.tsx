export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0f0f0f] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#D4AF37]">
            Contact Us
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Let's Capture Your Story
          </h2>

          <p className="mx-auto max-w-2xl text-gray-400">
            We'd love to be a part of your special day. Reach out to discuss
            your wedding, pre-wedding, engagement, or event photography.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
                Phone
              </h3>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
                Email
              </h3>
              <p>hello@chawlastudio.com</p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
                Location
              </h3>
              <p>Civil Lines, New Delhi, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 outline-none focus:border-[#D4AF37]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 outline-none focus:border-[#D4AF37]"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your event..."
              className="w-full rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 outline-none focus:border-[#D4AF37]"
            />

            <button
              className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}