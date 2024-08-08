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

#### 12. Account type Select field

- The account type will be Company or Personal

  - If company, it will render different inputs

```javascript
<FormField
  control={form.control}
  name="accountType"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Account Type</FormLabel>
      <Select onValueChange={field.onChange}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select an account type" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="company">Company</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>
```

#### 13. Form Conditional Fields - Rendering and Validation

- We want to set Company name and Employees if its a professional account

- In our zod schema, we defined the fileds as optional:

  ```javascript
  const formSchema = z.object({
    email: z.string().email(),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(), // coerce is for converting to number
  });
  ```

- Now, our "state" is watch with _form.watch_: `const accountype = form.watch("accountType");`

- Conditional fields validation - the superRefine method:

```javascript
const formSchema = z
  .object({
    email: z.string().email(),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(), // coerce is for converting to number
  })
  .superRefine((data, context) => {
    if (data.accountType === "company" && !data.companyName) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "Company name is required",
      });
    }
    if (data.accountType === "company" && (!data.numberOfEmployees || data.numberOfEmployees < 0)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfEmployees"],
        message: "Number of Employees is required",
      });
    }
  });
```

#### Adding the date of birth logic validation & Add the date of birth field with Popover

- Implemented first the validation

- Installed and Copied Calender and Popover

- Render selected date

  - The example from the docs comes wit the function prepared, we only have to `import { format } from "date-fns";`

- custom dropdowns for month / year selection

  - We will improve the Shadcn component, overwriting it to use the Shadcn Select as the calendar dropdowns
    - Updated the caption_label tw calss to hidden;
    - Started Creating the dropdowns
    - Too comlex logic tbh
  - Hooking Up the selected Year and Month to the logic

#### Adding the Password and password confirm fields

- We implemented the logic

#### Important about validation using zod:

- When we use superRefine(), its validation runs only after the direct validations are alright.
  - So to make them all run at once, we have to split the formSchemas and then merge them at once (check form-schemas.ts file)

#### 21. Creating a custom PasswordInput component

- Creted our custom password-input component

##### Terms and Conditions CheckBox

- Nothing new here

#### Handling Form data:

- remember to infer the type of he formData as the infered zod schema type

```javascript
    const submitHandler = (formData: z.infer<typeof lpFormSchema>) => {
    console.log(formData);
    router.push("/dashboard");
  };
```

## 5. Dashboard Layout

#### 24. Create the dashboard layout

- Created the page structure mainly in the layut file, nice to check the grid structure (also mentioned in the style, below, in this readme file)

## 6. My Dashboard Page

#### Adding tabs in the dashboard

```javascript
<Tabs defaultValue="employees">
  <TabsList>
    <TabsTrigger value="employees">Employees Stats</TabsTrigger>
    <TabsTrigger value="teams">Teams Stats</TabsTrigger>
  </TabsList>
  <TabsContent value="employees">Content for employyes here</TabsContent>
  <TabsContent value="teams">Content for teams here</TabsContent>
</Tabs>
```

#### Creating the stacked bar chart with recharts

- npm install recharts

  - https://recharts.org/en-US/examples
  - We are gonna work with Stacked Bar Chart

- Stackbar Chart:

  - The stackId must match (this is what makes the bars stacked)

- **Important:** charts must be client components

#### Finishing and Styling Bar Chart

- Check the work-location-trends tsx to check the styling customizations

#### Adding a pieChart

```javascript
"use client";
import { dataPie } from "@/lib/data-pie";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function TeamsDistributionChart() {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={150}>
        <PieChart>
          <Tooltip
            wrapperClassName=" dark:[&_.recharts-tooltip-item]:!text-white dark:!bg-black rounded-md dark:!border-border !text-sm "
            labelClassName="font-bold "
          />
          <Pie data={dataPie} dataKey={"value"} nameKey={"name"}>
            {dataPie.map((dataItem, index) => (
              <Cell fill={dataItem.color} key={index} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default TeamsDistributionChart;
```

## 7. Extras

#### Mobile menu

- Started in the layout component, with a div the only renders in mobile and hiding the web menu (and updating the grid)

