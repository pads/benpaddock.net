![CI workflow](https://github.com/pads/thisispads.me.uk/actions/workflows/ci.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/fb13f0fa-126d-4a81-8c29-0bc52dba8c65/deploy-status)](https://app.netlify.com/projects/benpaddock/deploys)

This is a [Next.js](https://nextjs.org/) website bootstrapped with `create-next-app`.

## Getting Started

First, install dependencies:
```bash
npm install
npm install -g netlify-cli
```

Next, login to netlify and pull the environment variables:
```bash
netlify link --name benpaddock
netlify env:list --plain >> .env.local
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