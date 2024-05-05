import React from "react";

const Toggles = ({
  currentStep,
  steps,
  next,
  prev,
  save,
}: {
  currentStep: number;
  steps: { name: string,
    fields: string[],
    id: string,
   }[];
  next: () => void;
  prev: () => void;
  save: () => void;
}) => {
  return (
    <div className=" mx-auto flex gap-x-3">
      {currentStep > 0 && (
        <button onClick={prev} className=" text-black">
          Previous
        </button>
      )}
      {currentStep === steps.length - 1 && (
        <button
          onClick={save}
          className=" text-black border border-black  px-5 rounded-full"
        >
          Saved changes
        </button>
      )}
      {currentStep === steps.length - 1 ? null : (
        <button
          onClick={next}
          className=" text-black border border-black  px-5 rounded-full"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Toggles;
