# Senior Frontend Developer Roadmap — Monirul Islam Khan

> My personal 15-month roadmap: Senior UI Developer → Senior Frontend Developer. Updated weekly.

### UI Developer se Senior Frontend Developer tak (12–15 mahine ka plan)
*Banaya gaya: July 2026 | Har hafte 6–8 ghante commitment | 📋 Weekly progress: [weekly-log.md](./weekly-log.md)*

---

## Ye document kaise use karein

1. Is file ko save karo (phone + laptop dono pe).
2. **Har Sunday** ise kholo aur dekho: is hafte kya karna hai.
3. Har milestone test pass karne ke baad hi agle phase mein jao. **Order kabhi mat todna.**
4. Har phase ke aage ✅ lagate jao jab complete ho.

---

## GOLDEN RULES — Bhatakne se bachne ke 5 niyam

**Rule 1: Order sacred hai.** JS → TypeScript → React → Next.js → Senior skills. Seedha React pe mat koodna — yahi galti pehle hui thi. React weak isliye tha kyunki JS weak tha.

**Rule 2: Ek waqt mein EK hi cheez.** Naya tutorial, naya framework, naya course dikhe — ignore karo. Jo phase chal raha hai, sirf wahi. "Shiny object" hi sabse bada dushman hai.

**Rule 3: Video dekhna = seekhna NAHI hai.** Har hafte kam se kam 70% time CODE LIKHNE mein, 30% dekhne/padhne mein. Jo banaya nahi, wo seekha nahi.

**Rule 4: AI teacher hai, ghost-writer nahi.** Seekhte waqt AI se code likhwao mat — "explain karo", "mera code review karo", "isme kya galat hai" poochho. (Job ke kaam mein AI se speed lo, wo alag baat hai.)

**Rule 5: Atka hua = 30 minute rule.** Kisi problem pe 30 min se zyada atko to AI/Google se hint lo, poora solution nahi. Phir khud complete karo.

---

## PHASE 0: Setup (Hafta 0 — abhi, is hafte)

**Karna kya hai:**
- [ ] GitHub pe ek naya repo banao: `learning-journal` — har hafte ka kaam yahan push hoga
- [ ] VS Code + Git install/ready karo
- [ ] Ek notebook ya Notes app mein "Learning Log" shuru karo — har session ke baad 2 line likho: aaj kya seekha, kya samajh nahi aaya
- [ ] Hafte ke fixed 3–4 slots calendar mein block karo (jaise: Mon/Wed/Fri raat 1.5 ghanta + Sunday 2 ghante)

**Kyun:** Fixed time slot na ho to "kal karunga" shuru ho jaata hai. Calendar block = commitment.

---

## PHASE 1: JavaScript Foundation (Mahina 1–3) ⭐ SABSE ZAROORI PHASE

**Kyun pehle:** Aapka React 4 saal se weak hai kyunki uske neeche ka JS kaccha hai. Foundation pehle, imaarat baad mein.

### Mahina 1 — Core JavaScript
**Topics (isi order mein):**
- [ ] Variables, data types, `let/const`, template literals
- [ ] Arrays deeply: `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`
- [ ] Objects: destructuring, spread `...`, optional chaining `?.`
- [ ] Functions: arrow functions, callbacks, `this` ka behaviour
- [ ] DOM manipulation: querySelector, events, classList

**Mahina 1 ka project:** *Filterable Property Listing* (pure JS, koi framework nahi)
— Ek page jisme 15–20 properties ka data (array of objects) ho. Filter buttons (price, location, BHK). Search box. Sab pure JS se.
— Aapka real-estate domain hai, isliye ye project interview mein bhi kaam aayega.

### Mahina 2 — Async JavaScript (React ke liye critical)
**Topics:**
- [ ] Promises: kya hai, kyun hai, `.then/.catch`
- [ ] `async/await` — isko itna practice karo ki aankhein band karke likh sako
- [ ] `fetch` API: GET, POST, error handling, loading states
- [ ] JSON: parse, stringify
- [ ] Closures — interview ka favourite sawaal

**Mahina 2 ka project:** *Live Data Dashboard*
— Kisi free public API (jaise weather ya currency API) se data fetch karke display karo. Loading spinner, error message, retry button — sab handle karo. Yahi pattern React mein roz lagega.

### Mahina 3 — Polish + Modules
**Topics:**
- [ ] ES6 modules: `import/export`
- [ ] Array/object ke tricky patterns: nested data flatten karna, group karna
- [ ] localStorage basics
- [ ] Error handling: `try/catch` properly

