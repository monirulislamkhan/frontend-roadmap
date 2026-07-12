# Senior Frontend Developer Roadmap — Monirul Islam Khan

> My personal 15-month roadmap: Senior UI Developer → Senior Frontend Developer. Updated weekly.

_Started: July 2026 | Last updated: 12 July 2026 | Commitment: 6–8 hours a week | 📋 Weekly progress: [weekly-log.md](./weekly-log.md)_

---

## Progress so far (12 July 2026)

- ✅ This repo is live — roadmap and weekly-log.md are ready
- ✅ GitHub profile cleaned up — name, bio, photo, new README (consistent with my resume)
- ✅ Portfolio site is built (HTML + Tailwind, ~42KB) — **publishing is pending:** screenshots, resume.pdf, GitHub Pages
- ⏳ Left in Phase 0: learning log + calendar slots
- ⏳ Phase 1 (JavaScript) starts right after the portfolio goes live

---

## How to use this document

1. Save this file on your phone and laptop.
2. Open it **every Sunday** and check what this week's work is.
3. Move to the next phase only after passing the milestone test. **Never break the order.**
4. Tick the boxes as you finish things.
5. Every topic below has sub-points and a practice task. The sub-points tell you _what_ to learn; the practice task tells you _how to prove it to yourself_. A topic is done when the practice task works — not when the video ends.

---

## GOLDEN RULES — 5 rules to stay on track

**Rule 1: The order is fixed.** JS → TypeScript → React → Next.js → Senior skills. Do not jump straight to React — that was the old mistake. React stayed weak because the JS under it was weak.

**Rule 2: One thing at a time.** A new tutorial, framework, or course will show up. Ignore it. Only the current phase matters. Shiny new things are the biggest enemy of this plan.

**Rule 3: Watching a video is not learning.** Spend at least 70% of the time writing code, 30% watching or reading. If you did not build it, you did not learn it.

**Rule 4: AI is a teacher, not a ghost-writer.** While learning, do not let AI write the code. Ask it to explain, review your code, or point out what is wrong. Then fix it yourself. (Using AI for speed at the office is a different thing — that is fine.)

**Rule 5: The 30-minute rule.** Stuck on a problem for more than 30 minutes? Ask AI or Google for a hint — not the full solution. Then finish it yourself. One extra rule from learning science: after AI explains something, close the chat and explain it back in your own words. If you cannot, you have not learned it yet.

---

## PHASE 0: Setup (Week 0 — this week)

**To do:**

- [x] Create the GitHub repo: `frontend-roadmap` — roadmap and weekly log live here, and every week's code gets pushed here too ✅ _(12 July 2026)_
- [x] Get VS Code + Git ready ✅ _(already my daily tools)_
- [ ] Start a "Learning Log" in a notebook or notes app. After every session, write 2 lines in your own words: what I learned today, what I did not understand. Writing it in your own words is the test — copying a definition does not count.
- [ ] Block 3–4 fixed slots in the calendar every week (for example: Mon/Wed/Fri, 1.5 hours at night + Sunday, 2 hours)

**Why:** Without fixed time slots, "I will do it tomorrow" takes over. A calendar block is a commitment.

---

## PHASE 1: JavaScript Foundation (Months 1–3) ⭐ THE MOST IMPORTANT PHASE

**Why this comes first:** React has stayed weak for 4 years because the JavaScript under it is weak. Foundation first, building later.

**How to practice in this phase:** every practice task below uses property data, because real estate is my domain. Make one file, `properties.js`, with 15–20 property objects (name, city, price, bhk, type) and reuse it everywhere.

### Month 1 — Core JavaScript

- [ ] **Variables, data types, `let/const`, template literals**
  - `const` by default; `let` only when the value will change; never `var` (learn _why_: function scope vs block scope)
  - The basic types: string, number, boolean, `null`, `undefined` — and checking them with `typeof`
  - Arrays and objects are copied _by reference_, not by value — this one causes real bugs, slow down here
  - Template literals: `` `${price}` `` instead of string + string; also multi-line strings
  - _Practice: write a function that takes a property object and returns a card string like "3 BHK in Noida — ₹75 L". Change one value, run again._

