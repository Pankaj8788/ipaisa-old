import React, { useState } from "react";
import { MainLogo, RockkpayLogo, gplay } from "../Assets/navbar";
import mainLogo from "../../public/mainLogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Image from "next/image";
import router, { useRouter } from "next/router";

import PDFModal from "./PDFModal";
const Mainfooter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenPrivacy, setIsModalOpenPrivacy] = useState(false);
  const [isModalOpenFAQ, setIsModalOpenFAQ] = useState(false);
  const [isModalOpenRefundPolicy, setIsModalOpenRefundPolicy] = useState(false);
  const pdfFile = "/ipaisTerms.pdf";
  const pdfFilePolicy = "/ipaisaPolicy.pdf";
  const pdfFileFAQ = "/ipaisaFAQ.PDF";
  const pdfFileRefundPolicy = "/ipaisaRefundPolicy.pdf";
  const handleTerms = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handlePolicy = () => {
    setIsModalOpenPrivacy(true);
  };
  const closeModalPolicy = () => {
    setIsModalOpenPrivacy(false);
  };
  const handleFAQ = () => {
    setIsModalOpenFAQ(true);
  };
  const closeModalFAQ = () => {
    setIsModalOpenFAQ(false);
  };
  const handleRefundPolicy = () => {
    setIsModalOpenRefundPolicy(true);
  };
  const closeModalRefundPolicy = () => {
    setIsModalOpenRefundPolicy(false);
  };
  return (
    <section className="w-full bg-[#6633CC]">
      <section className="w-full main-container flex flex-col items-start justify-start gap-6 p-5 !text-white">
        <div className="w-full flex items-center justify-between main-container">
          <Image
            src={mainLogo.src}
            alt=""
            width={90} // Adjust width as needed
            height={90}
            className="w-20 h-20 rounded-full"
          />
          <Image
            src={gplay.src}
            alt="Google Play Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-full flex flex-col items-start justify-start gap-4 main-container">
            <p className="text-lg font-bold text-white">iPaisa</p>
            <p className="text-white font-semibold">
              <b className="font-bold">Address</b>: 2nd Floor, Golden Empire,
              near Croma - Baner, Rajyog Cooperative Housing Society, Veerbhadra
              Nagar, Baner, Pune, Maharashtra 411045
            </p>
            <p className="mt-8"></p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-lg font-bold text-white">Company</p>
            <p
              className="text-white capitalize cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              home
            </p>
            <button
              className="text-white capitalize cursor-pointer"
              onClick={() => {
                router.push("/aboutus2");
              }}
            >
              about us
            </button>
            <button
              className="text-white capitalize cursor-pointer"
              onClick={() => {
                router.push("/services");
              }}
            >
              services
            </button>
            <button
              className="text-white capitalize cursor-pointer"
              onClick={() => {
                router.push("/blog");
              }}
            >
              blog
            </button>
            <button
              className="text-white capitalize cursor-pointer"
              onClick={() => {
                router.push("/contact_us");
              }}
            >
              contact us
            </button>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-lg font-bold text-white">Privacy</p>
            <p
              className="text-white capitalize cursor-pointer"
              onClick={handlePolicy}
            >
              privacy & policy
            </p>
            <p
              className="text-white capitalize cursor-pointer"
              onClick={handleTerms}
            >
              terms & conditions
            </p>
            <p
              className="text-white capitalize cursor-pointer"
              onClick={handleRefundPolicy}
            >
              Refund & cancellation Policy
            </p>
            <p
              className="text-white capitalize cursor-pointer ml-1"
              onClick={handleFAQ}
            >
              FAQ
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-lg font-bold text-white">Socials</p>
            <span className="flex gap-2">
              <Link
                href={
                  "https://www.instagram.com/ipaisa07?igsh=bmk2dWhlNDloZzcz"
                }
                target="_blank"
              >
                <InstagramIcon className="cursor-pointer h-10 w-10 !text-red-500 !text-5xl !transition-all !duration-400 !ease-in-out hover:scale-105 active:scale-95" />
              </Link>
              <Link href={"https://edsomfintech.com/"} target="_blank">
                <LinkedInIcon className="cursor-pointer h-10 w-10 !text-5xl !transition-all !duration-400 !ease-in-out hover:scale-105 active:scale-95" />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/ipaisa07?igsh=bmk2dWhlNDloZzcz"
                }
                target="_blank"
              >
                <XIcon className="cursor-pointer h-10 w-10 !text-5xl !transition-all !duration-400 !ease-in-out hover:scale-105 active:scale-95" />
              </Link>
              {/* <Link
                href={"https://www.youtube.com/@edsomfintech"}
                target="_blank"
              >
                <YouTubeIcon className="cursor-pointer h-10 w-10 !text-5xl !transition-all !duration-400 !ease-in-out hover:scale-105 active:scale-95" />
              </Link> */}
            </span>
          </div>
        </div>
        <span className="w-full h-[1px] bg-white"></span>
        <div className="w-full h-12 center">
          <p className="text-white font-bold capitalize">
            All &#169; copyrights are reserved by Edsomfintech{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </section>
      <PDFModal isOpen={isModalOpen} onClose={closeModal} pdfFile={pdfFile} />
      <PDFModal
        isOpen={isModalOpenPrivacy}
        onClose={closeModalPolicy}
        pdfFile={pdfFilePolicy}
      />
      <PDFModal
        isOpen={isModalOpenFAQ}
        onClose={closeModalFAQ}
        pdfFile={pdfFileFAQ}
      />
      <PDFModal
        isOpen={isModalOpenRefundPolicy}
        onClose={closeModalRefundPolicy}
        pdfFile={pdfFileRefundPolicy}
      />
    </section>
  );
};
export default Mainfooter;
