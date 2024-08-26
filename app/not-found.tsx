import notFound from "@/components/svg/notFound.svg";
import Image from "next/image";
import Link from "next/link";
import gradientBg from "@/components/svg/linearGradient.svg";

export default function NotFound() {
  return (
    <div
      className="relative h-[100%] py-2 bg-[#1B1B1B] flex justify-center items-center min-h-screen"
    >

      <div className="z-10 w-[80%] mx-auto pb-5 ">
        <div className="flex gap-10 justify-center items-center flex-col mt-[2rem]">
          <h2 className="text-xl font-outfit font-semibold text-white sm:text-2xl lg:text-4xl">
            404 Page not found
          </h2>
          <Image
            src={notFound}
            className="mx-auto"
            width={150}
            alt="not found"
          />
          <h2 className="text-4xl inline-block text-center font-outfit font-semibold text-white">
            SLOW DOWN
            <br />
            <span className="font-lato text-[16px]">CAMELS CROSSING</span>
          </h2>
        </div>
        <div className="rounded-2xl w-[100%] max-w-[320px] sm:max-w-[100%] mx-auto bg-opacity-60 my-5 p-4 sm:p-8 lg:p-12 font-lato text-2xl text-white text-center bg-gradient-to-r from-opacity-30 to-opacity-5 bg-[#45484E] backdrop-blur-40 sm:w-[50%] ">
          The page you are looking for does not exist.
          <br />
          If you think this is a mistake, please contact us or click the home
          button to go back to the main page.
        </div>
        <div className="mx-auto bg-[#EDB936] z-30 rounded-3xl w-[150px]  p-4 text-[#4B4B4B] text-center">
          <Link href="/homepage">XRPK HOME</Link>
        </div>
      </div>
    </div>
  );
}
