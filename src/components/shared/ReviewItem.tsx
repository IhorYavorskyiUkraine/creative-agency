interface Props {
   image?: string;
   name: string;
   place?: string;
   text: string;
}

export const ReviewItem: React.FC<Props> = ({ image, name, place, text }) => {
   return (
      <div className="shadow-reviewItem max-w-[340px] rounded-[20px] bg-[#0B0F15] pb-4 pl-10 pr-5 pt-10">
         <div className="mb-5 flex items-center">
            <img
               className="mr-8 h-[70px] w-[70px] rounded-full"
               src={image}
               alt={""}
            />
            <div>
               <p className="mb-1 mr-1 text-lg font-semibold leading-24">
                  {name}
               </p>
               {place && (
                  <p className="leading-14 text-xs opacity-50">{place}</p>
               )}
            </div>
         </div>
         <p className="text-sm leading-24 opacity-80">"{text}"</p>
      </div>
   );
};
