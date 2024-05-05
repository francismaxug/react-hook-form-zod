"use client";
import { useState } from "react";
import { z } from "zod";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import DetailsForm from "./DetailsForm";
import SpecificationForm from "./SpecificationForm";
import RenewalForm from "./RenewalForm";
import Toggles from "./Toggles";
import Navigations from "./Navigations";

const steps = [
  {
    id: "Step 1",
    name: "Details",
    fields: ["bvrNumber", "bvrID", "chassisNumber", "startOperationDate"],
  },
  {
    id: "Step 2",
    name: "Specification",
    fields: ["grossWeight", "netWeight", "horsePower", "fuelType"],
  },
  {
    id: "Step 3",
    name: "Renewal",
    fields: ["documentID", "documentName", "issueDate", "expirationDate"],
  },
];

type Inputs = z.infer<typeof FormDataSchema>;
const Form = () => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const delta = currentStep - previousStep;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const setOpenModalFxn = () => {
    setOpenModal(false);
    setCurrentStep(0);
  };
  const save = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    if (!output) return;
    console.log("Submitting");
    await handleSubmit(processForm)();
    setOpenModal(true);
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };
  return (
    <section className=" max-w-[35rem] border mx-auto mt-28 p-6 border-blue-300 flex flex-col gap-y-8">
     <Navigations currentStep={currentStep} steps={steps} />
      <form onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <DetailsForm
            delta={delta}
            register={register}
            currentStep={currentStep}
            errors={errors}
          />
        )}

        {currentStep === 1 && (
          <SpecificationForm
            delta={delta}
            register={register}
            currentStep={currentStep}
            errors={errors}
          />
        )}
        {currentStep === 2 && (
          <RenewalForm
            delta={delta}
            register={register}
            currentStep={currentStep}
            errors={errors}
          />
        )}
        {openModal && (
          <Modal modalState={openModal} setOpenModalFxn={setOpenModalFxn} />
        )}
      </form>
      <Toggles
        currentStep={currentStep}
        steps={steps}
        next={next}
        prev={prev}
        save={save}
      />
    </section>
  );
};

export default Form;
