# Senior Frontend Developer Roadmap

> My personal 15-month roadmap: Senior UI Developer → Senior Frontend Developer. Updated weekly.

_Started: July 2026 | Last updated: 27 July 2026 | Commitment: 6–8 hours a week | 📋 Weekly progress: [weekly-log.md](./weekly-log.md)_

---

## PROGRESS SO FAR

**Currently in: Phase 1 → Month 1 → Week 1 warm-up.**

Done so far:

- Repo created, VS Code and Git ready (Phase 0)
- Portfolio site built in HTML + Tailwind — ahead of schedule, not published yet
- Week 1 warm-up, first half: type coercion, `==` vs `===`, truthy/falsy, and short-circuit with `||` and `&&`

Still open in Week 1: `??`, loops, string methods, number methods.

Still open in Phase 0: the Learning Log and the fixed calendar slots. Both are honest gaps, not finished work.

---

## GOLDEN RULES — 5 rules to stay on track

**Rule 1: The order is fixed.** JS → TypeScript → React → Next.js → Senior skills. Do not jump straight to React — that was the old mistake. React stayed weak because the JS under it was weak.

**Rule 2: One thing at a time.** A new tutorial, framework, or course will show up. Ignore it. Only the current phase matters. Shiny new things are the biggest enemy of this plan.

**Rule 3: Watching a video is not learning.** Spend at least 70% of the time writing code, 30% watching or reading. If you did not build it, you did not learn it.

**Rule 4: AI is a teacher, not a ghost-writer.** While learning, do not let AI write the code. Ask it to explain, review your code, or point out what is wrong. Then fix it yourself. (Using AI for speed at the office is a different thing — that is fine.)

**Rule 5: The 30-minute rule.** Stuck on a problem for more than 30 minutes? Ask AI or Google for a hint — not the full solution. Then finish it yourself. One extra rule from learning science: after AI explains something, close the chat and explain it back in your own words. If you cannot, you have not learned it yet.

**How a topic gets its tick:** a topic is done when its practice task runs AND you can explain it out loud in your own words. Not when the video ends.

---

## PHASE 0: Setup (Week 0 — this week)

**To do:**

- [x] Create the GitHub repo: `frontend-roadmap` — roadmap and weekly log live here, and every week's code gets pushed here too ✅ _(12 July 2026)_
- [x] Get VS Code + Git ready ✅ _(already my daily tools)_
- [x] Start a "Learning Log" in a notebook or notes app. After every session, write 2 lines in your own words: what I learned today, what I did not understand. Writing it in your own words is the test — copying a definition does not count.
- [x] Block 3–4 fixed slots in the calendar every week (for example: Mon/Wed/Fri, 1.5 hours at night + Sunday, 2 hours)

**Why:** Without fixed time slots, "I will do it tomorrow" takes over. A calendar block is a commitment.

---

## PHASE 1: JavaScript Foundation (Months 1–3) ⭐ THE MOST IMPORTANT PHASE

**Why this comes first:** React has stayed weak because the JavaScript under it is weak. Foundation first, building later.

**How to practice in this phase:** every practice task below uses property data, because real estate is my domain. Make one file, `properties.js`, with 15–20 property objects (name, city, price, bhk, type) and reuse it everywhere.

### Month 1 — Core JavaScript

