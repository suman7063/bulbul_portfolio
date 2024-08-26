interface HeadingTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?:'large' | 'small' |'extraSmall'|'icon'|'auto';
  backgroundColor?:string;
  notRounded?:boolean;
  children?: React.ReactNode;
  className?:string;

}
const GradientBorder: React.FC<HeadingTextProps> = ({
  children,
  variant='large',
  backgroundColor='bg-custom-purple',
  notRounded,
  className,
  ...props
}) => {
  const variantClasses = {
    large: `${notRounded?'rounded-lg':'rounded-full'} bg-linear-gradient p-[1px] w-[400px] h-[400px]`,
    auto: `${notRounded?'rounded-lg':'rounded-full'} bg-linear-gradient p-[1px] w-full h-full`,
    small: `${notRounded?'rounded-lg':'rounded-full'} bg-linear-gradient p-[1px] w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]`,
    extraSmall: `${notRounded?'rounded-lg':'rounded-full'} bg-linear-gradient p-[1px] w-[150px] h-[150px]`,
    icon:`${notRounded?'rounded':'rounded-full'} bg-linear-gradient p-[1px] w-[24px] h-[24px] `
  };
  const finalClasses = `${variantClasses[variant]} ${className ?? ''}`;
  return (
    <div className={finalClasses}>
      <div className={`h-full w-full ${notRounded?'rounded-lg':'rounded-full'} ${backgroundColor} flex  items-center justify-center`}>
        {children}
      </div>
    </div>
  );
};
export default GradientBorder;
