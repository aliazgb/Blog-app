import Link from "next/link";
import { JSX } from "react";
import { IconType } from "react-icons";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

type SocialLink = {
  href: string;
  icon: IconType;
};

const socialLinks: SocialLink[] = [
  { href: "https://facebook.com", icon: FaFacebookF },
  { href: "https://twitter.com", icon: FaTwitter },
  { href: "https://google.com", icon: FaGoogle },
  { href: "https://www.instagram.com/ali.azgb22/", icon: FaInstagram },
  {
    href: "https://www.linkedin.com/in/ali-azarkashb-196297337/",
    icon: FaLinkedinIn,
  },
  { href: "https://github.com/aliazgb", icon: FaGithub },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 text-center text-white  mt-40">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center gap-6">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 transition-colors"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 p-4 text-center text-white">
        © 2025 Copyright:
        <Link
          href="https://tw-elements.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" "
        >
          Ali AZGB
        </Link>
      </div>
    </footer>
  );
}
