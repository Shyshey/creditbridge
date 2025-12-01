/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}
module.exports = nextConfig
```

**Wait, actually...** for Next.js 14, the App Router is stable and doesn't need the experimental flag. Let me think about this differently.

**Check your `tsconfig.json`** - can you share its contents? Sometimes TypeScript path configurations can cause issues.

Also, one more thing to try:

**Create a `.npmrc` file in your root** with:
```
legacy-peer-deps=false
