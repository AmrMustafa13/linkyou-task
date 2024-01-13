import React from "react";
import footerLogo from "../assets/footer-logo.png";
import appStoreImg from "../assets/app-store.png";
import facebookIcon from "../assets/socials/facebook.svg";
import instagramIcon from "../assets/socials/insta.svg";
import tiktokIcon from "../assets/socials/tiktok.svg";
import youtubeIcon from "../assets/socials/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-[#FFFAEC] mt-8 pt-4 pb-8 hidden sm:block">
      <div className="container flex justify-between gap-8">
        <div className="flex flex-col items-center">
          <img src={footerLogo} alt="footer-logo" className="w-[120px]" />
          <img src={appStoreImg} alt="app-store" />
        </div>
        <div>
          <span className="font-bold text-[22px] text-secondary">نبذة عنا</span>
          <ul className="text-[22px] list-disc mr-8">
            <li>من نحن</li>
            <li>رؤيتنا</li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-[22px] text-secondary">تو سوق</span>
          <ul className="text-[22px] list-disc mr-8">
            <li>شروط الاستخدام</li>
            <li>سياسة الخصوصية</li>
            <li>تحميل التطبيق</li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-[22px] text-secondary">الدول</span>
          <ul className="text-[22px] list-disc mr-8">
            <li>كندا</li>
            <li>اليمن</li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-[22px] text-secondary">
            تواصل معنا
          </span>
          <ul className="text-[22px] list-disc mr-8">
            <li>المساعدة</li>
            <li>الاتصال</li>
          </ul>
        </div>
        <ul className="flex flex-col gap-[22px]">
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
      </div>
    </footer>
  );
};

export default Footer;
