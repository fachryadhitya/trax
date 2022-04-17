# Trax

> Royalty-free music web application

## Stack used

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [TypeScript](https://typescriptlang.org/)

## Developing

A Node.js LTS setup with [yarn](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn dev

# build for production
yarn build

# run unit tests
yarn test
```

## Architecture

### Data fetching

I used [SWR](https://swr.vercel.app/) for the data-fetching logic, allowing for data fetches to be wrapped in a custom hook.

### State management

[React Context](https://reactjs.org/docs/context.html)

### Directory structure

- `/components` - UI/layout components that are used globally throughout project.
- `/lib` - Shared utility/helper method.
- `/public` - Next.js public directory, used for storing static assets.
- `/types` - TypeScript types + interfaces that are used globally throughout the project.
- `/prisma` - Prisma migrations and seeder script
