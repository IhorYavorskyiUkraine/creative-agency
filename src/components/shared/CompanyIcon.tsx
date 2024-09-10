interface Props {
   logo: React.ReactNode;
}

export const CompanyIcon: React.FC<Props> = ({ logo }) => {
   return (
      <div className="0 flex size-9 items-center justify-center rounded-full bg-customWhite md:size-10">
         {logo}
      </div>
   );
};
