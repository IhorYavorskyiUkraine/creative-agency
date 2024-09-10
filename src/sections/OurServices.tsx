import { AboutUsBlock } from "@/components/shared/AboutUsBlock.tsx";
import { Container } from "@/components/shared/Container.tsx";
import { Title } from "@/components/shared/Title.tsx";
import { ArrowRight, Monitor, PenTool, Settings, Tv } from "lucide-react";

interface Props {
   isMobile: Boolean;
}

export const OurServices: React.FC<Props> = ({ isMobile }) => {
   const blocks = [
      {
         icon: <Monitor color="black" size={42} />,
         color: "FFF",
         text: "Social Media Management",
      },
      {
         icon: <Settings color="black" size={38} />,
         color: "FF0000",
         text: "Search Engine Opimization",
      },
      {
         icon: <PenTool color="black" size={42} />,
         color: "8EEA77",
         text: "Design",
      },
      {
         icon: <Tv color="black" size={42} />,
         color: "FFB31A",
         text: "Ads",
      },
   ];

   return (
      <section className="py-10">
         <Container className="grid grid-cols-1 justify-between md:items-center xl:grid-cols-[minmax(350px,_520px)_minmax(300px,_565px)]">
            <div className="mb-7 text-center md:mb-10 xl:text-start">
               <Title
                  size={isMobile ? "xs" : "sm"}
                  text="Our Services"
                  className="mb-[10px] font-semibold leading-18 md:mb-[20px]"
               />

               <Title
                  size={isMobile ? "sm" : "lg"}
                  text="Perfect and Fast Movement"
                  className="md:leading-75 mb-8 font-nunito font-bold leading-33 md:mb-4"
               />
               <p className="mb-1 text-sm leading-24 md:mb-3 md:text-xl md:leading-33 lg:mb-9">
                  We move with make a Creative Strategy for help your business
                  goal, we help to improve your income by a services we have.
                  make your content look interesting and make people look for
                  your business
               </p>
               <a href="/" className="flex flex-1 md:justify-end">
                  <div className="group flex items-center justify-center">
                     <span className="md:leading-34 text-sm font-bold leading-18 md:text-xl">
                        Read more
                     </span>
                     <ArrowRight className="md ml-3 h-6 w-5 transition group-hover:translate-x-1 md:w-6" />
                  </div>
               </a>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 justify-center gap-10 md:grid-cols-[262px_262px] md:grid-rows-[269px_269px]">
               {blocks.map((block, index) => (
                  <AboutUsBlock
                     key={index}
                     color={block.color}
                     icon={block.icon}
                     text={block.text}
                  />
               ))}
            </div>
         </Container>
      </section>
   );
};
