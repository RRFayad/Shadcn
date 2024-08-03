import * as z from "zod";

// This formSchema first approach had an issue: it would do the superRefine validation only after the "first levels" validations were alright
// So,  below, we splitted the schemas and then merged them, what would make all run ate once

export const lpFormSchema = z
  .object({
    email: z.string().email(),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(), // coerce is for converting to number
    dateOfBirth: z.date().refine((date) => {
      const today = new Date();
      const eighteenYrsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate(),
      );
      return date <= eighteenYrsAgo; // When the callback returns true we say the validation failed
    }, "You must be at least 18 years old"),
    password: z
      .string()
      .min(8, "Your password must contain at least 8 characterts")
      .refine((password) => {
        const regex =
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

        return regex.test(password);
      }, "Password must contain at least 1 special character and 1 uppercase letter"),
    passwordConfirm: z.string(),
    acceptTerms: z
      .boolean({
        required_error: "You must accept the terms and conditions",
      })
      .refine((checked) => checked, "You must accept the terms and conditions"),
  })
  .superRefine((data, context) => {
    // superRefine runs only after the "first level validations"
    if (data.accountType === "company" && !data.companyName) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "Company name is required",
      });
    }
    if (
      data.accountType === "company" &&
      (!data.numberOfEmployees || data.numberOfEmployees < 0)
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfEmployees"],
        message: "Number of Employees is required",
      });
    }
    if (data.password !== data.passwordConfirm) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Password does not match",
      });
    }
  });

/* Below the example of how to workaround with the "2 time validation with the superRefine"

const lpAccountTypeFormSchema = z
  .object({
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(), // coerce is for converting to number
  })
  .superRefine((data, context) => {
    if (data.accountType === "company" && !data.companyName) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "Company name is required",
      });
    }
    if (
      data.accountType === "company" &&
      (!data.numberOfEmployees || data.numberOfEmployees < 0)
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfEmployees"],
        message: "Number of Employees is required",
      });
    }
  });

const lpPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, "Your password must contain at least 8 characterts")
      .refine((password) => {
        const regex =
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

        return regex.test(password);
      }, "Password must contain at least 1 special character and 1 uppercase letter"),
    passwordConfirm: z.string(),
  })
  .superRefine((data, context) => {
    if (data.password !== data.passwordConfirm) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Password does not match",
      });
    }
  });

const lpBaseFormSchema = z.object({
  email: z.string().email(),

  dateOfBirth: z.date().refine((date) => {
    const today = new Date();
    const eighteenYrsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );
    return date <= eighteenYrsAgo; // When the callback returns true we say the validation failed
  }, "You must be at least 18 years old"),
});

export const lpFormSchema = lpBaseFormSchema
  .and(lpAccountTypeFormSchema)
  .and(lpPasswordFormSchema);

  */
