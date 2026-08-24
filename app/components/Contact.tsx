"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim();

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    const enquiry = `New Photography Enquiry

Name: ${name}
Email: ${email}

Event Details:
${message}`;

    const encodedMessage = encodeURIComponent(enquiry);

    // WhatsApp enquiry only
    const whatsappUrl = `https://wa.me/918603195242?text=${encodedMessage}`;

    // Open WhatsApp from the customer's click
    window.open(whatsappUrl, "_blank");

    // Clear the form
    form.reset();
  };

  return (
    <section
      id="contact"
      className="bg-[#0f0f0f] px-6 pt-8 pb-24 text-white"
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
            {/* Phone */}
            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
                Phone
              </h3>

              <div className="space-y-2">
                <a
                  href="tel:+918603195242"
                  className="block transition hover:text-[#D4AF37]"
                >
                  +91 86031 95242
                </a>

                <a
                  href="tel:+919199427356"
                  className="block transition hover:text-[#D4AF37]"
                >
                  +91 91994 27356
                </a>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
                Email
              </h3>

              <a
                href="mailto:info@chintuchawlaphotography.in"
                className="transition hover:text-[#D4AF37]"
              >
                info@chintuchawlaphotography.in
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-[#D4AF37]">
                Follow Us
              </h3>

              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/chintuchawlaphotography/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-700 text-white transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-7 w-7"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/newstudiochawla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-700 text-white transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#D4AF37]">
                Location
              </h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Reliance+Smart,+Sakchi,+Jamshedpur,+Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#D4AF37]"
              >
                Reliance Smart, Sakchi, Jamshedpur, Jharkhand
              </a>
            </div>

            {/* Google Maps Preview */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Reliance+Smart,+Sakchi,+Jamshedpur,+Jharkhand"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-gray-700"
            >
              <img
                src="/map-preview.png"
                alt="Chawla Studio Location"
                className="h-52 w-full object-cover"
              />

              <div className="absolute inset-0 flex items-end bg-transparent">
                <div className="w-full bg-black/60 px-4 py-3 text-sm text-white opacity-0 transition group-hover:opacity-100">
                  Open in Google Maps →
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 outline-none focus:border-[#D4AF37]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 outline-none focus:border-[#D4AF37]"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about your event..."
              className="w-full rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 outline-none focus:border-[#D4AF37]"
            />

            <button
              type="submit"
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