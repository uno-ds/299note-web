import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-mid text-sm uppercase tracking-widest mb-4">404</p>
      <h1 className="text-h1 text-charcoal mb-6">Page not found</h1>
      <Link
        href="/"
        className="inline-flex items-center rounded-pill bg-pink text-white font-bold px-7 py-3 shadow-button hover:bg-pink-deep transition-all duration-normal ease-standard"
      >
        Back to home
      </Link>
    </main>
  );
}
