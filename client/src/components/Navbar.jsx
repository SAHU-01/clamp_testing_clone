import RainbowKit from "./RainbowKit";

const Navbar = () => {
  return (
    <div className="w-full flex justify-around p-4 lg:pt-16  sm:pt-20 md:pt-14 pt-28 xl:pt-14">
      <div className="md:flex-[0.5] flex-initial  items-center">
        <a
          href="https://test.joinclamp.com/"
          className="cursor-pointer font-bold text-lg"
        >
          clamp
        </a>
      </div>
      <div>
        <RainbowKit />
      </div>
    </div>
  );
};
export default Navbar;
