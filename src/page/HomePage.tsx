import { Footer, Header } from "@/components/shared/index.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import { AboutUs } from "@/sections/AboutUs.tsx";
import { Collaboration } from "@/sections/Collaboration.tsx";
import { Main } from "@/sections/Main.tsx";
import { OurPortfolio } from "@/sections/OurPortfolio.tsx";
import { OurServices } from "@/sections/OurServices.tsx";
import { Testmonia } from "@/sections/Testmonia.tsx";

export const HomePage = () => {
   const isMobile = useMediaQuery({ width: 768 });
   return (
      <>
         <Header />
         <Main isMobile={Boolean(isMobile)} />
         <AboutUs isMobile={Boolean(isMobile)} />
         <OurServices isMobile={Boolean(isMobile)} />
         <OurPortfolio isMobile={Boolean(isMobile)} />
         <Testmonia isMobile={Boolean(isMobile)} />
         <Collaboration isMobile={Boolean(isMobile)} />
         <Footer />
      </>
   );
};
