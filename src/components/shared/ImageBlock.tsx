import useMediaQuery from "@/hooks/useMediaQuery.ts";

interface Props {
   isMobile: Boolean;
}

export const ImageBlock: React.FC<Props> = () => {
   return (
      <div className="relative mx-auto flex justify-center md:max-w-[953px]">
         <img
            className="md:top-none absolute right-0 top-[-20px] -z-10 md:bottom-[-20px] md:left-[300px]"
            src={"/images/g1.svg"}
            alt={""}
         />
         <div className="absolute left-0 top-[-10px] flex h-[53px] w-[99px] md:top-[20px] md:h-[95px] md:w-[175px]">
            <img
               className="absolute z-10 h-full w-full rounded-[17px] object-cover"
               src={"/images/main2.jpg"}
               alt={"image"}
            />
         </div>
         <div className="relative flex h-[224px] w-[330px] items-center justify-center md:h-[501px] md:w-[739px]">
            <img
               src={"/images/main.jpg"}
               className="absolute h-full w-full rounded-[12px] object-cover md:rounded-[50px]"
               alt={"Main Image"}
            />
         </div>
         <div className="absolute bottom-[-10px] right-0 flex h-[80px] w-[80px] md:bottom-[-10px] md:right-[-40px] md:h-[166px] md:w-[166px]">
            <img
               className="absolute z-10 h-full w-full rounded-[17px] object-cover"
               src={"/images/main3.jpg"}
               alt={"image"}
            />
         </div>
         <img
            className="absolute bottom-[-20px] left-0 -z-10 md:left-[300px] md:top-[-20px]"
            src={"/images/g2.svg"}
            alt={""}
         />
      </div>
   );
};
