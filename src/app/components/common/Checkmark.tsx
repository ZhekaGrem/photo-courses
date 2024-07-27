interface IconProps {
  className?: string;
}

const CheckmarkIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <>
      <svg
        className={`${className} mr-2 mt-1 h-5 w-5 flex-shrink-0`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </>
  );
};

export default CheckmarkIcon;
