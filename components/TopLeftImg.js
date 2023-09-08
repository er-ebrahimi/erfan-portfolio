import Image from "next/image";
const TopLeftImg = () => {
  return (
    <div className="absolute left-0 right-0 mix-blend-color-dodge z-0 w-[200px] xl:w-[400px] opacity-50">
      <Image src={"/top-left-img.png"} width={400} height={50} alt=""className="sm:h-[10rem]"/>
    </div>
  );
};

export default TopLeftImg;