- [ ] **Arrays, deeply: `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`**
  - `map` = transform every item into something new (property objects → price strings)
  - `filter` = keep only the items that pass a test (only Noida, only under ₹50 L)
  - `reduce` = turn a whole array into one value (total value, average price, count per city)
  - `find` = the first match; `some` / `every` = "at least one?" / "all of them?"
  - `sort` with a compare function — and the classic trap: `sort()` without one sorts numbers as strings
  - Chaining: `properties.filter(...).map(...)` — read it left to right like a sentence
  - _Practice: from your properties array, get (1) the cheapest property, (2) the average price, (3) only 2 BHK in one city, sorted low to high, (4) total value of all listings. No loops allowed — only these methods._

- [ ] **Objects: destructuring, spread `...`, optional chaining `?.`**
  - Destructuring: `const { price, city } = property;` — also with rename and default values
  - Nested destructuring for objects inside objects
  - Spread to copy and update _without_ changing the original: `{ ...property, price: newPrice }`
  - Optional chaining: `property?.agent?.phone` — no crash when something is missing
  - `Object.keys`, `Object.values`, `Object.entries` — turning objects into arrays so the array methods work on them
  - _Practice: write `applyDiscount(property, percent)` that returns a NEW object with the reduced price — the original must stay untouched. Prove it by logging both._

- [ ] **Functions: arrow functions, callbacks, how `this` behaves**
  - Arrow syntax: one line with implicit return vs a block with `return`
  - Default parameters: `function search(city = "Noida")`
  - Callbacks: a function passed into another function — you already use them in `map`/`filter`; now write one of your own
  - `this`: how it differs in a normal function vs an arrow function, and why click handlers get confusing
  - _Practice: write your own `myFilter(array, testFn)` that works like the real `filter`. If you can build it, you understand callbacks._

- [ ] **DOM work: querySelector, events, classList**
  - `querySelector` / `querySelectorAll` — and the difference in what they return
  - `addEventListener` for `click`, `input`, `submit` — and the `event` object (`event.target`, `preventDefault`)
  - `classList.add / remove / toggle` — you already know the CSS side; this is the JS side of it
  - Creating elements: `createElement` + `append`, or building card HTML with template literals
  - Event delegation: one listener on the parent instead of twenty on the children
  - _Practice: render your property array as cards on a page. Add one button that toggles a "dark" class on the body. You know the CSS; now drive it from JS._

**Month 1 project:** _Filterable Property Listing_ (pure JS, no framework)
— One page with 15–20 properties as an array of objects. Filter buttons (price, location, BHK). A search box. All in plain JS.
— Real estate is my own domain, so this project will also be useful in interviews.

### Month 2 — Async JavaScript (critical for React)

- [ ] **Promises: what they are, why they exist, `.then/.catch`**
  - A Promise = an object that represents a value that will arrive _later_
  - Three states: pending → fulfilled or rejected — learn to say this in your own words
  - `.then()` for success, `.catch()` for failure, chaining multiple `.then()`s
  - Why they exist: what "callback hell" looked like before them
  - _Practice: wrap `setTimeout` in a Promise — a `wait(ms)` function you can call as `wait(2000).then(...)`._

- [ ] **`async/await` — practice this until you can write it with your eyes closed**
  - `async` in front of a function means it returns a Promise; `await` pauses until the Promise settles
  - `await` only works inside an `async` function
  - Errors are handled with `try/catch` — this is the pattern you will write hundreds of times in React
  - Sequential vs parallel: two `await`s one after another vs `Promise.all([...])` — and when each is right
  - _Practice: rewrite your `.then()` chains from the Promises topic using `async/await`. Same result, cleaner code._

- [ ] **`fetch` API: GET, POST, error handling, loading states**
  - Basic GET: `fetch(url)` → check `response.ok` → `response.json()`
  - The trap: fetch does NOT reject on a 404 — you must check `response.ok` yourself
  - POST: method, headers (`Content-Type: application/json`), `body: JSON.stringify(data)`
  - The loading-state pattern: set a `loading` flag before, clear it after, show an error message on failure — this exact pattern is half of React data work
  - _Practice: fetch users from jsonplaceholder.typicode.com and render them as cards, with a "Loading..." message while waiting and an error message if the URL is wrong (break it on purpose to test)._

- [ ] **JSON: parse, stringify**
  - `JSON.stringify` (object → string) and `JSON.parse` (string → object)
  - Where you need them: APIs and localStorage — both only speak strings
  - What breaks: parsing invalid JSON throws an error, so parse inside `try/catch`
  - _Practice: stringify a property object, look at the string, parse it back, confirm it is a real object again._

