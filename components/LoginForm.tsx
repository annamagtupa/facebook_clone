import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="w-full max-w-[420px] rounded-xl border-[0.5px] border-gray-200 bg-white p-6 shadow-sm">
      <form className="space-y-4">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border-[0.5px] border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Email address or phone number"
        />

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          className="w-full rounded-lg border-[0.5px] border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Password"
        />

        <button
          type="submit"
          className="w-full rounded-full bg-blue-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          Log In
        </button>

        <div className="py-1 text-center">
          <Link href="#" className="text-sm font-medium text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <div className="border-t-[0.5px] border-gray-200 pt-4">
          <button
            type="button"
            className="w-full rounded-full border-[0.5px] border-blue-500 px-4 py-3 text-base font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Create new account
          </button>
        </div>
      </form>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-700">
        <Image src="/icon.svg.png" alt="Meta" width={18} height={18} className="h-4 w-4" />
        <span className="font-medium">Meta</span>
      </div>
    </div>
  );
};

export default LoginForm;
