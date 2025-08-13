import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0b0b0c]">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Page not found</h1>
        <p className="text-white/70">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-sm underline text-white/80 hover:text-white"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