- [x] **Week 1 warm-up: values, operators, conditions, loops** _(the base under everything — do not skip it just because it looks easy)_ — **in progress, about half done**
  - ✅ Operators: `+ - * / %`, `+=`, `++` — and the string trap: `"5" + 1` is `"51"`, `"5" - 1` is `4`
    - The rule that made it click: `+` leans towards strings, every other maths operator leans towards numbers
    - Convert first, then do the maths: `Number(value) + 5`, never `Number(value + 5)`
  - ✅ `===` vs `==`: always triple. Learn WHY double is dangerous (it converts types silently)
    - `==` turns different types into numbers and then compares. One exception: `null` and `undefined` match each other and nothing else
    - So `value == null` is the one honest use of `==` — it asks "is this missing?" and lets `0` and `""` through
  - ✅ Truthy / falsy: the 6 falsy values (`false, 0, "", null, undefined, NaN`) — this decides how `if (value)` behaves
    - `[]` and `{}` are truthy, which is why `if (results)` never shows "no results"
    - `if (price)` asks "is this truthy?"; `if (price == null)` asks "is this missing?" — on a `0` price those two disagree
  - ✅ `if / else if / else`, ternary `condition ? a : b`, and short-circuit tricks: `value || "default"`, `value && doThing()`
    - Both operators return a value, not `true`/`false`. `||` gives the first truthy one, `&&` stops at the first falsy one
    - That stopping is the safety: `agent && agent.phone` never reaches `.phone` when agent is null
    - The React trap that follows from this: `photos.length && <Gallery />` prints a bare `0`. Use `photos.length > 0 &&`
  - [x] `??` (nullish coalescing): like `||` but only for `null/undefined` — `0 || "x"` vs `0 ?? "x"` give different answers
  - [x] Loops: `for`, `for...of` (arrays), `for...in` (object keys — and why it is rarely what you want), `while`, `break`, `continue`
  - [x] String methods you will use weekly: `includes`, `startsWith`, `toLowerCase`, `trim`, `split`, `slice`, `replace`
  - [x] Number bits: `toFixed(2)` for prices, `parseInt` / `Number()`, `Math.round / min / max`, and what `NaN` is (check with `Number.isNaN`)
  - _Practice: write `priceLabel(price)` that returns "₹75.50 L" style strings, and a loop that prints only properties above a price using `continue`._
    - Half done: a `priceLabel(property)` that separates a missing price from a real `0` runs and is explained. The formatting and the loop part are still open.

- [x] **Variables, data types, `let/const`, template literals**
  - `const` by default; `let` only when the value will change; never `var` (learn _why_: function scope vs block scope)
  - Scope: block `{}` scope vs function scope — and hoisting in one line: declarations move up, values do not
  - The basic types: string, number, boolean, `null`, `undefined` — and checking them with `typeof` (plus the famous bug: `typeof null === "object"`)
  - Arrays and objects are copied _by reference_, not by value — this one causes real bugs, slow down here
  - Shallow copy vs deep copy: spread `{...obj}` copies one level only; nested objects inside are still shared (`structuredClone` for a true deep copy)
  - Template literals: `` `${price}` `` instead of string + string; also multi-line strings and expressions inside `${}`
  - _Practice: write a function that takes a property object and returns a card string like "3 BHK in Noida — ₹75 L". Change one value, run again. Then copy a property with spread, change the copy's nested field, and check the original — see the shallow-copy surprise yourself._

- [ ] **Arrays, deeply: `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`**
  - `map` = transform every item into something new (property objects → price strings)
  - `filter` = keep only the items that pass a test (only Noida, only under ₹50 L)
  - `reduce` = turn a whole array into one value (total value, average price, count per city) — learn the shape: `(accumulator, item) => ...`, plus the starting value
  - `find` = the first match (or `undefined` — handle that); `findIndex` when you need the position
  - `some` / `every` = "at least one?" / "all of them?"
  - `sort` with a compare function `(a, b) => a.price - b.price` — and the classic trap: `sort()` without one sorts numbers as strings. Also: `sort` CHANGES the original array — copy first (`[...arr].sort(...)`)
  - `includes`, `indexOf`, `slice` (copy a part) vs `splice` (cut the original — avoid), `concat`, `reverse`, `join`
  - Chaining: `properties.filter(...).map(...)` — read it left to right like a sentence
  - _Practice: from your properties array, get (1) the cheapest property, (2) the average price, (3) only 2 BHK in one city, sorted low to high, (4) total value of all listings. No loops allowed — only these methods._

- [ ] **Objects: destructuring, spread `...`, optional chaining `?.`**
  - Destructuring: `const { price, city } = property;` — also with rename (`price: cost`) and default values (`agent = "N/A"`)
  - Array destructuring too: `const [first, second] = properties;`
  - Nested destructuring for objects inside objects
  - Spread to copy and update _without_ changing the original: `{ ...property, price: newPrice }` — this exact pattern IS React state updates later
  - Rest in functions and objects: `const { name, ...others } = property;`
  - Optional chaining: `property?.agent?.phone` — no crash when something is missing; pair with `??` for a default
  - `Object.keys`, `Object.values`, `Object.entries` — turning objects into arrays so the array methods work on them
  - Computed keys: `{ [cityName]: count }` — needed later for grouping and React forms
  - _Practice: write `applyDiscount(property, percent)` that returns a NEW object with the reduced price — the original must stay untouched. Prove it by logging both._

