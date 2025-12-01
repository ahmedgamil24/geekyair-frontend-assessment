import { twMerge } from "tailwind-merge";

const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2
      className={twMerge(
        `font-bold text-center
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        leading-snug sm:leading-12 md:leading-[60px] lg:leading-[76px]`,
        className
      )}
    >
      {children}
    </h2>
  );
};

export const CursiveTitle = ({ children, className = "" }) => {
  return (
    <span
      className={twMerge(
                `
        font-secondary font-normal text-secondary text-center
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        leading-snug sm:leading-12 md:leading-[60px] lg:leading-[76px]
        `,
        className
      )}
    >
      {children}
    </span>
  );
};

export default SectionTitle;
