import { Container } from "@/components/shared/Container.tsx";
import { Title } from "@/components/shared/Title.tsx";
import { Button } from "@/components/ui/button.tsx";

interface Props {
   isMobile?: Boolean;
}

export const Collaboration: React.FC<Props> = ({ isMobile }) => {
   return (
      <section className="py-12">
         <Container className="relative grid grid-cols-1 grid-rows-[auto_auto] justify-between gap-y-11 md:grid-cols-[minmax(350px,_500px)_minmax(400px,_588px)] md:grid-rows-1">
            <div className="row-start-2 text-center md:row-start-1 md:text-start">
               <Title
                  size={isMobile ? "sm" : "lg"}
                  text="Interesting Collaboration With Us?"
                  className="md:leading-75 mb-6 font-nunito font-bold leading-33 md:mb-7"
               />
               <p className="leading-34 md:leading-34 mb-6 text-sm font-regular md:text-xl">
                  Help you to reach your business goal
               </p>
               <Button size={isMobile ? "sm" : "default"} variant="white">
                  Get Started
               </Button>
            </div>
            <div className="relative mx-auto h-[274px] w-[340px] md:h-[379px] md:w-[587px]">
               <div className="absolute bottom-0 left-0 z-10 h-[196px] w-[221px] md:h-[288px] md:w-[325px]">
                  <img
                     className="absolute h-full w-full rounded-[16px] object-cover"
                     src={"/images/collaboration/1.jpg"}
                     alt={""}
                  />
                  <img
                     className="absolute left-[-20px] top-[-40px] -z-10 hidden rotate-[-180deg] md:block"
                     src={"/images/g6.svg"}
                     alt={""}
                  />
               </div>
               <div className="absolute right-0 top-0 h-[180px] w-[177px] md:h-[288px] md:w-[294px]">
                  <img
                     className="absolute h-full w-full rounded-[16px] object-cover"
                     src={"/images/collaboration/2.jpg"}
                     alt={""}
                  />
                  <img
                     className="absolute bottom-[-70px] right-[160px] -z-10 hidden rotate-[-360deg] md:block"
                     src={"/images/g4.svg"}
                     alt={""}
                  />
                  <img
                     className="absolute bottom-[-70px] right-[50px] -z-10 hidden rotate-[-360deg] md:block"
                     src={"/images/g4.svg"}
                     alt={""}
                  />
               </div>
            </div>
         </Container>
      </section>
   );
};
