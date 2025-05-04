# Prompts for ai to generate components

## Components

### Select using list box. Simple without search

Crate a select from the code below using headless ui and tailwind css. Styling should be the same.

- Should support validation styling
- should support disabling the select
- should support diabled option
- use Description, Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions components from headless ui. An example from headlessui is shown below.
- Any custom prop interface should be extended from , Listbox, ListboxButton, ListboxOption, ListboxOptions props.

```typescript
import { Description, Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'

const people = [
 { id: 1, name: 'Durward Reynolds' },
 { id: 2, name: 'Kenton Towne' },
 { id: 3, name: 'Therese Wunsch' },
 { id: 4, name: 'Benedict Kessler' },
 { id: 5, name: 'Katelyn Rohan' },
]

function Example() {
 const [selectedPerson, setSelectedPerson] = useState(people[0])

 return (
   <Field disabled>
     <Label>Assignee:</Label>
     <Description>This person will have full access to this project.</Description>
     <Listbox value={selectedPerson} onChange={setSelectedPerson}>
       <ListboxButton>{selectedPerson.name}</ListboxButton>
       <ListboxOptions anchor="bottom">
         {people.map((person) => (
           <ListboxOption key={person.id} value={person} className="data-focus:bg-blue-100">
             {person.name}
           </ListboxOption>
         ))}
       </ListboxOptions>
     </Listbox>
   </Field>
 )
}
```

The code I want you to convert is given below

```typescript
import React from "react";
import { SelectProps } from "@/ui/types";
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

```
