import { Container } from "@/components/shared/Container.tsx";
import { ReviewItem } from "@/components/shared/ReviewItem.tsx";
import { Title } from "@/components/shared/Title.tsx";
import { getReviews } from "@/lib/getReviews.ts";
import { useEffect, useState } from "react";

interface Props {
   isMobile: Boolean;
}

export const Testmonia: React.FC<Props> = ({ isMobile }) => {
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      try {
         getReviews().then(setReviews);
      } catch (error) {
         console.log(error);
      }
   }, []);

   const generateRandomNumber = () => {
      return Math.floor(Math.random() * 3);
   };

   const num = generateRandomNumber();

   return (
      <section className="py-[70px]">
         <Container className="relative">
            <div className="text-center">
               <Title
                  size={isMobile ? "xs" : "sm"}
                  text="Testimonial"
                  className="mb-[10px] font-semibold leading-18 md:mb-[20px]"
               />
               <Title
                  size={isMobile ? "sm" : "lg"}
                  text="People Talk about us"
                  className="md:leading-75 mb-9 font-nunito font-bold leading-33 md:mb-7"
               />
            </div>
            <div className="flex flex-wrap justify-center gap-12">
               {isMobile ? (
                  <ReviewItem
                     key={reviews[num]?.id}
                     name={reviews[num]?.name}
                     text={reviews[num]?.text}
                     image={reviews[num]?.image}
                     place={reviews[num]?.place}
                  />
               ) : (
                  reviews.map((review, index) => (
                     <ReviewItem key={index} {...review} />
                  ))
               )}
            </div>
            <img
               className="absolute left-[150px] top-0 -z-10 hidden rotate-[-360deg] md:block"
               src={"/images/g5.svg"}
               alt={""}
            />
            <img
               className="absolute bottom-[-40px] right-0 -z-10 hidden rotate-[-180deg] md:block"
               src={"/images/g5.svg"}
               alt={""}
            />
         </Container>
      </section>
   );
};
