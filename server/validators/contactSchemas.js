import { z } from 'zod';

const phoneRefined = z
  .string()
  .max(30)
  .refine((s) => s === '' || /^[0-9+\s().-]{6,20}$/.test(s), 'Numero de telephone invalide.');

export const contactPayloadSchema = z.object({
  name: z.string().min(1, 'Nom requis.').max(100),
  email: z.string().email('Adresse email invalide.').max(160),
  phone: phoneRefined,
  subject: z.string().min(1, 'Sujet requis.').max(120),
  message: z.string().min(1, 'Message requis.').max(2500),
});

export const driverPayloadSchema = z.object({
  fullName: z.string().min(1, 'Nom complet requis.').max(120),
  email: z.string().email('Adresse email invalide.').max(160),
  phone: z
    .string()
    .min(6, 'Telephone requis.')
    .max(30)
    .regex(/^[0-9+\s().-]{6,20}$/, 'Numero de telephone invalide.'),
  city: z.string().min(1, 'Ville requise.').max(80),
  experience: z.string().max(500),
  hasVtcCard: z.boolean(),
  hasVehicle: z.boolean(),
  availability: z.string().max(120),
  motivation: z.string().min(1, 'Motivation requise.').max(3000),
});

export function formatZodIssues(error) {
  return error.issues.map((i) => i.message).join(' ');
}
