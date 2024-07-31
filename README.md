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

#### 6. Tidying up the landing page styles and link to login and signup pages

##### Tailwind Groups Styles (creating defaults)

- Remember TW has base (for html tags), utilities (util classnames - like tw itself, bg standing for background-color) and components (e.g.: .btn for a specific button) layers

- We set this in global.css

##### Icons - Lucide

- We have some icon form lucide-react (that comes with Shadcn - We could use fontIcon or some other library)

#### 7. Shadcn ui theme

- We are going to customize the ShadcnUI theme

  - Specifically, our default button to be in our theme color (pink)

- In Shadcn theme page, we can set the:
  - style;
  - color;
  - radius;
  - mode;
- So, about the general theme, we set it, copy the code, and change the base in out globals.css;
  - As we also want to change our buttons, actually we want to update our:
    - primary color (both on light and dark) and primary-foregroung (in HSL value)

#### 8. Light and dark mode toggle with a Tooltip

- Implemented light and dark mode toggle, check the Tooltip component

## 3. Login Page

#### 9. Add the login page and card

- We will work with Shadcn Card and Form

- Created login route and implemented the Card

#### 10. Create the login form

- We installed the form component, which also installed React-hook-form and zod

- For the form, we have some steps:

  1. Create our form schema with zod;

  ```javascript
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });
  ```

  2. Define the Form - hooking it up with the zod resolver

  ```javascript
  const form =
    useForm <
    z.infer <
    typeof formSchema >>
      {
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      };
  ```

  3. Create the submitHandler

  ```javascript
  const submitHandler = () => {
    console.log("Login Validated");
  };
  ```

  4. Build he form (**Look at (or probably copy it to begin) Shadcn Docs to it, as it's a lot of stuff for each FormField**)

  ```javascript
  <Form {...form}>
    <form onSubmit={form.handleSubmit(submitHandler)}>
      <FormField
        control={form.control} // What attaches to our form hook
        name="email"
        // render() returns what will be renderd on the screen
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder="john@doe.com"
                // type="email"
                {...field}
              />
            </FormControl>
            <FormDescription>This is the email you signed up to SupportMe</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  </Form>
  ```

  4.1. Some Form Obs and customizations

  - We can see the Form has its own context to control and display validation errors
    - We also adjusted the colors in global css
  - **Important:** Shadcn uses the form validation in the client side, so in a Full Stack application, I think the best approach is to create the zod schema in a separate file, to use it oth in the client side and in the server side

## 4. Sign Up Page

The sign up page will have form complex inputs to be set

#### 11. Add the sign up page and card

- Just created the Sign Up pre config from what we already have

## Shadcn/ui Components:

##### Buttons

- Check variant props
- asChild: Let us style the button child as a button, e.g.:

  ```javascript
  <Button variant={"outline"} asChild>
    <Link href={"/sign-up"}>Sign Up</Link>
  </Button>
  ```

##### Tooltip (used in dark/light mode btn)

```javascript
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger
      className={className}
      onClick={() => {
        setIsDarkMode((prevState) => !prevState);
        document.body.classList.toggle("dark");
      }}
    >
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </TooltipTrigger>
    <TooltipContent>{isDarkMode ? "Enable light mode" : "Enable dark mode"}</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

##### Card

```javascript
<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Login to your SupportMe account</CardDescription>
  </CardHeader>
  <CardContent>Login Form</CardContent>
  {/*CardFooter is already display:flex*/}
  <CardFooter className="justify-between">
    <small>Don't have an account?</small>
    <Button asChild variant={"outline"} size={"sm"}>
      <Link href="/sign-up">Sign Up</Link>
    </Button>
  </CardFooter>
</Card>
```

## Next New Concepts During the Course

- Routing Groups - Naming the folder wrapped in () will not affect the URL

  - e.g.: Our landing page in the (logged-out) folder

- layout.tsx
  - Will render the group, so we are building a layout for our logged out route group

## Other Observations During the Course

- About Shadcn Theme and Styles: Shadcn configs our tailwind config with customized colors which we can change and use (such as primary, destructive etc)

- `<small>Some text here</small>`: small tag is for small text, such as those 'copyrights' on the footer

- "tracking-wider" is the tailwind for letter-spacing

- `className="fixed right-2 top-[calc(50%-12px)]"` Just to show to to be specific in a measure - We wanted to center the light/dark icon, so 24px was its full size, and then we calculated its half to be on the center
