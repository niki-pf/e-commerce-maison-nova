import Link from "next/link";
import { login } from "./actions";

const LoginPage = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <div className=" my-8 max-w-[300px] flex flex-col gap-3 text-center">
        <h2 className="text-4xl font-bold">Logga in</h2>
        <p className="">
          Ange din emailadress och lösenord för att få access till ditt konto
          och tjänster.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-[400px] px-6 py-10 bg-[#f5f4f7] rounded-2xl shadow-xl">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="py-3 px-6 bg-white rounded-full shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            {/* <label htmlFor="password">Lösenord:</label> */}
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Lösenord"
              className="py-3 px-6 bg-white rounded-full shadow-lg"
            />
          </div>
          {/* <div className="flex gap-3"> */}
          <button
            formAction={login}
            className="px-3 py-2 mt-6 bg-amber-200 rounded-full font-semibold cursor-pointer"
          >
            Log in
          </button>
        </form>
        <p className="text-center">
          Har du inget konto?{" "}
          <Link href="/signup">
            <span className="font-semibold">Skapa konto här</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