- [ ] **Closures — an interview favourite**
  - A function remembers the variables of the place where it was _created_, even after that place is gone
  - The classic example: a counter function that keeps its own private count
  - Where you already use them without knowing: every event handler that reads an outer variable
  - _Practice: write `makeCounter()` that returns a function; each call returns 1, 2, 3... Then explain out loud WHERE the count lives. That explanation is the interview answer._

**Month 2 project:** _Live Data Dashboard_
— Fetch data from a free public API (weather, currency, anything) and display it. Handle everything: loading spinner, error message, retry button. This exact pattern comes up in React every single day.

### Month 3 — Polish + Modules

- [ ] **ES6 modules: `import/export`**
  - Named exports (`export const x`) vs default export (`export default`) — and how each is imported
  - One file, one job: `data.js`, `filters.js`, `render.js` instead of one giant file
  - In the browser: `<script type="module">`
  - _Practice: split your Month 1 project into 3 module files. It should work exactly the same after the split._

- [ ] **Tricky array/object patterns: flattening nested data, grouping**
  - `flat()` and `flatMap()` for arrays inside arrays
  - Grouping with `reduce`: properties → `{ Noida: [...], Gurgaon: [...] }`
  - Removing duplicates with `Set`: `[...new Set(array)]`
  - Sorting an array of objects by a key (price, name) — ascending and descending
  - _Practice: from your properties array, build a "count per city" object and a unique list of cities. Both with reduce/Set, no loops._

- [ ] **localStorage basics**
  - `setItem`, `getItem`, `removeItem` — and the rule: it only stores strings
  - So: `JSON.stringify` on the way in, `JSON.parse` on the way out
  - Write two small helpers, `save(key, data)` and `load(key)`, and reuse them everywhere
  - _Practice: add a "favourite" button to your property cards; favourites must survive a page refresh._

- [ ] **Proper error handling with `try/catch`**
  - `try/catch/finally` — and `throw new Error("message")` for your own errors
  - Catch errors where you can _do something about them_ (show a message), not everywhere
  - The sin to avoid: an empty `catch {}` that silently eats errors
  - _Practice: in your dashboard project, make sure every failure path shows the user a readable message — never a blank screen, never only a console error._

**Month 3 project:** _Form + Validation + Storage_
— A property-enquiry form: validation (email, phone), showing errors, saving to localStorage on submit, and rendering the list of saved entries.

### ✋ PHASE 1 MILESTONE TEST (pass this before moving on):

1. Without Google or AI: can you fetch data from an API and render it as cards on a page?
2. Can you explain the difference between `map` and `forEach`, and give one real use of `reduce`?
3. Can you write error handling with `async/await`?

The test is simple: explain it out loud, then do it, without help. **All three "yes" = start Phase 2. Any "no" = two more weeks. No rushing.**

---

## PHASE 2: TypeScript (Months 3–4)

**Why:** In 2026, TypeScript is the baseline — it is in every Senior Frontend job post. And once JS is strong, TS is easy. It is just JS with types.

- [ ] **Basic types: string, number, boolean, arrays, and how to avoid `any`**
  - Annotations: `const price: number = 75` — and _inference_: TS often knows the type by itself, so do not annotate what it already knows
  - Array types: `string[]`, `Property[]`
  - `any` turns TypeScript off — that is why it is banned; `unknown` is the honest version when you really do not know the type
  - _Practice: take one Phase 1 file, rename it `.ts`, and fix every red line without using `any` once._

- [ ] **Interfaces and type aliases — typing objects**
  - `interface Property { name: string; price: number; }` — the shape of your data, written down
  - Optional properties (`agent?: string`) and `readonly`
  - Extending: `interface Flat extends Property`
  - Interface vs type alias: for objects either works — pick `interface` and stay consistent
  - _Practice: write the `Property` interface for your own property data. Add a wrong field to an object on purpose and read the error TS gives you._

- [ ] **Typing functions: parameters, return types**
  - Parameter types and return types: `function total(list: Property[]): number`
  - `void` for functions that return nothing
  - Typing callbacks: `(p: Property) => boolean` — this is what `filter` expects
  - _Practice: type your own `myFilter` from Phase 1, fully. If you can type a callback, you understand both topics._

