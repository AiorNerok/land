import * as z from 'zod'


export const formSchemas = z.object({
    email: z.string().min(5, {
        message: "Email must be at least 2 characters.",
    })
})