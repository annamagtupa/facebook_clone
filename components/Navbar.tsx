import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#", label: "Help" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
];

const Navbar = () => {
  return (
    <header className="border-b border-gray-300 bg-white">
      <div className="mx-auto flex w-full max-w-[980px] items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.svg.png"
            alt="Logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-md object-contain"
          />
          
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-gray-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
