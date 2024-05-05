import { z } from "zod";

export const FormDataSchema = z.object({
  bvrNumber: z.string().min(1, "BVR Number is required"),
  bvrID: z.string().min(1, "BVR ID is required"),
  chassisNumber: z.string().min(1, "Chassis Number is required"),
  startOperationDate: z
    .string()
    .min(1, " Start Operation Date is required")
    .date(),
  grossWeight: z.string().min(1, "Gross Weight is required"),
  netWeight: z.string().min(1, "Net Weight is required"),
  horsePower: z.string().min(1, "Horse Power is required"),
  fuelType: z.string(),
  // manufacturer: z.string(),
  // category: z.string(),
  // dateOfPurchase: z.string(),
  // manufacturedDate: z.string(),
  // omc: z.string(),

  // vehicleLength: z.string(),
  // numberOfTyres: z.string(),
  // numberOfAxles: z.string(),
  // numberOfPersonAllowed: z.string(),
  // numberOfCylinders: z.string(),
  // undergroundGuard: z.string(),
  // numberOfSeats: z.string(),
  // cubicCapacity: z.string(),
  // permissibleLoadCapacity: z.string(),
  // carryingCapacity: z.string(),
  // width: z.string(),
  // height: z.string(),
  // obc: z.string(),
  // specBurner: z.string(),
  // npaTracker: z.string(),
  // numberOfCompartments: z.string(),
  documentID: z.string().min(1, "Document ID is required"),
  documentName: z.string().min(1, "Document Name is required"),
  issueDate: z.string().min(1, "Issue Date is required").date(),
  expirationDate: z.string().min(1, "Expiration Date is required").date(),
});
