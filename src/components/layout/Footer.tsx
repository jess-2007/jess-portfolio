export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-slate-400">
          &copy; {year} Jess. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