- [ ] **Functions: arrow functions, callbacks, how `this` behaves**
  - Function declaration vs function expression vs arrow — and which are hoisted
  - Arrow syntax: one line with implicit return vs a block with `return`; returning an object needs `()` around it: `() => ({ ok: true })`
  - Default parameters: `function search(city = "Noida")`
  - Callbacks: a function passed into another function — you already use them in `map`/`filter`; now write one of your own
  - Passing a function vs calling it: `onClick(handle)` vs `onClick(handle())` — the second one runs immediately, a very common bug
  - `this`: how it differs in a normal function vs an arrow function, and why click handlers get confusing
  - _Practice: write your own `myFilter(array, testFn)` that works like the real `filter`. If you can build it, you understand callbacks._

- [ ] **DOM work: querySelector, events, classList**
  - `querySelector` / `querySelectorAll` — and the difference in what they return (one element vs a NodeList)
  - `addEventListener` for `click`, `input`, `submit` — and the `event` object (`event.target`, `event.preventDefault()`)
  - `input` vs `change` events — which one fires while typing
  - `classList.add / remove / toggle / contains` — you already know the CSS side; this is the JS side of it
  - Reading and writing: `textContent` (safe) vs `innerHTML` (renders HTML — know the risk), `value` for inputs, `dataset` for `data-*` attributes
  - Creating elements: `createElement` + `append`, or building card HTML with template literals
  - Event delegation: one listener on the parent instead of twenty on the children — check `event.target.closest(".card")`
  - _Practice: render your property array as cards on a page. Add one button that toggles a "dark" class on the body. You know the CSS; now drive it from JS._

**Month 1 project:** _Filterable Property Listing_ (pure JS, no framework)
— One page with 15–20 properties as an array of objects. Filter buttons (price, location, BHK). A search box. All in plain JS.
— Real estate is my own domain, so this project will also be useful in interviews.

### Month 2 — Async JavaScript (critical for React)

- [ ] **How JS waits: the event loop, in simple words**
  - JS runs one line at a time (single thread) — so slow things (network, timers) must not block the page
  - `setTimeout(fn, 0)` still runs AFTER all current code finishes — try it, see it, remember it
  - The picture to hold: call stack → browser does the waiting → callback queue → event loop puts it back
  - You do not need the deep theory — you need the one-line answer: "async code runs later, after the current code finishes"
  - _Practice: predict the print order of three logs (one sync, one in setTimeout 0, one in a Promise), then run it and check._

- [ ] **Promises: what they are, why they exist, `.then/.catch`**
  - A Promise = an object that represents a value that will arrive _later_
  - Three states: pending → fulfilled or rejected — learn to say this in your own words
  - `.then()` for success, `.catch()` for failure, `.finally()` for "always run" (hide the spinner here)
  - Chaining multiple `.then()`s — each one receives what the previous one returned
  - Why they exist: what "callback hell" looked like before them
  - `Promise.all([...])` = wait for all together; if one fails, all fails (`Promise.allSettled` when you want results anyway — read-level only)
  - _Practice: wrap `setTimeout` in a Promise — a `wait(ms)` function you can call as `wait(2000).then(...)`._

- [ ] **`async/await` — practice this until you can write it with your eyes closed**
  - `async` in front of a function means it returns a Promise; `await` pauses until the Promise settles
  - `await` only works inside an `async` function (or top-level in modules)
  - Errors are handled with `try/catch` — this is the pattern you will write hundreds of times in React
  - Sequential vs parallel: two `await`s one after another vs `Promise.all([...])` — and when each is right
  - The forgotten-await bug: calling an async function without `await` gives you a Promise, not the value — learn to spot `[object Promise]` in output
  - _Practice: rewrite your `.then()` chains from the Promises topic using `async/await`. Same result, cleaner code._

