## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Showcase

![Alt Text](https://github.com/douglasliralima/beverage-guide/blob/main/projectShowcase.gif)

## Tools

### Next

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Which give to me a quick environment config, with the <b>eslint</b>, <b>css modules</b>, <b>tsconfig</b> and <b>next.config</b>.

Other reasons to use that was to generate a more optimized website, easy startup and also to use the challenge of this project as an opportunity to learn more about the tool.

### Test

As it is a low-complexity project in terms of programming logic, as we can see when looking at the methods that are composed of a single line, in the only store of the entire project, the <b>user</b>:
  
![image](https://user-images.githubusercontent.com/28794821/163867186-dd4badc0-4e02-44f9-bf38-d93ce7694f85.png)

I found it enough to just use eslint for this task.

### Automation

In order to always test the code before each pull request, I built a CI github action, capable of running the project and performing the lint check. Being responsible for a lot of corrections related to what I was doing in the target branch, as can be seen in [PR 6](https://github.com/douglasliralima/beverage-guide/pull/6).

### Folder Division

The choice of nextjs ended up having an impact here, as it is an opinionated framework when it comes to folder division:

```txt
├── pages
│   ├── _app.tsx
│   ├── beverages
│   │   ├── Beverages.module.css
│   │   └── index.tsx
│   └── index.tsx
├── components
│   └── BeverageCard
│       ├── BeverageCard.tsx
│       └── beverage.module.css
├── public -> Folder with all assets used in this project
│   ├── bee.png
│   ├── components -> Images related to our components
│   │   └── beverageCard
│   └── pages
│       └── beverages
├── service -> Components responsible to communicate with APIs 
│   └── OpenBreweryService.ts
├── store
│   └── user.ts
├── styles -> Global and the index styles
│   ├── globals.css
│   └── Home.module.css
├── next.config.js
├── next-env.d.ts
├── package.json
├── tsconfig.json -> TypeScript config
```

### Completed Bonus

[x] - Implement using Typescript

[x] - Save user name in the global state (feel free to use any tool/library)

[x] - Write component/UI tests (suggested tool: using cypress)

[x] - Responsivity

[x] - Implement add more feature

[x] - If the user clicks in the tag add more, than a input should be displayed and when the user hits enter, or click in the check icon it became a regular tag (no integration with back end)

[x] - Validate if the user entered only valid characters in the first screen

[x] - Loading state and lazy loading

[x] - Error handling

[x] - Showing your work through your Git commit history.
