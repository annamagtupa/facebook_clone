import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] text-gray-900">
      <Navbar />

      <main className="px-4 py-8 md:px-6">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col overflow-hidden border border-gray-300 bg-white md:flex-row">
          <div className="flex w-full items-center justify-center border-b border-gray-300 px-6 py-10 md:w-1/2 md:border-b-0 md:border-r">
            <HeroSection />
          </div>

          <div className="flex w-full items-center justify-center px-6 py-10 md:w-1/2">
            <LoginForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
