![CI workflow](https://github.com/pads/benpaddock.net/actions/workflows/ci.yml/badge.svg)
![Website Deploy](https://deploy-badge.vercel.app/?url=http%3A%2F%2Fwww.benpaddock.net&name=website)

This is a [Next.js](https://nextjs.org/) website bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:
```bash
npm install
npm install -g vercel@latest
```

Next, login to vercel and pull the environment variables:
```bash
vercel login
vercel env pull
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Pages are added within the `pages` directory.
- Blog posts are markdown files added within the `posts` directory.

## CMS

Open [http://localhost:3000/admin/index.html](http://localhost:3000/admin/index.html)
- After logging in you can create blog posts using the rich text editor.
- Saving a draft creates/updates a pull request with a markdown file.
- Publishing merges the pull request.

## Deployment

This happens automatically on merge to master.