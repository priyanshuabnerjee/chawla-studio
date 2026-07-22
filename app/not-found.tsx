export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1A120D] px-6 text-center">
      <div>
        <h1 className="text-7xl font-bold text-[#D4AF37]">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mt-6 text-gray-300">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}