- [ ] **`fetch` API: GET, POST, error handling, loading states**
  - Basic GET: `fetch(url)` → check `response.ok` → `response.json()`
  - The trap: fetch does NOT reject on a 404 — you must check `response.ok` yourself; it only rejects when the network itself fails
  - `response.status` codes you must recognize: 200, 201, 400, 401, 404, 500
  - POST: method, headers (`Content-Type: application/json`), `body: JSON.stringify(data)`
  - Query params in the URL: `?city=Noida&max=50` — build them with template literals or `URLSearchParams`
  - The loading-state pattern: set a `loading` flag before, clear it after, show an error message on failure — this exact pattern is half of React data work
  - _Practice: fetch users from jsonplaceholder.typicode.com and render them as cards, with a "Loading..." message while waiting and an error message if the URL is wrong (break it on purpose to test)._

- [ ] **JSON: parse, stringify**
  - `JSON.stringify` (object → string) and `JSON.parse` (string → object)
  - Where you need them: APIs and localStorage — both only speak strings
  - What JSON cannot hold: functions, `undefined`, Dates become strings — know this before it bites
  - What breaks: parsing invalid JSON throws an error, so parse inside `try/catch`
  - _Practice: stringify a property object, look at the string, parse it back, confirm it is a real object again._

- [ ] **Closures — an interview favourite**
  - A function remembers the variables of the place where it was _created_, even after that place is gone
  - The classic example: a counter function that keeps its own private count
  - Where you already use them without knowing: every event handler that reads an outer variable
  - The loop trap: `var` in a loop with setTimeout prints the same number — `let` fixes it; explain why
  - _Practice: write `makeCounter()` that returns a function; each call returns 1, 2, 3... Then explain out loud WHERE the count lives. That explanation is the interview answer._

**Month 2 project:** _Live Data Dashboard_
— Fetch data from a free public API (weather, currency, anything) and display it. Handle everything: loading spinner, error message, retry button. This exact pattern comes up in React every single day.

### Month 3 — Polish + Modules

- [ ] **ES6 modules: `import/export`**
  - Named exports (`export const x`) vs default export (`export default`) — and how each is imported (`{ x }` vs any name)
  - One file, one job: `data.js`, `filters.js`, `render.js` instead of one giant file
  - In the browser: `<script type="module">` — and note: modules are deferred by default
  - Circular imports: what the warning means (A imports B imports A) — avoid by moving shared stuff to a third file
  - _Practice: split your Month 1 project into 3 module files. It should work exactly the same after the split._

- [ ] **Tricky array/object patterns: flattening nested data, grouping**
  - `flat()` and `flatMap()` for arrays inside arrays
  - Grouping with `reduce`: properties → `{ Noida: [...], Gurgaon: [...] }`
  - Removing duplicates with `Set`: `[...new Set(array)]`
  - `Map` (the data structure) at read level: like an object but any key type and keeps order
  - Sorting an array of objects by a key (price, name) — ascending and descending; strings with `localeCompare`
  - _Practice: from your properties array, build a "count per city" object and a unique list of cities. Both with reduce/Set, no loops._

- [ ] **localStorage basics**
  - `setItem`, `getItem`, `removeItem`, `clear` — and the rule: it only stores strings
  - So: `JSON.stringify` on the way in, `JSON.parse` on the way out
  - `getItem` on a missing key returns `null` — handle it with a default
  - Write two small helpers, `save(key, data)` and `load(key, fallback)`, and reuse them everywhere
  - _Practice: add a "favourite" button to your property cards; favourites must survive a page refresh._

- [ ] **Dates and timers — small but daily**
  - `new Date()`, `getFullYear/Month/Date`, and the month-starts-at-0 trap
  - Formatting: `toLocaleDateString("en-IN")` — good enough; no date library while learning
  - `Date.now()` for timestamps; `setInterval` + `clearInterval` (and why you must clear)
  - _Practice: show "posted X days ago" on each property card from a `postedOn` date field._

- [ ] **Debounce — for the search box**
  - The problem: `input` fires on every keystroke; you do not want to filter/fetch 20 times per second
  - The pattern: wait until the user stops typing for 300ms, then run — built with `setTimeout` + `clearTimeout` (a closure in action!)
  - Write `debounce(fn, delay)` yourself once; understand it, then reuse it
  - _Practice: add debounce to your Month 1 search box and log how many times filtering runs before vs after._

