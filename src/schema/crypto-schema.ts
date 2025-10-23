import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string().min(3).max(3),
    name: z.string().min(1),
})

export const CryptoCurrencyResponseSchema = z.object({
        CoinInfo : z.object({
            Name: z.string(),
            FullName: z.string(),
        }),
})

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)