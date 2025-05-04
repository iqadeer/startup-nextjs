import { Button } from "@headlessui/react";
import { ButtonComponentProps } from "@/ui/types";

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  wrapperClass = "w-full px-4",
  buttonClass = "bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark rounded-xs px-9 py-4 text-base font-medium text-white duration-300",

  ...rest
}) => {
  return (
    <div className={wrapperClass}>
      <Button {...rest} className={buttonClass}>
        {children}
      </Button>
    </div>
  );
};

export default ButtonComponent;
