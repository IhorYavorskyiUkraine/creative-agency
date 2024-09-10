interface Props {
   image: string;
   text: string;
   big?: boolean;
}

export const PortfolioItem: React.FC<Props> = ({ image, text, big }) => {
   return (
      <a
         href="/"
         className={`${big ? "h-[340px] w-[340px] md:h-[400px] md:w-[400px]" : "h-[300px] w-[300px] md:h-[350px] md:w-[350px]"} relative mx-auto rounded-[30px]`}
      >
         <img
            className="absolute h-full w-full rounded-[40px] object-cover"
            src={image}
            alt={""}
         />
         <p className="absolute bottom-6 left-6 z-10 text-2xl font-bold">
            {text}
         </p>
      </a>
   );
};
