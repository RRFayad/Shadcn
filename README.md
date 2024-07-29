# Shadcn

## 1. Intro

- https://github.com/tomphill/support-me-course

- Project Ouverview

  - We are gonna build a fictional dashboard
    - No auth, no DB, only visual aspect of ShadcnUI

- Landing Page
  - Light Mode / Dark Mode
- Login / Sign Up Forms
  - Validation
  - Customizing components, such as calendar, swithcing mode from protected pw to show pw, etc
- Dashboard
  - Pie Charts, Line Graph, Table with Pagination etc

#### Set Up Next JS and ShadcnUI

- npx create-next-app@latest
- npx shadcn-ui@latest init

  - npm install -D prettier prettier-plugin-tailwindcss

- Shadcn/ui is a "beautifully designed components that you can copy and paste into your apps"

  - So, it's only about copying the component to have a built block as a starting point

- Getting the 1st component

  - We can see the components folder is already created for us, as well as the lib and utils.ts, which gives us the cn() to concatenate css classnames

- We can run the given CLI or copy and paste the whole code
  - Now we have an ui folder with the button code :)

## 2. Building the Landing Page

#### 5. Add the landing page text and buttons

- We are gonna start on our landing page, creating the dark mode and light mode

##### Setting Fonts

- Changed fonts in the layout.tsx

##### Dark Mode

- It's a Tailwind feat - We just added the "dark" className in the layout.tsx

#### Next New Concepts During the Course

- Routing Groups - Naming the folder wrapped in () will not affect the URL
  - e.g.: Our landing page in the (logged-out) folder
