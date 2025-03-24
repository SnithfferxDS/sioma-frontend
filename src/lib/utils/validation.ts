import { z } from 'zod';

export const categorySchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  description: z.string().optional(),
  parents: z.array(z.string()).nullable(), // Allow null for parent_id
  active: z.boolean().default(true),
});

export const userSchema = z.object({
  name: z.string().min(3, 'Name is required').max(150),
  lastname: z.string().min(3, 'LastName is required').max(150),
  email: z.string().min(1,"e-Mail is required").max(150),
  password: z.string().min(1,"password is required").max(12),
  confirmPassword: z.string().min(1,"confirm password is required").max(12),
  phone: z.string().optional(),
  user:z.string().optional(),
})

export type CategoryFormData = z.infer<typeof categorySchema>;

export function validateCategory(data: unknown) {
  try {
    return { data: categorySchema.parse(data), errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { data: null, errors: error.flatten().fieldErrors };
    }
    return { data: null, errors: { _form: ['An unexpected error occurred'] } };
  }
}

export const productTypeSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  categories: z.array(z.number()).min(1, 'At least one category is required'),
});

export type ProductTypeFormData = z.infer<typeof productTypeSchema>;

export function validateProductType(data: unknown) {
  try {
    console.log(data);
    return { data: productTypeSchema.parse(data), errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { data: null, errors: error.flatten().fieldErrors };
    }
    return { data: null, errors: { _form: ['An unexpected error occurred'] } };
  }
}

export function validateProductData(data: unknown) {}

export function validateUserAccount (data: unknown) {
  try {
    return {data: userSchema.parse(data), errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {data: null, errors: error.flatten().fieldErrors };
    }
    return {data:null, errors: {_form: ['An unexpected error occurred'] } };
  }
}

export const countrySchema = z.object({
  name: z.string().min(3, 'Name is required').max(100),
  tlc: z.number().min(0, 'TLC is required').max(100),
  impex: z.number().min(0, 'IMPEX is required').max(100),
  additional: z.number().min(0, 'Additional is required').max(100),
});

export type CountryFormData = z.infer<typeof countrySchema>;

export function validateCountry(data: unknown) {
  try {
    return { data: countrySchema.parse(data), errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { data: null, errors: error.flatten().fieldErrors };
    }
    return { data: null, errors: { _form: ['An unexpected error occurred'] } };
  }
}

export const sidebarMenuSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  url: z.string().nullable(),
  icon: z.string().nullable(),
  parent_id: z.number().nullable(),
  position: z.number().default(0),
});

export type SidebarMenuFormData = z.infer<typeof sidebarMenuSchema>;

export function validateSidebarMenu(data: unknown) {
  try {
    return { data: sidebarMenuSchema.parse(data), errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { data: null, errors: error.flatten().fieldErrors };
    }
    return { data: null, errors: { _form: ['An unexpected error occurred'] } };
  }
}

export const groupSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  position: z.string().optional(),
  is_allow_desc: z.boolean().nullable(), // Allow null for parent_id
  active: z.boolean().default(true),
});

export function validateGroup(data: unknown) {
  try {
    return { data: groupSchema.parse(data), errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { data: null, errors: error.flatten().fieldErrors };
    }
    return { data: null, errors: { _form: ['An unexpected error occurred'] } };
  }
}