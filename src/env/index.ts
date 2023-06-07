import 'dotenv/config'
import { z } from 'zod'

const envSchemma = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchemma.safeParse(process.env)

if (_env.success === false) {
  console.error('invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data
