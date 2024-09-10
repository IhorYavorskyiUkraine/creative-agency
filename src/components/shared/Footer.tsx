import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Container } from "./Container.tsx";
import { CompanyIcon } from "./CompanyIcon.tsx";

export const Footer: React.FC = () => {
   const footerData = [
      {
         title: "Terms & policies",
         links: [
            { name: "Terms of Service", href: "/" },
            { name: "Privacy Policy", href: "/" },
         ],
      },
      {
         title: "Company",
         links: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/" },
            { name: "Contact Us", href: "/" },
         ],
      },
      {
         title: "Contact",
         links: [
            { name: "+62 893912392190", href: "/" },
            { name: "agecnycr@gmail.com", href: "/" },
         ],
      },
      {
         title: "Location",
         links: [
            { name: "PT Osiris Real Estate Internasional", href: "/" },
            { name: "Jl. KH. Wahid Hasyim Kel No.10D", href: "/" },
            { name: "Jakarta, Indonesia", href: "/" },
            { name: "team@OsirisRealEstate.com", href: "/" },
         ],
      },
   ];

   const companiesData = [
      {
         name: "facebook",
         logo: <Facebook color="black" size={21} />,
         href: "/",
      },
      {
         name: "instagram",
         logo: <Instagram color="black" size={21} />,
         href: "/",
      },
      {
         name: "linkedin",
         logo: <Linkedin color="black" size={21} />,
         href: "/",
      },
      {
         name: "mail",
         logo: <Mail color="black" size={21} />,
         href: "/",
      },
      {
         name: "twitter",
         logo: <Twitter color="black" size={21} />,
         href: "/",
      },
   ];

   return (
      <footer className="mb:pt-[132px] bg-[#383638] pb-[60px] pt-11 md:pb-[33px]">
         <Container className="">
            <div className="md:flex">
               <div className="mb-[80px] flex h-[88px] w-[187px] items-center justify-center rounded-[20px] bg-customWhite md:mb-0 md:mr-[68px]">
                  <img src={"/images/logo.svg"} alt={""} />
                  <div className="text-black">
                     <p className="text-xl font-bold leading-24">Agency</p>
                     <p className="text-base leading-20">Creative</p>
                  </div>
               </div>
               <div className="mb-[90px] flex flex-1 flex-wrap justify-between gap-y-[45px]">
                  {footerData.map((section, index) => (
                     <div key={index}>
                        <h4 className="mb-1 text-xl font-semibold md:text-2xl">
                           {section.title}
                        </h4>
                        <ul>
                           {section.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                 <a
                                    className="text-base font-light md:text-xl"
                                    href={link.href}
                                 >
                                    {link.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative flex justify-center gap-6 pb-6 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:max-w-[600px] after:-translate-x-1/2 after:bg-customWhite md:gap-10">
               {companiesData.map((company, index) => (
                  <CompanyIcon logo={company.logo} />
               ))}
            </div>
            <p className="pt-4 text-center text-base font-light md:text-xl">
               Copyright @ 2022 Agency Creative. All Right Reserved
            </p>
         </Container>
      </footer>
   );
};
