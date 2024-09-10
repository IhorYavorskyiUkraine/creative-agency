interface Props {
   icon: React.ReactNode;
   color: string;
   text: string;
}

export const AboutUsBlock: React.FC<Props> = ({ icon, color, text }) => {
   return (
      <a
         href="/"
         className="shadow-block flex h-[269px] w-[262px] flex-col items-center justify-self-center rounded-[30px] border-[1px] border-customWhite/10 transition hover:scale-110"
      >
         <div
            className={`my-8 flex h-[100px] w-[100px] items-center justify-center rounded-full`}
            style={{ backgroundColor: `#${color}` }}
         >
            {icon}
         </div>
         <p className="leading-34 text-center text-2xl font-bold">{text}</p>
      </a>
   );
};
