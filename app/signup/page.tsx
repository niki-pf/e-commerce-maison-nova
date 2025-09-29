import Link from "next/link";
import { signup } from "./actions";
const SignUpPage = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <div className=" my-8 max-w-[300px] flex flex-col gap-3 text-center">
        <h2 className="text-4xl font-bold">Skapa konto</h2>
        <p className="">
          Skapa ett nytt konto och få åtkomst till flera tjänster och njut av
          allt kul du kan göra på sidan.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-[400px] px-6 py-10 bg-[#f5f4f7] rounded-2xl shadow-xl">
        <form className=" flex flex-col gap-6">
          <div className="flex flex-col">
            {/* <label htmlFor="username">Användarnamn:</label> */}
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Användarnamn"
              className="py-3 px-6 bg-white rounded-full shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            {/* <label htmlFor="fullname">Namn:</label> */}
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              placeholder="Namn"
              className="py-3 px-6 bg-white rounded-full shadow-lg"
            />
          </div>
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
            formAction={signup}
            className="px-3 py-2 mt-6 bg-amber-200 rounded-full font-semibold cursor-pointer"
          >
            Skapa konto
          </button>
        </form>
        <p className="text-center">
          Har du redan ett konto?{" "}
          <Link href="/login">
            <span className="font-semibold">Logga in här</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
