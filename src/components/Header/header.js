import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
const Header = () => {
  return (
    <>
      <MainHeaderBackground />
      <div className="flex ">
        <header className="flex items-center justify-between py-[2rem] px-[1rem] w-full">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#ddd6cb] font-bold text-4xl font-[Montserrat]"
          >
            <Image
              src={logoImage}
              alt="alt"
              priority
              className="w-[5rem] h-[5rem]"
            />
            NEXT LEVEL FOOD
          </Link>
          <nav className="">
            <ul className="flex gap-[1.5rem] m-0 p-0 text-[1.25rem] items-center transition ease-linear duration-150">
              <li className="">
                <Link
                  href="/meals"
                  className="text-[#ddd6cb]  font-bold py-[0.5rem] px-[1rem] border-0 rounded-[0.5rem]   hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:text-transparent bg-clip-text hover:drop-shadow-[0_0_18px_rgba(248,190,42,0.8)] transition-all ease-linear duration-150 active:bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331]"
                >
                  Browse meals
                </Link>
              </li>
              <div className="transition-all ease-linear duration-150">
                <li>
                  <Link
                    href="/community"
                    className="text-[#ddd6cb] font-mons font-bold py-[0.5rem] px-[1rem] border-0 rounded-[0.5rem] hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:text-transparent bg-clip-text hover:drop-shadow-[0_0_18px_rgba(248,190,42,0.8)] transition-all ease-linear duration-150 active:from-[#ff8a05] active:to-[#f9b331]"
                  >
                    Foodie community
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
