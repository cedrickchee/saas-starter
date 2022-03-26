# Documentations

### Introduction and Setup

- Development environment setup
- The tech stack behind e-mart
- Intro to Next.js
- Tooling and Routing

### CSS and Styled Components

- Intro to Styled Components
- Themes and Layout with Styled Components
- Global Styling
- Typography with Styled Components

### Server Side GraphQL

- Intro to GraphQL
- Setup Prisma
- Getting our GraphQL Yoga server running
- Writing our first Query and Mutation
- `Items` creation and Prisma Yoga flow

### Client Side GraphQL

- Setting up Apollo Client with React
- React and GraphQL
- Creating `Items` with Mutations
- Uploading images
- Updating `Items` with Queries and Mutations
- Deleting `Items`
- Displaying single `Items`
- Pagination
- Pagination and cache invalidation

### Accounts, Authentication and Permissions

- User signup and permission flow
- User signup in React
- Currently logged in user with middleware and Render Props
- Sign in form and custom error handling
- Sign out button
- Backend password reset flow
- Frontend password reset flow
- Sending email
- Data relationships
- Creating a gated sign in component
- Permissions management
- Updating permissions in local state
- Updating permissions on the server
- Locking down `DeleteItem` permissions

### Shopping Cart

- Creating cart in React
- Apollo local state Queries and Mutations
- Server side "Add To Cart"
- Displaying cart items and totals
- Removing cart items
- [Optimistic UI](https://www.apollographql.com/docs/react/features/optimistic-ui) — optimistic response and cache updates with Apollo
  - More about [optimistic UI (a UX pattern)](https://uxplanet.org/optimistic-1000-34d9eefe4c05)
- Animating our cart count component
- Dealing with deleted items in `CartItems`

### Advanced UI and Code Quality

- Cleaning up this Render Prop mess
- Search dropdown autocomplete
- Autocomplete with downshift

### Credit Card Checkout

- Credit card processing with Stripe Checkout
- Charging cards on the server side
- Saving orders to the database
- Displaying single orders
- Orders page

### Testing

- Intro to testing with Jest and Enzyme
- Unit Testing 101
- Mocking 101
- First tests and shallow rendering
- Snapshot testing
- Testing and mocking Apollo queries
- More Apollo query testing
- Testing pagination
- Testing mutations
- More Apollo Client mutation testing
- Testing our shopping cart
- Testing order components

### Deployment

- Deploying a Prisma server to Heroku
- Deploying Yoga server to Heroku
- Deploying frontend to Heroku