- [ ] **Union types (`string | number`), optional properties (`?`)**
  - Unions: a value that can be one of a few things — `status: "sale" | "rent"` (literal unions are everywhere in real code)
  - Narrowing: inside `if (typeof x === "string")`, TS knows which side of the union you are on
  - _Practice: give Property a `status: "sale" | "rent"` field and write a function that behaves differently for each — with TS forcing you to handle both._

- [ ] **Generics at a BASIC level (not deep, just enough to read them)**
  - `Array<string>` is a generic you already use
  - Read a simple one: `function first<T>(items: T[]): T` — "T is a placeholder for whatever type comes in"
  - Goal at this stage: _read_ generics without fear. Writing complex ones comes later, in React (`useState<Property[]>`).
  - _Practice: write `first<T>` yourself and call it with a string array and a Property array. Watch T change._

**Project:** Nothing new — **convert all three Phase 1 projects to TypeScript.** Converting your own code is the best practice there is. You understand everything while typing it.

### ✋ PHASE 2 MILESTONE TEST:

1. Can you write an interface for an API response?
2. Can you read `tsc` errors and fix them yourself, without asking AI?

**Both "yes" = Phase 3.**

---

## PHASE 3: React — From Weak to Strong (Months 4–8) ⭐ THE LONGEST PHASE

**Why 4 months:** This is the skill that changes the job title. No rushing — depth is the goal.

### Months 4–5 — Hooks, properly

- [ ] **`useState` — from simple to complex state**
  - The rule: state changes → React re-renders. That one sentence is half of React.
  - Functional updates: `setCount(prev => prev + 1)` — and _when_ you need this form
  - State with objects and arrays: always a NEW object/array (`setList([...list, item])`) — your spread practice from Phase 1 pays off here
  - Lifting state up: when two components need the same data, the state moves to their parent
  - _Practice: a counter, then a favourites list (add/remove properties), then the same list shared between two components via the parent._

- [ ] **`useEffect` — dependency array, cleanup, common mistakes**
  - It runs _after_ render — for things React does not do itself: fetching, timers, listeners
  - The dependency array: `[]` = once, `[city]` = when city changes, missing = every render (almost always a bug)
  - Cleanup: return a function to remove listeners/timers — and _when_ React calls it
  - The infinite-loop mistake: setting state inside an effect that depends on that same state — learn to spot it
  - _Practice: fetch properties inside useEffect with loading/error state. Then break it on purpose (remove the deps array), watch the loop, fix it, and explain why it happened._

- [ ] **Conditional rendering, lists + keys**
  - `&&` for "show or nothing", ternary for "this or that", early `return` for whole-component cases
  - Rendering lists with `map` — and why every item needs a stable `key`
  - Why `key={index}` is a trap when the list can reorder or filter
  - _Practice: render your property list with proper keys; show "No results" when a filter matches nothing._

- [ ] **Forms in React (controlled components)**
  - Controlled input: `value` from state + `onChange` updating state — the input's truth lives in React
  - Several inputs, one handler, using `name` on each field
  - Submit: `event.preventDefault()`, then validate, then act
  - Showing validation errors from state — your Phase 1 form project, the React way
  - _Practice: rebuild the property-enquiry form as a controlled React form._

- [ ] **Splitting components: when one component should become two**
  - One component, one job — if you cannot name its job in a few words, it is two components
  - Signals to split: JSX getting long, the same block repeated, one part re-rendering for no reason
  - Data flows down through props; events flow up through callback props (`onSelect={...}`)
  - _Practice: take your listing page and split it into List → Card → FilterBar. Pass data down, pass clicks up._

- [ ] **Props vs state — which one, when**
  - Props: given by the parent, read-only. State: the component's own changing data.
  - The one question that decides it: "_who changes this value?_" Parent changes it → prop. This component changes it → state.
  - Deriving instead of duplicating: if it can be _calculated_ from existing props/state, do not store it in state
  - _Practice: in your split components, point at every piece of data and say out loud: prop or state, and why._

**Project:** Rebuild the Phase 1 _Property Listing_ in React + TypeScript. Same features, the React way.

### Month 6 — State Management + Custom Hooks

- [ ] **Context API: global state like theme or user**
  - The problem it solves: passing the same prop through five levels ("prop drilling")
  - `createContext` → `<Provider value={...}>` → `useContext` in any child
  - When context is right (theme, logged-in user, language) and when plain props are still better (almost everything else)
  - _Practice: add a dark/light theme to your app with Context — one toggle, every component follows._