- [ ] **Proper error handling with `try/catch`**
  - `try/catch/finally` — and `throw new Error("message")` for your own errors
  - The `Error` object: `error.message` is what you show; `error.stack` is where it happened
  - Catch errors where you can _do something about them_ (show a message), not everywhere
  - The sin to avoid: an empty `catch {}` that silently eats errors
  - _Practice: in your dashboard project, make sure every failure path shows the user a readable message — never a blank screen, never only a console error._

- [ ] **Regex — only enough for validation (do not go deep)**
  - Read level: `/^\d{10}$/` = exactly 10 digits (phone); a simple email pattern
  - `.test(value)` returns true/false — that is 90% of what forms need
  - Rule: copy a well-known validation pattern, understand its parts, move on. Regex mastery is NOT on this roadmap.
  - _Practice: validate a 10-digit phone and a simple email in your Month 3 form project._

**Month 3 project:** _Form + Validation + Storage_
— A property-enquiry form: validation (email, phone), showing errors, saving to localStorage on submit, and rendering the list of saved entries.

### ✋ PHASE 1 MILESTONE TEST (pass this before moving on):

1. Without Google or AI: can you fetch data from an API and render it as cards on a page?
2. Can you explain the difference between `map` and `forEach`, and give one real use of `reduce`?
3. Can you write error handling with `async/await`?
4. Can you explain a closure with your own counter example, out loud?

The test is simple: explain it out loud, then do it, without help. **All four "yes" = start Phase 2. Any "no" = two more weeks. No rushing.**

---

## PHASE 2: TypeScript (Months 3–4)

**Why:** In 2026, TypeScript is the baseline — it is in every Senior Frontend job post. And once JS is strong, TS is easy. It is just JS with types.

- [ ] **Setup + tsconfig, the minimum you need**
  - Install TypeScript, run `tsc file.ts`, see the `.js` output — know that browsers never run TS directly
  - `tsconfig.json`: `"strict": true` from day one (learning with strict off builds bad habits)
  - Red lines in VS Code = the compiler talking to you; hover to read the message before asking anyone
  - _Practice: set up one folder with tsconfig strict, compile one file, run the output._

- [ ] **Basic types: string, number, boolean, arrays, and how to avoid `any`**
  - Annotations: `const price: number = 75` — and _inference_: TS often knows the type by itself, so do not annotate what it already knows
  - Array types: `string[]`, `Property[]`; tuples at read level: `[number, number]`
  - `any` turns TypeScript off — that is why it is banned; `unknown` is the honest version when you really do not know the type
  - `null` and `undefined` in strict mode: TS forces you to handle "maybe missing" — this is the whole point
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
  - Typing DOM and events: `HTMLInputElement`, `MouseEvent` — and why `event.target` sometimes needs a type assertion (`as HTMLInputElement`), used sparingly
  - _Practice: type your own `myFilter` from Phase 1, fully. If you can type a callback, you understand both topics._

- [ ] **Union types (`string | number`), optional properties (`?`), narrowing**
  - Unions: a value that can be one of a few things — `status: "sale" | "rent"` (literal unions are everywhere in real code)
  - Narrowing: inside `if (typeof x === "string")`, TS knows which side of the union you are on
  - Narrowing objects: check a field (`if ("bhk" in item)`) or a literal (`if (item.status === "rent")`)
  - _Practice: give Property a `status: "sale" | "rent"` field and write a function that behaves differently for each — with TS forcing you to handle both._

- [ ] **Generics at a BASIC level (not deep, just enough to read them)**
  - `Array<string>` is a generic you already use
  - Read a simple one: `function first<T>(items: T[]): T` — "T is a placeholder for whatever type comes in"
  - Goal at this stage: _read_ generics without fear. Writing complex ones comes later, in React (`useState<Property[]>`)
  - _Practice: write `first<T>` yourself and call it with a string array and a Property array. Watch T change._

- [ ] **Utility types — read level only**
  - `Partial<Property>` (all fields optional — perfect for update functions), `Pick`, `Omit`
  - You will SEE these in every codebase and job test; recognizing them is enough for now
  - _Practice: write `updateProperty(p: Property, changes: Partial<Property>)` using spread. One line of body, big lesson._

