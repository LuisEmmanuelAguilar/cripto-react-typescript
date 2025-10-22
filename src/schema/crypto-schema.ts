import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string().min(3).max(3),
    name: z.string().min(1),
})