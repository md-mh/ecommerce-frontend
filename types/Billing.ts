import { z } from "zod";

// Zod schema for billing form validation
export const billingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .regex(/^\d+$/, "Phone number must be digits only"),
  address: z.string().min(5, "Address is required"),
});

export type BillingFormValues = z.infer<typeof billingSchema>;