**Project:** Nothing new — **convert all three Phase 1 projects to TypeScript.** Converting your own code is the best practice there is. You understand everything while typing it.

### ✋ PHASE 2 MILESTONE TEST:

1. Can you write an interface for an API response?
2. Can you read `tsc` errors and fix them yourself, without asking AI?

**Both "yes" = Phase 3.**

---

## PHASE 3: React — From Weak to Strong (Months 4–8) ⭐ THE LONGEST PHASE

**Why 4 months:** This is the skill that changes the job title. No rushing — depth is the goal.

### Months 4–5 — Hooks, properly

- [ ] **Setup + thinking in React**
  - Create the project with Vite (`npm create vite@latest` — React + TypeScript template); know what each generated file does
  - JSX rules: one parent element (or a fragment `<>...</>`), `className` not `class`, `{}` for JS inside markup
  - A component = a function that returns JSX; props go in as the function's argument
  - `props.children` — the content between a component's tags
  - Install React DevTools in the browser NOW — you will use it every week
  - StrictMode: in development React runs things twice on purpose — know this before it confuses you
  - _Practice: build a static PropertyCard component that takes props and renders one card. No state yet — just props in, JSX out._

- [ ] **`useState` — from simple to complex state**
  - The rule: state changes → React re-renders. That one sentence is half of React.
  - Functional updates: `setCount(prev => prev + 1)` — and _when_ you need this form (when new state depends on old)
  - State updates are not instant: logging state right after `set` shows the OLD value — know why
  - State with objects and arrays: always a NEW object/array (`setList([...list, item])`) — your spread practice from Phase 1 pays off here
  - Removing and updating items: `filter` to remove, `map` to update one — never mutate
  - Lifting state up: when two components need the same data, the state moves to their parent
  - _Practice: a counter, then a favourites list (add/remove properties), then the same list shared between two components via the parent._

- [ ] **`useEffect` — dependency array, cleanup, common mistakes**
  - It runs _after_ render — for things React does not do itself: fetching, timers, listeners
  - The dependency array: `[]` = once, `[city]` = when city changes, missing = every render (almost always a bug)
  - Cleanup: return a function to remove listeners/timers — and _when_ React calls it (before the next run, and on unmount)
  - The infinite-loop mistake: setting state inside an effect that depends on that same state — learn to spot it
  - Race condition at read level: an old fetch answering after a new one — the `ignore` flag pattern in cleanup
  - The bigger rule: if it can be calculated from props/state during render, it does NOT need an effect
  - _Practice: fetch properties inside useEffect with loading/error state. Then break it on purpose (remove the deps array), watch the loop, fix it, and explain why it happened._

- [ ] **`useRef` — the other basic hook**
  - Two jobs: (1) grab a DOM element (`ref={inputRef}` → `inputRef.current.focus()`), (2) store a value that survives re-renders WITHOUT causing them
  - The difference from state in one line: change state → re-render; change ref → nothing re-renders
  - _Practice: auto-focus the search input on page load; store the previous filter value in a ref and log old vs new._

- [ ] **Conditional rendering, lists + keys**
  - `&&` for "show or nothing" (and the `0 &&` trap that prints a 0), ternary for "this or that", early `return` for whole-component cases
  - Rendering lists with `map` — and why every item needs a stable `key`
  - Why `key={index}` is a trap when the list can reorder or filter
  - _Practice: render your property list with proper keys; show "No results" when a filter matches nothing._

- [ ] **Forms in React (controlled components)**
  - Controlled input: `value` from state + `onChange` updating state — the input's truth lives in React
  - Several inputs, one handler, using `name` on each field + computed keys (`{ ...form, [name]: value }`) — your Phase 1 practice again
  - `select`, `checkbox` (`checked`, not `value`), `radio` — each has its own small wiring
  - Submit: `event.preventDefault()`, then validate, then act
  - Showing validation errors from state — your Phase 1 form project, the React way
  - _Practice: rebuild the property-enquiry form as a controlled React form._

- [ ] **Splitting components: when one component should become two**
  - One component, one job — if you cannot name its job in a few words, it is two components
  - Signals to split: JSX getting long, the same block repeated, one part re-rendering for no reason
  - Data flows down through props; events flow up through callback props (`onSelect={...}`)
  - Typing props in TS: an interface per component (`interface CardProps { property: Property; onSelect: (id: number) => void }`)
  - _Practice: take your listing page and split it into List → Card → FilterBar. Pass data down, pass clicks up._

