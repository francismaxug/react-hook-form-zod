import React from "react";
import { motion } from "framer-motion";

const DetailsForm = ({
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
    <motion.div
      initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {currentStep === 0 && (
        <div className=" flex gap-x-5">
          <div className=" text-xs">
            <p className=" text-sm">Vehicle Available</p>
            <p>
              Decide whether this vehicle is in use <br />
              Available vehicle are visible for selection
            </p>
          </div>
          <p>x</p>
        </div>
      )}

      <div className=" grid grid-cols-2 gap-x-3 gap-y-4">
        <div className=" text-xs">
          <label htmlFor="bvrNumber">BVR Number</label>
          <input
            type="text"
            defaultValue="123"
            id="bvrNumber"
            {...register("bvrNumber", { required: true })}
            className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
              errors.bvrNumber?.message &&
              "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
            }`}
          />
          {errors.bvrNumber && (
            <span className="text-red-500">{errors.bvrNumber.message}</span>
          )}
        </div>
        <div className=" text-xs">
          <label htmlFor="bvrID">BVR ID</label>
          <input
            type="text"
            id="bvrID"
            {...register("bvrID")}
            className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
              errors.bvrID?.message &&
              "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
            }`}
          />
          {errors.bvrID && (
            <span className="text-red-500">{errors.bvrID.message}</span>
          )}
        </div>
        <div className=" text-xs">
          <label htmlFor="chassisNumber">Chassis Number</label>
          <input
            type="text"
            id="chassisNumber"
            {...register("chassisNumber")}
            className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
              errors.chassisNumber?.message &&
              "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
            }`}
          />
          {errors.chassisNumber && (
            <span className="text-red-500">{errors.chassisNumber.message}</span>
          )}
        </div>
        <div className=" text-xs">
          <label htmlFor="startOperationDate">Started Operation Date</label>
          <input
            type="date"
            id="startOperationDate"
            {...register("startOperationDate")}
            {...register("startOperationDate")}
            className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
              errors.startOperationDate?.message &&
              "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
            }`}
          />
          {errors.startOperationDate && (
            <span className="text-red-500">
              {errors.startOperationDate.message}
            </span>
          )}
        </div>
        {/* <div className=" text-xs">
                <label htmlFor="manufacturer">Manufacturer</label>
                <input
                  type="text"
                  id="manufacturer"
                  {...register("manufacturer")}
                  className=" bg-gray-300 border-none outline-none w-full p-1 rounded-sm"
                />
                {errors.manufacturer && (
                  <span className="text-red-500">
                    {errors.manufacturer.message}
                  </span>
                )}
              </div> */}
        {/* <div className=" text-xs">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  {...register("category")}
                  className=" bg-gray-300 border-none outline-none w-full p-1 rounded-sm"
                />
                {errors.category && (
                  <span className="text-red-500">
                    {errors.category.message}
                  </span>
                )}
              </div> */}
        {/* <div className=" text-xs">
                <label htmlFor="dateOfPurchase">Date of Purchase</label>
                <input
                  type="date"
                  id="dateOfPurchase"
                  {...register("dateOfPurchase")}
                  className=" bg-gray-300 border-none outline-none w-full p-1 rounded-sm"
                />
                {errors.dateOfPurchase && (
                  <span className="text-red-500">
                    {errors.dateOfPurchase.message}
                  </span>
                )}
              </div> */}
        {/* <div className=" text-xs">
                <label htmlFor="manufacturedDate">Manufactured Date</label>
                <input
                  type="date"
                  id="manufacturedDate"
                  {...register("manufacturedDate")}
                  className=" bg-gray-300 border-none outline-none w-full p-1 rounded-sm"
                />
                {errors.manufacturerDate && (
                  <span className="text-red-500">
                    {errors.manufacturerDate.message}
                  </span>
                )}
              </div> */}
      </div>
      {/* <div className=" text-xs mt-7">
              <label htmlFor="omc">OMC</label>
              <input
                type="text"
                id="omc"
                {...register("omc")}
                className=" bg-gray-300 border-none outline-none w-full p-1 rounded-sm"
              />
              {errors.omc && (
                <span className="text-red-500">{errors.omc.message}</span>
              )}
            </div> */}
    </motion.div>
  );
};

export default DetailsForm;
