import { Container } from "@/components/shared/Container.tsx";
import { PortfolioItem } from "@/components/shared/PortfolioItem.tsx";
import { Title } from "@/components/shared/Title.tsx";
import { Button } from "@/components/ui/button.tsx";

interface Props {
   isMobile?: Boolean;
}

export const OurPortfolio: React.FC<Props> = ({ isMobile }) => {
   const data = [
      {
         image: "/images/portfolio/1.jpg",
         text: "Design Byte App",
         big: false,
      },
      {
         image: "/images/portfolio/2.jpg",
         text: "Cloud App",
         big: true,
      },
      {
         image: "/images/portfolio/3.jpg",
         text: "Design Furniture App",
         big: false,
      },
   ];

   return (
      <section className="pb-[80px] md:pb-[200px] md:pt-10">
         <Container className="relative">
            <div className="mx-auto mb-8 max-w-[674px] text-center">
               <Title
                  size={isMobile ? "xs" : "sm"}
                  text="Our Portfolio"
                  className="mb-[10px] font-semibold leading-18 md:mb-[20px]"
               />
               <Title
                  size={isMobile ? "sm" : "lg"}
                  text="What do we do"
                  className="md:leading-75 mb-9 font-nunito font-bold leading-33 md:mb-7"
               />
               <p className="mb-1 text-sm leading-24 md:mb-3 md:text-xl md:leading-33 lg:mb-9">
                  all projects that we have already done , proven can help to
                  use more comfortable, then can used by client from our
                  business
               </p>
            </div>
            <div className="mb-12 grid grid-cols-1 items-center justify-between gap-y-[54px] md:grid-cols-1 xl:grid-cols-3">
               {data.map((item, index) => (
                  <PortfolioItem key={index} {...item} />
               ))}
            </div>
            <div className="flex flex-1 justify-center">
               <Button size={isMobile ? "sm" : "default"} variant="transparent">
                  See All Portfolio
               </Button>
            </div>
            <img
               className="absolute right-[-30px] top-[150px] -z-10 hidden rotate-[-20deg] md:block"
               src={"/images/g3.svg"}
               alt={""}
            />
            <img
               className="absolute left-[400px] top-[350px] -z-10 hidden rotate-[-340deg] md:block"
               src={"/images/g3.svg"}
               alt={""}
            />
         </Container>
      </section>
   );
};
