import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/skills", label: "skills" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
  { href: "/testimonials", label: "testimonials" },
  { href: "/certificates", label: "certificates" },
  { href: "/dashboard", label: "dashboard" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-8 text-sm text-[#8b949e] max-w-4xl mx-auto">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-[#82aaff] transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
