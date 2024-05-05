import React from 'react';
import { motion } from "framer-motion";
const RenewalForm = ({
  currentStep,
  delta,
  register,
  errors,
}: {
  currentStep: number;
  delta: number;
  register: any;
  errors: any;
}) => {
  return (
    <>
    <motion.div
      initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className=" grid grid-cols-2 gap-x-3 gap-y-4"
    >
      <div className=" text-xs">
        <label htmlFor="documentID">Document ID</label>
        <input
          type="text"
          id="documentID"
          {...register("documentID", { required: true })}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
            errors.documentID?.message &&
            "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
          }`}
        />
        {errors.documentID && (
          <span className="text-red-500">
            {errors.documentID.message}
          </span>
        )}
      </div>
      <div className=" text-xs">
        <label htmlFor="documentName">Document Name</label>
        <select
          id="documentName"
          {...register("documentName", { required: true })}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
            errors.bvrNumber?.message &&
            "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
          }`}
        >
          <option value="opt1">Opt 1</option>
          <option value="opt2">Opt 2</option>
          <option value="opt3">Opt 3</option>
        </select>
        {errors.documentName && (
          <span className="text-red-500">
            {errors.documentName.message}
          </span>
        )}
      </div>
      <div className=" text-xs">
        <label htmlFor="issueDate">Issue Date</label>
        <input
          type="date"
          id="issueDate"
          {...register("issueDate", { required: true })}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
            errors.issueDate?.message &&
            "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
          }`}
        />
        {errors.issueDate && (
          <span className="text-red-500">
            {errors.issueDate.message}
          </span>
        )}
      </div>
      <div className=" text-xs">
        <label htmlFor="expirationDate">Expiration Date</label>
        <input
          type="date"
          id="expirationDate"
          {...register("expirationDate", { required: true })}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
            errors.expirationDate?.message &&
            "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
          }`}
        />
        {errors.expirationDate && (
          <span className="text-red-500">
            {errors.expirationDate.message}
          </span>
        )}
      </div>
    </motion.div>
  </>
  );
}

export default RenewalForm;
