import { useState, useEffect } from "react";

interface Props {
   width: number;
}

function useMediaQuery({ width }): Props {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      setIsMobile(window.innerWidth <= width);
   }, []);

   return isMobile;
}

export default useMediaQuery;