- [ ] **Writing custom hooks: build `useFetch` and `useLocalStorage` yourself**
  - A custom hook = a normal function that uses hooks — that is all it is
  - Rules of hooks: only at the top level, only in components/hooks (and _why_ those rules exist)
  - Extract `useFetch(url)` returning `{ data, loading, error }` from your repeated fetch code
  - Then `useLocalStorage(key, initial)` — state that survives refresh
  - _Practice: replace every copy-pasted fetch block in your app with your own useFetch. Feel the difference._

- [ ] **`useMemo` and `useCallback` — when you need them, and when you do NOT**
  - `useMemo` caches a calculated _value_; `useCallback` caches a _function_
  - Why: so children that compare references do not re-render for nothing
  - The honest rule: do NOT sprinkle them everywhere — measure first, memoize second
  - _Practice: memoize one genuinely heavy calculation (filtering + sorting a big list) and confirm in DevTools that it stopped recalculating._

- [ ] **Zustand (or Redux Toolkit) basics — pick whichever shows up more in target job posts**
  - What a store is: state that lives outside the component tree
  - Zustand: `create()` a store, read with a selector, update with actions — small and clean
  - When a store beats Context: many components, frequent updates, less boilerplate
  - _Practice: move the favourites list into a store; add/remove it from any component._

### Month 7 — Data Fetching (the 2026 standard)

- [ ] **TanStack Query (React Query): queries, mutations, caching, loading/error states**
  - `useQuery({ queryKey, queryFn })` — and what the query key really does (it IS the cache address)
  - Loading, error, and refetching handled _for_ you — compare with your hand-written useFetch and see what you no longer write
  - `staleTime` and caching: why the second visit is instant
  - `useMutation` for POST/PUT/DELETE + invalidating queries so lists refresh automatically
  - _Practice: swap your useFetch for useQuery in the listing app. Then add an enquiry form with useMutation that refreshes the list on success._

- [ ] **Implement pagination or infinite scroll at least once**
  - Page-based first: a page number in the query key, Next/Previous buttons
  - Then "Load more": `useInfiniteQuery` or a simple page counter
  - Optional upgrade: trigger loading with IntersectionObserver instead of a button
  - _Practice: paginate your property list, 6 cards per page._

### Month 8 — Start the FLAGSHIP PROJECT

**Project:** _Real-Estate Web App_ — my proof of skill:

- React + TypeScript + TanStack Query
- Property list, detail page, filters, favourites (localStorage)
- Build order: list → filters → detail page → favourites. One feature fully done before the next.
- This is where the CSS mastery shines — pixel-perfect, responsive, accessible
- Push to GitHub with clean commits

**This project goes on the resume and in the portfolio.**

### ✋ PHASE 3 MILESTONE TEST:

1. When does `useEffect` need a cleanup function? Explain with an example.
2. Can you write a custom hook from scratch, without looking one up?
3. "Why is this component re-rendering?" — can you debug that?
4. Can you explain every line of the flagship project?

**All four "yes" = Phase 4.**

---

## PHASE 4: Next.js Depth (Months 8–11)

**Why:** Frontend in 2026 is server-first. I already have Next.js exposure — now I need understanding. Bonus: my SEO knowledge applies here directly.

- [ ] **App Router: file-based routing, layouts, nested routes**
  - A folder in `app/` = a route; `page.tsx` = the page; `layout.tsx` = the shared frame around it
  - Nested folders = nested routes and nested layouts
  - Dynamic routes: `app/properties/[id]/page.tsx` — the detail-page pattern
  - `<Link>` for navigation; `loading.tsx` and `error.tsx` give you loading/error UI for free
  - _Practice: rebuild your app's routes as folders — list page, detail page with [id], shared layout with the header._

- [ ] **Server Components vs Client Components — which one, when, and WHY**
  - Default = Server Component: renders on the server, ships less JS to the browser
  - `"use client"` only where there is interactivity: state, effects, event handlers
  - The mental model: pages are server; buttons, forms, and toggles are small client islands
  - _Practice: go through your app and mark every component S or C — then justify each one out loud._

- [ ] **SSR vs SSG vs ISR — explain the difference in one line each**
  - SSG: built once at build time — fastest, for pages that rarely change
  - SSR: built on every request — for truly per-request data
  - ISR: built once, then rebuilt in the background every N seconds — the middle path, perfect for property listings
  - _Practice: say all three lines from memory, then decide: which one for a property detail page, and why? (This is an interview question, word for word.)_

