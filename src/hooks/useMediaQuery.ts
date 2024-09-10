import { useEffect, useState } from "react";

const useMediaQuery = ({ width }: { width: number }): boolean => {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= width);
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
   }, [width]);

   return isMobile;
};

export default useMediaQuery;
