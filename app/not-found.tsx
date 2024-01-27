import camelBg from "@/components/svg/camel.png";
import notFound from "@/components/svg/notFound.svg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative">
      <img
        src={camelBg.src}
        className="relative transform scale-x-[-1] right-auto mx-auto left-auto top-20 -z-0"
      />
      <div className="bg-[#EDB936] z-30 rounded-3xl absolute top-12 left-44 w-[100px]  p-4 text-[#4B4B4B] text-center">
        <Link href="/homepage">XRPK HOME</Link>
      </div>
      <div className="absolute top-0 left-0 right-0 z-10 w-[80%] mx-auto ">
        <div className="flex gap-10 justify-center items-center flex-col mt-[20rem]">
          <h2 className="text-4xl font-outfit font-semibold text-white">
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
        <div className="rounded-2xl bg-opacity-60 my-10 p-24 font-lato text-2xl text-white text-center bg-gradient-to-r from-opacity-30 to-opacity-5 bg-[#45484E] backdrop-blur-40">
          The page you are looking for does not exist.
          <br />
          If you think this is a mistake, please contact us or click the home
          button to go back to the main page.
        </div>
      </div>
    </div>
  );
}