- [ ] **Data fetching in the App Router (fetching on the server)**
  - Server components can be `async` — `await fetch(...)` directly in the component, no useEffect needed
  - Caching controls: `cache: "no-store"` (always fresh) vs `next: { revalidate: 60 }` (ISR)
  - Where TanStack Query still fits: client-side interactivity after the first server render
  - _Practice: make the property list fetch on the server; keep favourites client-side._

- [ ] **Metadata API — SEO through Next.js (my strong area)**
  - Static: `export const metadata = { title, description }`
  - Dynamic: `generateMetadata()` — a title built from the property's own data
  - Open Graph and Twitter Card tags through the same API — the exact markup I already write by hand at work, now the Next.js way
  - _Practice: give every property detail page its own title, description, and OG image. Test with a link-preview checker._

- [ ] **Image optimization with `next/image` — connects straight to my 40% load-time story**
  - Automatic resizing, lazy loading, and modern formats — what I did manually for years, built in
  - `fill` vs fixed `width/height`, and the `sizes` attribute for responsive images
  - `priority` for the above-the-fold image (the LCP image)
  - _Practice: replace every `<img>` in the app with `next/image`, run Lighthouse before and after, write the numbers down._

- [ ] **Deploy on Vercel**
  - Connect the GitHub repo → every push deploys; every PR gets a preview URL
  - Environment variables go in the Vercel dashboard — API keys never go in the repo
  - Check the live URL with Lighthouse — production numbers, not localhost numbers
  - _Practice: deploy, then break the build on purpose with a TS error, read Vercel's log, fix it. Now you know the full loop._

**Project:** Migrate the flagship real-estate app to **Next.js and deploy it on Vercel.** A live URL is proof worth putting on a resume.

**🎨 After Phase 4 — Portfolio v2:** Rebuild the current portfolio (HTML + Tailwind) in **React + Next.js + Tailwind + Framer Motion**. Same design, same content — only the tech stack gets the upgrade. The rebuild itself becomes a real React/Next project. One condition: Lighthouse must stay at 95+ after the rebuild.

### ✋ PHASE 4 MILESTONE TEST:

1. Server Component vs Client Component — what is the difference, and when do you use which?
2. Is the app deployed on a live URL with Lighthouse 90+? (Performance is my specialty — if it is not 90+ here, something is wrong.)

**Both "yes" = Phase 5.**

---

## PHASE 5: Senior-Level Gaps (Months 11–15)

**These are the things that turn a "developer" into a "Senior":**

### Testing (Months 11–12)

- [ ] **Vitest + React Testing Library basics**
  - `render()` a component, then find things the way a _user_ would: `getByRole`, `getByText`, `getByLabelText`
  - Simulate the user: `userEvent.click`, `userEvent.type`
  - The golden rule: test what the user sees and does, not the component's internals
  - `renderHook` for testing your custom hooks directly
  - _Practice: one test that renders a Card and checks the price is visible; one test that clicks "favourite" and checks the change shows up._

- [ ] **Write 8–10 tests for the flagship app (components, hooks)**
  - Cover: Card renders correctly, filters actually filter, the form validates, useFetch/useQuery handles the error state
  - Watch a test _fail first_, then pass — a test that cannot fail proves nothing
  - _Practice: break one component on purpose and confirm the right test catches it._

### Git — from weak to confident (Month 12, 2 focused weeks)

- [ ] **Branching, merging, resolving merge conflicts yourself**
  - `git switch -c feature/x` → work → commit → merge back
  - Create a conflict ON PURPOSE (edit the same line on two branches), then resolve it by hand — twice
  - Read the conflict markers (`<<<<<<<`) until they stop being scary
  - _Practice: the two-branch conflict drill, start to finish, without AI._

- [ ] **The Pull Request workflow (open PRs in your own repo, on purpose)**
  - Branch → push → open a PR on GitHub → read your own diff line by line → merge
  - Write a real PR description: what changed and why
  - This is exactly how teams work — practicing it solo removes the fear before the first team PR
  - _Practice: from Month 12 onward, every feature in every project goes through a PR. No exceptions._

- [ ] **A basic understanding of `rebase`**
  - What it does: replays your commits on top of the latest main — a straight line instead of merge bubbles
  - When it is used (updating a feature branch) and the one safety rule: never rebase a branch others are using
  - Goal: _understand_ it and follow along when a team uses it — daily rebasing can come later
  - _Practice: rebase one of your own feature branches onto main, once, slowly._