**Mahina 3 ka project:** *Form + Validation + Storage*
— Ek property-enquiry form: validation (email, phone), errors dikhाना, submit pe localStorage mein save, saved entries ki list render.

### ✋ PHASE 1 MILESTONE TEST (pass karo tabhi aage badho):
1. Bina Google/AI ke: ek API se data fetch karke page pe cards render kar sakte ho? 
2. `map` vs `forEach` ka farq aur `reduce` ka ek real use bata sakte ho?
3. `async/await` mein error handling likh sakte ho?
**Teeno "haan" = Phase 2 shuru. Koi "nahi" = 2 hafte aur, koi jaldi nahi.**

---

## PHASE 2: TypeScript (Mahina 3–4)

**Kyun:** 2026 mein TypeScript baseline hai — har Senior Frontend JD mein hai. Aur JS strong hone ke baad TS aasaan hai (ye JS hi hai, types ke saath).

**Topics:**
- [ ] Basic types: string, number, boolean, arrays, `any` se kaise bachein
- [ ] Interfaces aur type aliases — objects ko type karna
- [ ] Functions ko type karna: parameters, return types
- [ ] Union types (`string | number`), optional properties (`?`)
- [ ] Generics ka BASIC use (deep nahi, bas samajh)

**Project:** Naya kuch nahi — **Phase 1 ke teeno projects ko TypeScript mein convert karo.** Ye conversion hi best practice hai: apna hi code type karte waqt sab samajh aata hai.

### ✋ PHASE 2 MILESTONE TEST:
1. Ek API response ke liye interface likh sakte ho?
2. `tsc` errors padh ke khud fix kar lete ho (AI se poochhe bina)?
**Dono "haan" = Phase 3.**

---

## PHASE 3: React — Weak se Strong (Mahina 4–8) ⭐ SABSE LAMBA PHASE

**Kyun 4 mahine:** Yahi wo skill hai jo title badlegi. Jaldi nahi, depth chahiye.

### Mahina 4–5 — Hooks properly
- [ ] `useState` — simple se complex state tak
- [ ] `useEffect` — dependency array, cleanup, common galtiyan (infinite loop kyun hota hai)
- [ ] Conditional rendering, lists + keys
- [ ] Forms in React (controlled components)
- [ ] Component todna: kab ek component ko do banana chahiye
- [ ] Props vs state — kab kya

**Project:** Phase 1 wali *Property Listing* ko React + TypeScript mein rebuild karo. Same features, React way.

### Mahina 6 — State Management + Custom Hooks
- [ ] Context API: theme/user jaisi global state
- [ ] Custom hooks banana: `useFetch`, `useLocalStorage` khud likho
- [ ] `useMemo`, `useCallback` — kab chahiye, kab NAHI chahiye
- [ ] Zustand (ya Redux Toolkit) basics — jo target JDs mein zyada dikhe

### Mahina 7 — Data Fetching (2026 standard)
- [ ] TanStack Query (React Query): queries, mutations, caching, loading/error states
- [ ] Pagination ya infinite scroll ek baar implement karo

### Mahina 8 — FLAGSHIP PROJECT shuru
**Project:** *Real-Estate Web App* — aapka proof-of-skill:
- React + TypeScript + TanStack Query
- Property list, detail page, filters, favourites (localStorage)
- Aapki CSS mastery yahan chamkao — pixel-perfect, responsive, accessible
- GitHub pe clean commits ke saath push
**Ye project resume + portfolio dono mein jaayega.**

### ✋ PHASE 3 MILESTONE TEST:
1. `useEffect` ka cleanup function kab chahiye — example ke saath bata sakte ho?
2. Ek custom hook khud likh sakte ho bina dekhe?
3. "Ye component re-render kyun ho raha hai" — debug kar sakte ho?
4. Flagship project ka har line samjha sakte ho?
**Chaaron "haan" = Phase 4.**

---

## PHASE 4: Next.js Depth (Mahina 8–11)

**Kyun:** 2026 ka frontend server-first hai. Next.js exposure aapke paas hai, ab samajh chahiye. Bonus: aapka SEO knowledge yahan directly kaam aayega.