- [ ] **Props vs state — which one, when**
  - Props: given by the parent, read-only. State: the component's own changing data.
  - The one question that decides it: "_who changes this value?_" Parent changes it → prop. This component changes it → state.
  - Deriving instead of duplicating: if it can be _calculated_ from existing props/state, do not store it in state (filtered list = derived, not state)
  - _Practice: in your split components, point at every piece of data and say out loud: prop or state, and why._

**Project:** Rebuild the Phase 1 _Property Listing_ in React + TypeScript. Same features, the React way.

### Month 6 — State Management + Custom Hooks

- [ ] **Context API: global state like theme or user**
  - The problem it solves: passing the same prop through five levels ("prop drilling")
  - `createContext` → `<Provider value={...}>` → `useContext` in any child
  - When context is right (theme, logged-in user, language) and when plain props are still better (almost everything else)
  - The cost: everything under a Provider re-renders when its value changes — this is why context is not a full state manager
  - _Practice: add a dark/light theme to your app with Context — one toggle, every component follows._

- [ ] **Writing custom hooks: build `useFetch` and `useLocalStorage` yourself**
  - A custom hook = a normal function that uses hooks — that is all it is; the name must start with `use`
  - Rules of hooks: only at the top level, only in components/hooks (and _why_ those rules exist — React tracks hooks by call order)
  - Extract `useFetch(url)` returning `{ data, loading, error }` from your repeated fetch code
  - Then `useLocalStorage(key, initial)` — state that survives refresh
  - Typing them: `useFetch<Property[]>(url)` — your first self-written generic, and it will feel natural now
  - _Practice: replace every copy-pasted fetch block in your app with your own useFetch. Feel the difference._

- [ ] **`useMemo` and `useCallback` — when you need them, and when you do NOT**
  - `useMemo` caches a calculated _value_; `useCallback` caches a _function_
  - Why: so children that compare references do not re-render for nothing (`React.memo` on the child is the other half)
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
  - DevTools: install TanStack Query devtools and watch the cache live
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
  - Dynamic routes: `app/properties/[id]/page.tsx` — the detail-page pattern; read `params` for the id
  - Route groups `(marketing)` at read level: organizing folders without changing URLs
  - `<Link>` for navigation; `useRouter` / `redirect` for code-driven navigation
  - `loading.tsx`, `error.tsx`, `not-found.tsx` — loading/error/404 UI for free
  - _Practice: rebuild your app's routes as folders — list page, detail page with [id], shared layout with the header._

- [ ] **Server Components vs Client Components — which one, when, and WHY**
  - Default = Server Component: renders on the server, ships less JS to the browser
  - `"use client"` only where there is interactivity: state, effects, event handlers
  - The mental model: pages are server; buttons, forms, and toggles are small client islands
  - The boundary rule: a server component can render a client component, and passes it plain (serializable) props
  - _Practice: go through your app and mark every component S or C — then justify each one out loud._

- [ ] **SSR vs SSG vs ISR — explain the difference in one line each**
  - SSG: built once at build time — fastest, for pages that rarely change
  - SSR: built on every request — for truly per-request data
  - ISR: built once, then rebuilt in the background every N seconds — the middle path, perfect for property listings
  - _Practice: say all three lines from memory, then decide: which one for a property detail page, and why? (This is an interview question, word for word.)_

- [ ] **Data fetching in the App Router (fetching on the server)**
  - Server components can be `async` — `await fetch(...)` directly in the component, no useEffect needed
  - Caching controls: `cache: "no-store"` (always fresh) vs `next: { revalidate: 60 }` (ISR)
  - `generateStaticParams` — pre-building the detail pages at build time
  - Route Handlers (`app/api/.../route.ts`) at read level: your own small API endpoints inside Next
  - Where TanStack Query still fits: client-side interactivity after the first server render
  - _Practice: make the property list fetch on the server; keep favourites client-side._