**Practice trick:** make feature-branch → PR → merge the routine in every project. No more committing straight to main.

### React Performance (Month 13)

- [ ] **Watch re-renders with the React DevTools Profiler**
  - Record an interaction, read the flame graph: which components rendered, and _why_
  - Find one component that re-renders without needing to — that is the skill
  - _Practice: profile your flagship app's filter interaction and list every component that renders on one keystroke._

- [ ] **Code splitting, `lazy` + `Suspense`**
  - `React.lazy()` + `<Suspense fallback>`: load heavy parts only when needed
  - In Next.js, routes are already split — apply lazy to heavy below-the-fold components
  - _Practice: lazy-load one heavy component and watch the network tab prove it loads later._

- [ ] **Bundle size analysis**
  - Run the bundle analyzer, find the biggest packages, ask of each: do we need all of this?
  - Classic wins: a lighter date library, importing one function instead of a whole library
  - _Practice: find and shrink (or remove) one oversized dependency; record the before/after bundle size._

**Ten years of performance instinct transfers here directly — this is home ground.**

### Architecture Thinking (Months 14–15)

- [ ] **Folder structure patterns (feature-based)**
  - Group by feature (`features/properties/`, `features/favourites/`), not by file type
  - Shared building blocks live in `components/ui/`; shared logic in `lib/` or `hooks/`
  - _Practice: restructure the flagship app feature-based. If a file is hard to place, its component probably has two jobs._

- [ ] **Component boundaries: reusable vs page-specific**
  - Reusable = knows nothing about your data ("Button", "Modal"); page-specific = knows the domain ("PropertyCard")
  - Keep reusable components dumb: props in, events out, no fetching inside
  - _Practice: pick 5 components and label each one reusable or page-specific — then check the imports agree with you._

- [ ] **Write a README for the flagship project explaining the architecture decisions**
  - For each big choice, one honest paragraph: "I did this because..." — including one thing you would do differently now
  - Cover: folder structure, state choices (what is in the store vs local), data fetching approach, styling approach
  - That is the real question in senior interviews — this README is the rehearsal.
  - _Practice: give the README to someone (or Claude) and ask: "could you find your way around my codebase from this alone?"_

---

## PARALLEL TRACK (all 15 months, alongside everything)

- [x] **Portfolio site** — ✅ built (July 2026, HTML + Tailwind — ahead of schedule!). Still left: **publishing** (screenshots + resume.pdf + GitHub Pages). After Phase 4, the v2 rebuild in React/Next.
- [ ] **Ask for React/Next work at the office** — real work is the strongest resume proof there is
- [ ] **Use AI tools daily** (Claude Code / Copilot / Cursor) — for speed at work, for explanations while learning
- [ ] **Last Sunday of every month:** open this file, tick the boxes, read next month's plan

---

## WHEN TO CHANGE THE TITLE — Final Checklist

Write **"Senior Frontend Developer"** on the resume only when ALL of this is true:

- [ ] You write new TypeScript code comfortably
- [ ] The flagship Next.js app is live, and you can explain every decision in it
- [ ] Interview questions about hooks, state, and re-renders do not scare you
- [ ] You branch, PR, and merge on Git with confidence

Until that day: earn as **"Senior UI Developer"**, with pride. A hybrid title also works during the transition: _"Senior UI Developer | React & Next.js"_.

---

## IF YOU GET STUCK (troubleshooting)

**"I have done nothing for 2 weeks"** → No guilt. Start again from where you stopped. Direction matters, not streaks.

**"This topic makes no sense"** → Apply the 30-minute rule → ask AI to "explain this like I am a beginner" → build a small example yourself → still stuck? Give that topic a 2-day break and learn it by using it inside a project.

**"A new framework/course showed up, maybe I should do that instead"** → Read Rule 2. No.

**"I feel like I am going too slow"** → This is a 15-month plan. You will not feel senior in month 5 — that is normal. The milestone tests are the real speedometer, not feelings.

**"A job interview came up in the middle"** → Pause the roadmap, spend 1–2 weeks on focused revision of that job post's topics, then come back.

---

_After every phase — or whenever confused — go to Claude: code review, mock interview questions, or a role-fit analysis of any job post. Any time._