**Topics:**
- [ ] App Router: file-based routing, layouts, nested routes
- [ ] Server Components vs Client Components — kaun sa kab, aur KYUN
- [ ] SSR vs SSG vs ISR — teeno ka farq ek line mein bata pao
- [ ] Data fetching in App Router (server pe fetch)
- [ ] Metadata API — SEO (aapka strong area, Next ke through karo)
- [ ] Image optimization (`next/image`) — aapke 40% load-time story se connect hota hai
- [ ] Deploy on Vercel

**Project:** Flagship real-estate app ko **Next.js mein migrate karo + Vercel pe deploy.** Live URL = resume pe daalne layak proof.

### ✋ PHASE 4 MILESTONE TEST:
1. Server Component vs Client Component ka farq + kab kya use karoge?
2. Aapka app live URL pe deployed hai aur Lighthouse 90+ hai? (Ye aapki specialty hai — yahan 90+ na aaye to kuch galat hai 😄)
**Dono "haan" = Phase 5.**

---

## PHASE 5: Senior-Level Gaps (Mahina 11–15)

**Ye cheezein "developer" ko "Senior" banati hain:**

### Testing (Mahina 11–12)
- [ ] Vitest + React Testing Library basics
- [ ] Apne flagship app ke 8–10 tests likho (components, hooks)

### Git — weak se confident (Mahina 12, 2 hafte focused)
- [ ] Branching, merge, merge conflicts khud resolve karna
- [ ] Pull Request workflow (khud se PR banao apne repo mein)
- [ ] `rebase` basic samajh
**Practice trick:** apne har project mein feature-branch → PR → merge ka routine banao, direct main pe commit band.

### React Performance (Mahina 13)
- [ ] React DevTools Profiler se re-renders dekhna
- [ ] Code splitting, `lazy` + `Suspense`
- [ ] Bundle size analysis
**Aapka 10-saal performance instinct yahan directly transfer hoga — ye aapka home ground hai.**

### Architecture Thinking (Mahina 14–15)
- [ ] Folder structure patterns (feature-based)
- [ ] Component boundaries: reusable vs page-specific
- [ ] Ek README likho apne flagship project ka: architecture decisions explain karo — "maine ye isliye kiya". Yahi senior interview ka asli sawaal hota hai.

---

## PARALLEL TRACK (poore 15 mahine, saath-saath)

- [ ] **Portfolio site** (Mahina 2–3 mein bana do, simple HTML/CSS se hi — aapki specialty): best UI work + projects + live links
- [ ] **Job pe React/Next ka kaam khud maango** — office ka real kaam sabse strong resume proof hai
- [ ] **AI tools daily use** (Claude Code/Copilot/Cursor) — job ke kaam mein speed ke liye, learning mein explain karne ke liye
- [ ] **Har mahine ki last Sunday:** is file ko kholo, ✅ lagao, agle mahine ka plan dekho

---

## TITLE KAB BADLEIN — Final Checklist

Resume pe **"Senior Frontend Developer"** tab likho jab ye SAB sach ho:
- [ ] TypeScript mein comfortably naya code likh lete ho
- [ ] Flagship Next.js app live hai, aur uska har decision explain kar sakte ho
- [ ] Hooks/state/re-render ke interview sawaalon se dar nahi lagta
- [ ] Git pe branch/PR/merge confidently karte ho

Us din tak: **"Senior UI Developer"** pe kamao, izzat se. Transition ke beech hybrid bhi chalega: *"Senior UI Developer | React & Next.js"*.

---

## AGAR RUKAWAT AAYE (troubleshooting)

**"2 hafte se kuch nahi kiya"** → Guilt mat palo. Wahin se shuru karo jahan chhoda tha. Streak nahi, direction matter karti hai.

**"Ye topic samajh nahi aa raha"** → 30-min rule lagao → AI se "explain like I'm a beginner" poochho → chhota example khud banao → phir bhi nahi, to us topic ko 2 din ka break do aur project mein use karke seekho.

**"Naya framework/course dikha, lagta hai wo karna chahiye"** → Rule 2 padho. Nahi.

**"Lagta hai bahut slow chal raha hoon"** → 15 mahine ka plan hai. Mahina 5 mein senior feel nahi hoga — normal hai. Milestone tests hi asli speedometer hain.

**"Job interview aa gaya beech mein"** → Roadmap pause karo, us JD ke topics pe 1–2 hafte focused revision karo, phir wapas.

---

*Har phase complete hone pe ya koi confusion ho to Claude ke paas aao — code review, mock interview questions, ya JD ka role-fit analysis, kabhi bhi.*
