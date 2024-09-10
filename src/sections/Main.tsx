import { Container } from "@/components/shared/Container.tsx";
import { ImageBlock } from "@/components/shared/index.ts";
import { Title } from "@/components/shared/Title.tsx";
import { Button } from "@/components/ui/button.tsx";

interface Props {
   isMobile: Boolean;
}

export const Main: React.FC<Props> = ({ isMobile }) => {
   return (
      <section className="overflow-hidden py-[70px] font-nunito">
         <Container>
            <div className="mx-auto max-w-[768px] text-center font-extrabold">
               <Title
                  text="Make your dream business goal come true"
                  className="mb-5 md:mb-6"
                  size={isMobile ? "md" : "xl"}
               />
               <p className="mb-5 text-sm font-regular leading-24 opacity-60 md:mb-8 md:text-xl">
                  when you need us for improve your business, <br /> then come
                  with us to help your business have reach it, you just sit and
                  feel that goal.
               </p>
               <Button
                  variant="white"
                  size={isMobile ? "sm" : "default"}
                  className="mb-[62px] shadow-whiteBtn md:mb-[100px]"
               >
                  <span className="leading-button">Start Project</span>
               </Button>
            </div>
            <ImageBlock isMobile={Boolean(isMobile)} />
         </Container>
         <div className="absolute right-0 top-[150px] -z-10 overflow-hidden md:top-[350px]">
            <img
               className="h-[16px] w-[16px] translate-x-[50%] md:h-[31px] md:w-[31px]"
               src={"/images/bgImages/red.svg"}
               alt={"1"}
            />
         </div>
         <div className="absolute left-0 top-[450px] -z-10 overflow-hidden md:left-[300px] md:top-[500px]">
            <img
               className="h-[16px] w-[16px] translate-x-[-20%] md:h-[31px] md:w-[31px] md:translate-x-0"
               src={"/images/bgImages/blue.svg"}
               alt={"3"}
            />
         </div>
         <div className="absolute -z-10 hidden overflow-hidden md:right-[300px] md:top-[550px] md:block">
            <img
               className="h-[16px] w-[16px] translate-x-[-20%] md:h-[31px] md:w-[31px] md:translate-x-0"
               src={"/images/bgImages/blue.svg"}
               alt={"4"}
            />
         </div>
         <div className="absolute -z-10 hidden md:left-[530px] md:top-[890px] md:block">
            <img
               className="h-[16px] w-[16px] md:h-[31px] md:w-[31px]"
               src={"/images/bgImages/red.svg"}
               alt={"2"}
            />
         </div>
      </section>
   );
};
