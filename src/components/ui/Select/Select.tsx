import React from "react";
import { SelectProps } from "@/uitypes/index";
const Select: React.FC<SelectProps> = ({
  id = "select",
  label = "Select an option",
  options = [
    {
      label: "Select",
      value: "",
      className: "",
    },
    {
      label: "Male",
      value: "male",
      className: "",
    },
    {
      label: "Female",
      value: "female",
      className: "",
    },
  ],
  wrapperClassName = "w-full px-4 md:w-1/2",
  labelClassName = "text-dark mb-3 block text-sm font-medium dark:text-white",
  selectClassName = "border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base font-semibold outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none",
  ...rest
}) => {
  return (
    <div className={wrapperClassName}>
      <div className="relative mb-8">
        {label && (
          <label htmlFor={id} className={labelClassName}>
            {label}
          </label>
        )}
        <select id={id} className={selectClassName} {...rest}>
          {options.map(({ label, value, className = "" }) => (
            <option key={value} value={value} className={className}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
