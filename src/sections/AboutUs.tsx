import { Container } from "@/components/shared/Container.tsx";
import { Title } from "@/components/shared/Title.tsx";
import { Button } from "@/components/ui/button.tsx";
import { CirclePlay } from "lucide-react";

interface Props {
   isMobile: Boolean;
}

export const AboutUs: React.FC<Props> = ({ isMobile }) => {
   return (
      <section className="pb-12">
         <Container>
            <div className="mb-9 text-center">
               <Title
                  size={isMobile ? "xs" : "sm"}
                  text="About Us"
                  className="mb-[10px] font-semibold leading-18 md:mb-[20px]"
               />
               <Title
                  size={isMobile ? "sm" : "lg"}
                  text="Our Teammate"
                  className="md:leading-75 font-nunito font-bold leading-33"
               />
            </div>
            <div className="grid grid-cols-1 gap-[66px] md:row-start-2 md:grid-cols-[minmax(400px,_565px)_minmax(300px,_610px)] md:items-center">
               <div className="items-center text-sm font-regular leading-24 md:col-start-2 md:text-xl md:leading-33">
                  <p className="mb-[10px]">
                     We move with make a Creative Strategy for help your
                     business goal, we help to improve your income by a services
                     we have. make your content look interesting and make people
                     look for your business
                  </p>
                  <p className="mb-9">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                     neque tempor at ut auctor maecenas,Lorem ipsum d
                  </p>
                  <div className="flex justify-center gap-9">
                     <Button size={isMobile ? "sm" : "default"} variant="white">
                        About Us
                     </Button>
                     <Button
                        size={isMobile ? "sm" : "default"}
                        variant="transparent"
                     >
                        <CirclePlay className="mr-3 h-4 w-4 md:h-5 md:w-5" />
                        Our Story
                     </Button>
                  </div>
               </div>
               <div className="relative mx-auto h-[402px] max-w-[565px] md:row-start-1 md:flex md:items-center">
                  <img
                     className="absolute left-[-30px] top-[-20px] -z-10 hidden md:block"
                     src={"/images/g4.svg"}
                     alt={""}
                  />
                  <img
                     className="mx-auto h-auto w-full max-w-full rounded-[12px] md:max-w-lg md:rounded-[24px] lg:max-w-xl xl:max-w-2xl"
                     src={"/images/aboutUs/bg.jpg"}
                     alt={""}
                  />
                  <img
                     className="absolute left-0 top-[-20px] -z-10 md:bottom-[-14px] md:left-auto md:right-[-30px] md:top-auto"
                     src={"/images/g3.svg"}
                     alt={""}
                  />
               </div>
            </div>
         </Container>
      </section>
   );
};
