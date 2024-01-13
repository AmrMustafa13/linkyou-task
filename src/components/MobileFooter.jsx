import React from "react";
import footerLogo from "../assets/footer-logo.png";
import appStoreImg from "../assets/horizon-app-store.png";
import facebookIcon from "../assets/socials/facebook.svg";
import instagramIcon from "../assets/socials/insta.svg";
import tiktokIcon from "../assets/socials/tiktok.svg";
import youtubeIcon from "../assets/socials/youtube.svg";
import FooterAccordion from "./FooterAccordion";

const MobileFooter = () => {
  return (
    <footer
      className="bg-primary text-[#FFFAEC] mt-8 pt-4 pb-8 sm:hidden"
      style={{
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      <div className="container flex  flex-col gap-2">
        <div className="flex flex-col items-center">
          <img src={footerLogo} alt="footer-logo" className="w-[100px]" />
        </div>
        <ul className="flex justify-between items-center gap-[22px]">
          <li>
            <img
              src={facebookIcon}
              alt="facebook-icon"
              className="w-[36px] h-[36px]"
            />
          </li>
          <li>
            <img
              src={instagramIcon}
              alt="instagram-icon"
              className="w-[36px] h-[36px]"
            />
          </li>
          <li>
            <img
              src={tiktokIcon}
              alt="tiktok-icon"
              className="w-[36px] h-[36px]"
            />
          </li>
          <li>
            <img
              src={youtubeIcon}
              alt="youtube-icon"
              className="w-[36px] h-[36px]"
            />
          </li>
        </ul>
        <FooterAccordion title="تواصل معنا" items={["المساعدة", "الاتصال"]} />
        <FooterAccordion title="الدول" items={["كندا", "اليمن"]} />
        <FooterAccordion
          title="تو سوق"
          items={["شروط الاستخدام", "سياسة الخصوصية", "تحميل التطبيق"]}
        />
        <FooterAccordion title="نبذة عنا" items={["من نحن", "رؤيتنا"]} />
        <div className="flex flex-col items-center mt-4">
          <img src={appStoreImg} alt="footer-app-store" />
        </div>
        <span className="text-xs font-[100] text-white/50 text-center">
          تم التطوير من قبل لينك يو
        </span>
      </div>
    </footer>
  );
};

export default MobileFooter;
