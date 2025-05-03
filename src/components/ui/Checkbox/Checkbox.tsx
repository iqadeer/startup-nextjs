import React from "react";
import { CheckboxProps } from "@/ui/types";

const Checkbox: React.FC<CheckboxProps> = ({
  type = "checkbox",
  label = "Subscribe to newsletter",
  id = "checkbox",
  wrapperClassName = "mt-12 w-full px-4 md:w-1/2",
  labelClassName = "text-dark flex items-center space-x-3 text-sm font-medium dark:text-white",
  inputClassName = "border-stroke text-primary focus:ring-primary dark:checked:bg-primary h-8 w-8 rounded bg-[#f8f8f8] focus:ring-2 dark:border-gray-600 dark:bg-[#2C303B]",
  ...rest
}) => {
  return (
    <div className={wrapperClassName}>
      <div className="mb-8">
        <label htmlFor={id} className={labelClassName}>
          <input id={id} type={type} className={inputClassName} {...rest} />
          <span>{label}</span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
