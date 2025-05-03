import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Checkbox from "@/ui/Checkbox/Checkbox";
import Select from "@/ui/Select/Select";
import { SelectOption } from "@/ui/types";
import HeadlessTextField from "../headlessui/Textfield/Textfield";
import { useId } from "react";
import RadioGroupComponent from "@/ui/RadioGroup/RadioGroupComponent";

const Contact = () => {
  const selectOption: SelectOption[] = [
    {
      label: "Select",
      value: "",
      className: "py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    {
      label: "Male",
      value: "male",
      className: "py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    {
      label: "Female",
      value: "female",
      className: "py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-700",
    },
  ];

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Need Help? Open a Ticket
              </h2>
              <p className="text-body-color mb-12 text-base font-medium">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <Select></Select>
                  {/* <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="gender"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Select Gender
                      </label>
                      <select
                        id="gender"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div> */}
                  <Select options={selectOption}></Select>
                  {/* <div className="w-full px-4 md:w-1/2">
                    <div className="relative mb-8">
                      <label
                        htmlFor="gender"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Modified select
                      </label>
                      <select
                        id="gender"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base font-semibold outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      >
                        <option
                          className="py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-700"
                          value=""
                        >
                          Select
                        </option>
                        <option
                          className="py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-700"
                          value="male"
                        >
                          Male
                        </option>
                        <option
                          className="py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-700"
                          value="female"
                        >
                          Female
                        </option>
                      </select>
                    </div>
                  </div> */}
                  <Checkbox></Checkbox>
                  <RadioGroupComponent errorMessage="Invalid selection"></RadioGroupComponent>
                  {/* <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <p className="text-dark mb-3 block text-sm font-medium dark:text-white">
                        Choose Plan
                      </p>
                      <div className="flex items-center space-x-6">
                        <label className="text-dark flex items-center space-x-2 text-sm dark:text-white">
                          <input
                            type="radio"
                            name="plan"
                            value="basic"
                            className="text-primary focus:ring-primary h-6 w-6 dark:border-gray-600 dark:bg-[#2C303B]"
                          />
                          <span>Basic</span>
                        </label>
                        <label className="text-dark flex items-center space-x-2 text-sm dark:text-white">
                          <input
                            type="radio"
                            name="plan"
                            value="premium"
                            className="text-primary focus:ring-primary h-6 w-6 dark:border-gray-600 dark:bg-[#2C303B]"
                          />
                          <span>Premium</span>
                        </label>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div> */}
                  {/* <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div> */}
                  <HeadlessTextField id={useId()} />
                  <HeadlessTextField
                    disabled
                    floatingLabel
                    error="With the error"
                    id={useId()}
                  />
                  <HeadlessTextField readOnly id={useId()} />
                  <HeadlessTextField
                    id={useId()}
                    floatingLabel
                    label="Email"
                    type="email"
                    helperText="We'll never share your email"
                    error="This is an error"
                  />
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark rounded-xs px-9 py-4 text-base font-medium text-white duration-300">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
