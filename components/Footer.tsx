import Link from "next/link";

const languageLinks = [
  "English (US)",
  "Filipino",
  "Bisaya",
  "Español",
  "日本語",
  "한국어",
  "中文(简体)",
  "More languages...",
];

const footerLinks = [
  "Sign Up",
  "Log In",
  "Messenger",
  "Facebook Lite",
  "Video",
  "Meta Pay",
  "Meta Store",
  "Meta Quest",
  "Ray-Ban Meta",
  "Meta AI",
  "Instagram",
  "Threads",
  "Privacy Policy",
  "Privacy Center",
  "About",
  "Create ad",
  "Create Page",
  "Developers",
  "Careers",
  "Cookies",
  "Ad choices",
  "Terms",
  "Help",
  "Contact Uploading & Non-Users",
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-white">
      <div className="mx-auto w-full max-w-[980px] px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-gray-200 pb-3">
          {languageLinks.map((item) => (
            <Link key={item} href="#" className="transition hover:text-gray-900">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3 leading-6">
          {footerLinks.map((item) => (
            <Link key={item} href="#" className="transition hover:text-gray-900">
              {item}
            </Link>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-500">Meta © 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
