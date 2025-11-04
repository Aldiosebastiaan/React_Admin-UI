import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      <div className="w-full max-w-sm px-6">
        <div className="flex justify-center items-center font-poppins tracking-wide text-primary text-4xl">
          <span className="font-bold">FINE</span>bank
          <span className="font-bold">.IO</span>
        </div>

        <div className="mt-14">
          <form action="">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="hello@example.com"
                className="text-sm rounded-md w-full bg-special-mainBg border border-gray-200 text-gray-700 py-2 px-3 focus:border-gray-400 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="text-sm rounded-md w-full bg-special-mainBg border border-gray-200 text-gray-700 py-2 px-3 focus:border-gray-400 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="status"
                name="status"
                className="h-4 w-4 accent-primary"
              />
              <label htmlFor="status" className="text-sm text-gray-600 ml-2">
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              className="rounded-md text-sm bg-primary w-full text-white py-3"
            >
              Login
            </button>
          </form>
        </div>

        <div className="my-8 relative flex items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <div className="px-3 bg-special-mainBg text-xs text-gray-400">
            or sign in with
          </div>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div>
          <button
            type="button"
            className="flex items-center justify-center rounded-md text-sm w-full bg-white border border-gray-200 text-gray-700 py-3 shadow-sm"
          >
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M9.827 24c0-1.524.253-2.986.705-4.357L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.262 2.41 10.388l7.904-6.05C10.08 26.973 9.827 25.517 9.827 24z"
                fill="#FBBC05"
              />
              <path
                d="M23.714 10.133c3.31 0 6.3 1.173 8.65 3.1L39.2 6.4C35.035 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.91 6.04c1.822-5.53 7.017-9.51 13.18-9.51z"
                fill="#EB4335"
              />
              <path
                d="M23.714 37.867c-6.163 0-11.358-3.98-13.18-9.51l-7.91 6.04C6.445 42.156 14.427 47.467 23.714 47.467c5.73 0 11.202-1.966 15.31-5.85l-7.508-5.8C29.4 37.14 26.732 37.867 23.714 37.867z"
                fill="#34A853"
              />
              <path
                d="M46.145 24c0-1.387-.214-2.88-.635-4.267H23.714v9.067h12.604c-.53 3.09-2.245 5.467-4.7 7.013l7.508 5.8C43.34 37.613 46.145 31.649 46.145 24z"
                fill="#4285F4"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#" className="text-primary text-sm font-bold">
            Create an account
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;