- [ ] **Metadata API — SEO through Next.js (my strong area)**
  - Static: `export const metadata = { title, description }`
  - Dynamic: `generateMetadata()` — a title built from the property's own data
  - Open Graph and Twitter Card tags through the same API — the exact markup I already write by hand at work, now the Next.js way
  - `sitemap.ts` and `robots.ts` — Next generates them; my SEO knowledge, automated
  - _Practice: give every property detail page its own title, description, and OG image. Test with a link-preview checker._

- [ ] **Image + font optimization — connects straight to my 40% load-time story**
  - `next/image`: automatic resizing, lazy loading, and modern formats — what I did manually for years, built in
  - `fill` vs fixed `width/height`, and the `sizes` attribute for responsive images
  - `priority` for the above-the-fold image (the LCP image)
  - `next/font`: self-hosted fonts, no layout shift — the CLS fix built in
  - _Practice: replace every `<img>` in the app with `next/image`, run Lighthouse before and after, write the numbers down._

- [ ] **Deploy on Vercel**
  - Connect the GitHub repo → every push deploys; every PR gets a preview URL
  - Environment variables go in the Vercel dashboard — API keys never go in the repo; `NEXT_PUBLIC_` prefix = visible in the browser, know the difference
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
  - `getBy` (must exist) vs `queryBy` (may not exist) vs `findBy` (async) — pick the right one
  - Simulate the user: `userEvent.click`, `userEvent.type`
  - The golden rule: test what the user sees and does, not the component's internals
  - `renderHook` for testing your custom hooks directly
  - Mocking a fetch/API call at read level — enough to test the error state
  - _Practice: one test that renders a Card and checks the price is visible; one test that clicks "favourite" and checks the change shows up._

- [ ] **Write 8–10 tests for the flagship app (components, hooks)**
  - Cover: Card renders correctly, filters actually filter, the form validates, useFetch/useQuery handles the error state
  - Watch a test _fail first_, then pass — a test that cannot fail proves nothing
  - _Practice: break one component on purpose and confirm the right test catches it._

### Git — from weak to confident (Month 12, 2 focused weeks)

- [ ] **Daily-driver commands, cleanly**
  - `status`, `add -p` (stage in pieces — review your own diff as you stage), `commit`, `log --oneline`, `diff`
  - `.gitignore`: what never enters the repo (node_modules, .env, build output)
  - Good commit messages: one line, present tense, says WHY when the WHAT is not obvious
  - Undo without fear: `git restore file` (throw away local changes), `git restore --staged` (unstage), `git revert` (undo a pushed commit safely)
  - `git stash` — park half-done work, switch branches, come back
  - _Practice: one evening of deliberate drills — stage in pieces, stash, restore, revert a dummy commit._

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

- [ ] **Long lists — know the fix exists**
  - Read level: rendering 2,000 cards is slow; "virtualization" (react-window / TanStack Virtual) renders only what is on screen
  - You do not have to build it now — you have to be able to NAME the fix in an interview
  - _Practice: one sentence, out loud: when would you reach for virtualization, and what does it do?_

**Ten years of performance instinct transfers here directly — this is home ground.**

### Architecture Thinking (Months 14–15)

- [ ] **Folder structure patterns (feature-based)**
  - Group by feature (`features/properties/`, `features/favourites/`), not by file type
  - Shared building blocks live in `components/ui/`; shared logic in `lib/` or `hooks/`
  - Absolute imports (`@/components/...`) instead of `../../../` — one tsconfig line, much cleaner
  - Naming conventions: components `PascalCase`, hooks `useCamelCase`, one component per file
  - _Practice: restructure the flagship app feature-based. If a file is hard to place, its component probably has two jobs._

- [ ] **Component boundaries: reusable vs page-specific**
  - Reusable = knows nothing about your data ("Button", "Modal"); page-specific = knows the domain ("PropertyCard")
  - Keep reusable components dumb: props in, events out, no fetching inside
  - _Practice: pick 5 components and label each one reusable or page-specific — then check the imports agree with you._

- [ ] **Environment variables and config**
  - `.env.local` for secrets, never committed; an `.env.example` committed so others know what is needed
  - One `config.ts` that reads env vars in one place — the rest of the app imports from there
  - _Practice: move your API base URL into an env var; confirm the app still runs after a fresh clone + copy of .env.example._

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
