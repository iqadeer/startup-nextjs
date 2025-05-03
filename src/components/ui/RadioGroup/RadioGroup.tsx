import React from "react";
import { RadioGroupProps } from "@/ui/types";

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label = "Choose Plan",
  options = [
    { label: "Basic", value: "basic" },
    { label: "Premium", value: "premium" },
  ],
  wrapperClassName = "w-full px-4 md:w-1/2",
  groupClassName = "flex items-center space-x-6",
  labelClassName = "text-dark flex items-center space-x-2 text-sm dark:text-white",
  radioClassName = "text-primary focus:ring-primary h-6 w-6 dark:border-gray-600 dark:bg-[#2C303B]",
  ...rest
}) => {
  return (
    <div className={wrapperClassName}>
      <div className="mb-8">
        {label && (
          <p className="text-dark mb-3 block text-sm font-medium dark:text-white">
            {label}
          </p>
        )}
        <div className={groupClassName}>
          {options.map((option) => (
            <label key={option.value} className={labelClassName}>
              <input
                type="radio"
                name={name}
                value={option.value}
                className={radioClassName}
                {...rest}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;
