import React from 'react';

const Navigations = ({
  currentStep,
  steps,
}: {
  currentStep: number;
  steps: { name: string,
    fields: string[],
    id: string,
   }[];
}) => {
  return (
    <div className=" text-center">
    <ol
      role="list"
      className="space-y-2 flex justify-center items-center md:space-x-3 md:space-y-0"
    >
      {steps.map((step, index) => (
        <li key={step.name} className="">
          {currentStep > index ? (
            <div className="group flex w-full  ">
              <span className="text-xs font-medium">{step.name}</span>
            </div>
          ) : currentStep === index ? (
            <div
              className="flex w-full border rounded-full p-1 border-blue-500  "
              aria-current="step"
            >
              <span className="text-xs font-medium">{step.name}</span>
            </div>
          ) : (
            <div className="group flex w-full ">
              <span className="text-xs font-medium">{step.name}</span>
            </div>
          )}
        </li>
      ))}
    </ol>
  </div>
  );
}

export default Navigations;
