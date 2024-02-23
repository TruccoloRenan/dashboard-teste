import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-adequate-feline-41649.upstash.io',
  token: process.env.REDIS_KEY!,
})
