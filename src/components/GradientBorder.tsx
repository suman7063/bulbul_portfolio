interface HeadingTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?:'large' | 'small' |'extraSmall'|'icon';
  notBackground?:boolean;
  notRounded?:boolean;
  children?: React.ReactNode;
}
const GradientBorder: React.FC<HeadingTextProps> = ({
  children,
  variant='large',
  notBackground=false,
  notRounded,
  ...props
}) => {
  const variantClasses = {
    large: `${notRounded?'rounded':'rounded-full'} bg-linear-gradient p-[1px] w-[400px] h-[400px]`,
    small: `${notRounded?'rounded':'rounded-full'} bg-linear-gradient p-[1px] w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]`,
    extraSmall: `${notRounded?'rounded':'rounded-full'} bg-linear-gradient p-[1px] w-[150px] h-[150px]`,
    icon:`${notRounded?'rounded':'rounded-full'} bg-linear-gradient p-[1px] w-[24px] h-[24px]`
  };
  const finalClasses = `${variantClasses[variant]}`;
  return (
    <div className={finalClasses} >
      <div className={`h-full w-full ${notRounded?'rounded':'rounded-full'} ${notBackground?'bg-custom-purple':'bg-linear-gradient'} flex justify-center items-center`}>
        {children}
      </div>
    </div>
  );
};
export default GradientBorder;
