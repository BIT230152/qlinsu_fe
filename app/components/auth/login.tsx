export default function Login() {
  return (
    <div className="px-4 py-32 bg-white md:px-0">
      <div className="container max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Login
        </h1>
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
