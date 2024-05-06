import Link from "next/link";
export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
        <div className="w-[40rem] h-[25rem]"></div>
        <div className="">
          <div className="text-[#ddd6cb] text-2xl">
            <h1 className="text-[2rem] font-bold font-[Montserrat] tracking-[0.15rem] uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="">test and share from all over the world</p>
          </div>
          <div className="text-[1.5rem] flex gap-4">
            <Link
              href="/community"
              className="inline-block mt-4 py-2 px-4 pl-[0] rounded-[0.5rem] bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-[#ffffff] text-transparent bg-clip-text no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] transition-all ease-linear duration-150 active:bg-gradient-to-r active:from-[#fd4715] active:to-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="transition-all ease-linear duration-150inline-block mt-4 py-2 px-4 rounded-[0.5rem] bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-[#ffffff] font-bold no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]  active:bg-gradient-to-r active:from-[#fd4715] active:to-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] mw-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2 className="block text-[1.5em] font-bold m-[0.83em]">
            How it works
          </h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] mw-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2 className="block text-[1.5em] font-bold m-[0.83em]">
            Why NextLevel Food?
          </h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