#### Hamburger Menu (drawer component)

##### useMediaQuery

- We implemented the drawer menu, but, as it was to be shown only for mobile, if we expanded our screen it would keep showing.

  - That's because, the menu comes from a portal
  - So, we need to use the Shadcn useMediaQuery hook to hide it (using logic to recognize the screen size)

- We extended the Shadcn UI to recognize if the drawer have to be rendered from bottom (default) or from right

- Now we want to adjust it to close after clicked

  - used the context we created to handle eventHandlers in the menu item

#### Create the loading skeleton for the employees table

- Remember the Next loading page
  - Is as simple as using the skeleton and defining its shape:
    ` <Skeleton className="h-10 w-10 rounded-full" />`

#### Data Table

- Install table and check data table docs

- n px shadcn-ui@latest add table
- npm install @tanstack/react-table

- We simply pasted the data-table example from the docs (creating a dataTable component)

#### Adding Psgination to the Data Table

- We adjusted the data-table component, and almost copied the pagination from SHadcnUI docs (also extending it to add the first and last page)

- Important to notice that it works with the tanstack react table

- **It looks like this approach in kinda optimal for data tables**
  - Probably when I apply it, it will be nice to understand a bit more about tables with tanstack react table

#### Last adjustments

- We made the avatar to render properly and added a baged to the tema leaders

- Nice to oberve the cloumns.tsx logic

## Other Shadcn/ui Components:

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

##### Form Field with Select (inside a form)

- I did not create form here as it requires more logic

```javascript
                <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
```

##### Calendar

- I kinda simply copied the calendar from the docs, and Tom showed some p´rops, such as:
  - From and to (fromMonth, fromYear, toDate etc) to define the calendar range
  - Disable, which receives a callback and we can create a logic to disable some days (such as weekend for example)
  - we are gonna create a dropdown menu, which is this captionLayout below, and it _needs_ the fromSomehting (fromDate, or fromMont, fromYear) and toSomething to work
  - defaultMonth={field.value} - Make sthe calendar to opens in the selected month (instead of today's month)

```javascript
<Calendar
  mode="single"
  defaultMonth={field.value}
  selected={field.value}
  onSelect={field.onChange}
  // disabled={(date) =>
  //   date > new Date() || date < new Date("1900-01-01")
  // }
  initialFocus
  captionLayout="dropdown-buttons" // Needs to have a fromSomething (date, month, year) and toSomething
  fromDate={new Date(1940, 0, 1)}
  toDate={new Date()}
/>
```

## Next New Concepts During the Course

- Routing Groups - Naming the folder wrapped in () will not affect the URL

  - e.g.: Our landing page in the (logged-out) folder

- layout.tsx
  - Will render the group, so we are building a layout for our logged out route group

## Other Observations During the Course

- About Shadcn Theme and Styles: Shadcn configs our tailwind config with customized colors which we can change and use (such as primary, destructive etc)

#### General Styles / Front End concepts

- **Must remember:** If you apply auto margins to a flex item, that item will automatically extend its specified margin to occupy the extra space in the flex container, depending on the direction in which the auto-margin is applied.

  - Inside a flex element, ml-auto set the element to the right;
  - mt-auto sets the element to the bottom;

- Tom creates his layouts using grids
  - Also in the example below, `grid-cols-[250px_1fr]` stands for the sidebar with 250px and 1fr to fill the remaining space

```javascript
return <div className="grid grid-cols-[250px_1fr]"></div>;
```

- flex grow: Expands the size of the flex component to fill all space

- Dark Mode: We set a component that toggles the 'dark' class in the body (check light-dark-toggle.tsx)

- "tracking-wider" is the tailwind for letter-spacing

- `className="fixed right-2 top-[calc(50%-12px)]"` Just to show to to be specific in a measure - We wanted to center the light/dark icon, so 24px was its full size, and then we calculated its half to be on the center

- `<small>Some text here</small>`: small tag is for small text, such as those 'copyrights' on the footer

##### Password input style

Check the password-input.tsx, which has a toggle passwordIsShown function (input type conditionally being "password" or "text"), and the input padding to avoid the icon overlap the pw text
