import React from "react";
import { motion } from "framer-motion";

const SpecificationForm = ({
  currentStep,
  delta,
  register,
  errors,
 
}:{
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
        <label htmlFor="grossWeight">Gross Weight</label>
        <input
          type="text"
          defaultValue="8000"
          id="grossWeight"
          {...register("grossWeight")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
            errors.grossWeight?.message &&
            "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
          }`}
        />
        {errors.grossWeight && (
          <span className="text-red-500">
            {errors.grossWeight.message}
          </span>
        )}
      </div>
      <div className=" text-xs">
        <label htmlFor="netWeight">Net Weight</label>
        <input
          type="text"
          id="netWeight"
          {...register("netWeight", { required: true })}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
            errors.netWeight?.message &&
            "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
          }`}
        />
        {errors.netWeight && (
          <span className="text-red-500">
            {errors.netWeight.message}
          </span>
        )}
      </div>
      <div className=" text-xs">
        <label htmlFor="horsePower">Horse Power</label>
        <input
          type="text"
          defaultValue="195hp"
          id="horsePower"
          {...register("horsePower", { required: true })}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm  ${
            errors.horsePower?.message &&
            "focus:ring-red-500 focus:ring-opacity-50 focus:ring-1"
          }`}
        />
        {errors.horsePower && (
          <span className="text-red-500">
            {errors.horsePower.message}
          </span>
        )}
      </div>
      <div className=" text-xs">
        <label htmlFor="fuelType">Fuel Type</label>
        <input
          type="text"
          id="fuelType"
          {...register("fuelType")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.fuelType && (
          <span className="text-red-500">
            {errors.fuelType.message}
          </span>
        )}
      </div>
      {/* <div className=" text-xs">
        <label htmlFor="vehicleLength">Vehicle Length</label>
        <input
          type="text"
          id="vehicleLength"
          {...register("vehicleLength")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.vehicleLength && (
          <span className="text-red-500">
            {errors.vehicleLength.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="numberOfTyres">Number of Tyres</label>
        <input
          type="text"
          id="numberOfTyres"
          {...register("numberOfTyres")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.numberOfTyres && (
          <span className="text-red-500">
            {errors.numberOfTyres.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="numberOfAxles">Number of Axles</label>
        <input
          type="text"
          id="numberOfAxles"
          {...register("numberOfAxles")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.numberOfAxles && (
          <span className="text-red-500">
            {errors.numberOfAxles.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="numberOfPersonAllowed">
          Number of Person Allowed
        </label>
        <input
          type="text"
          id="numberOfPersonAllowed"
          {...register("numberOfPersonAllowed")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.numberOfPersonAllowed && (
          <span className="text-red-500">
            {errors.numberOfPersonAllowed.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="numberOfCylinders">Number of Cylinders</label>
        <input
          type="text"
          id="numberOfCylinders"
          {...register("numberOfCylinders")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.numberOfCylinders && (
          <span className="text-red-500">
            {errors.numberOfCylinders.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="undergroundGuard">Underground Guard</label>
        <input
          type="text"
          id="undergroundGuard"
          {...register("undergroundGuard")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.undergroundGuard && (
          <span className="text-red-500">
            {errors.undergroundGuard.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="numberOfSeats">Number of Seats</label>
        <input
          type="text"
          id="numberOfSeats"
          {...register("numberOfSeats")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.numberOfSeats && (
          <span className="text-red-500">
            {errors.numberOfSeats.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="cubicCapacity">Cubic Capacity</label>
        <input
          type="text"
          id="cubicCapacity"
          {...register("cubicCapacity")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.cubicCapacity && (
          <span className="text-red-500">
            {errors.cubicCapacity.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="permissibleLoadCapacity">
          Permissible Load Capacity
        </label>
        <input
          type="text"
          id="permissibleLoadCapacity"
          {...register("permissibleLoadCapacity")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.permissibleLoadCapacity && (
          <span className="text-red-500">
            {errors.permissibleLoadCapacity.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="carryingCapacity">Carrying Capacity</label>
        <input
          type="text"
          id="carryingCapacity"
          {...register("carryingCapacity")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.carryingCapacity && (
          <span className="text-red-500">
            {errors.carryingCapacity.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="width">Width</label>
        <input
          type="text"
          id="width"
          {...register("width")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.width && (
          <span className="text-red-500">{errors.width.message}</span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="height">Height</label>
        <input
          type="text"
          id="height"
          {...register("height")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.height && (
          <span className="text-red-500">{errors.height.message}</span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="obc">OBC</label>
        <input
          type="text"
          id="obc"
          {...register("obc")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.obc && (
          <span className="text-red-500">{errors.obc.message}</span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="specBurner">Spec Burner</label>
        <input
          type="text"
          id="specBurner"
          {...register("specBurner")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm`}
        />
        {errors.specBurner && (
          <span className="text-red-500">
            {errors.specBurner.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="npaTracker">NPA Tracker</label>
        <input
          type="text"
          id="npaTracker"
          {...register("npaTracker")}
          className=" bg-gray-300 border-none outline-none w-full p-1 rounded-sm"
        />
        {errors.npaTracker && (
          <span className="text-red-500">
            {errors.npaTracker.message}
          </span>
        )}
      </div> */}
      {/* <div className=" text-xs">
        <label htmlFor="numberOfCompartments">
          Number Of Compartments
        </label>
        <input
          type="text"
          id="numberOfCompartments"
          {...register("numberOfCompartments")}
          className={`bg-gray-300 border-none outline-none w-full p-1 rounded-sm `}
        />
        {errors.numberOfCompartments && (
          <span className="text-red-500">
            {errors.numberOfCompartments.message}
          </span>
        )}
      </div> */}
    </motion.div>
  </>
  )
};

export default SpecificationForm;
