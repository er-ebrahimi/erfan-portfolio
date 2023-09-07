import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterLine
} from "react-icons/ri";
import {HiOutlineMail} from "react-icons/hi";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {/* <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiFacebookBoxLine />
      </Link>
      <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiPinterestLine />
      </Link> */}
      {/* <Link href={"erfan.es1381@gmail.com"} className="hover:text-accent transiotn-all duration-300">
        <HiOutlineMail />
      </Link> */}
      <Link href={"https://github.com/er-ebrahimi"} className="hover:text-accent transiotn-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://linkedin.com/in/linkedin.com/in/erfan-ebrahimi-46ba79220"} className="hover:text-accent transiotn-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={"https://twitter.com/erfanesebrahimi"} className="hover:text-accent transiotn-all duration-300">
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Socials;
