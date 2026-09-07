# Git, frequency ke hisaab se

Medium se badi companies me jo commands sach me chalte hain — roz wale se lekar "shayad kabhi nahi" tak.
Sach ye hai ki **10–12 commands hi 95% kaam kar dete hain**.

- ⚠️ = destructive, kaam ja sakta hai
- Git 2.23+ maana gaya hai (`switch` / `restore` maujood)

---

## Asli daily loop

```
Branch banao  →  Commit karo  →  Push  →  PR kholo  →  Review  →  Squash merge
   (tum)          (tum)         (tum)   (GitHub/GitLab) (teammate)  (button, command nahi)
```

**Ye wo baat hai jo koi command list nahi batati:** bade teams me `git merge` aksar type hi nahi hota —
PR par button dabta hai. Isiliye neeche ki list me merge itna neeche hai.

---

## 1. Rozana — 4/4

> Har din, har developer

| Command | Matlab |
|---|---|
| `git status` | Sabse zyada chalne wala command. Kya badla, kya staged hai, branch kahan hai. |
| `git switch <branch>` | Branch badlo. Purana tareeka `git checkout` — dono chalte hain. |
| `git switch -c feat/login-fix` | Nayi branch bana ke usi par chale jao. Naam team ke convention se rakho. |
| `git switch -` | Pichhli branch par wapas. Ye **toggle** hai — sirf aakhri do ke beech ping-pong. |
| `git add -A` | Nayi, badli aur delete — sab stage. `git add .` sirf current folder tak seemit. |
| `git commit -m "fix: ..."` | Bahut teams Conventional Commits follow karti hain — `feat:`, `fix:`, `chore:`. |
| `git commit -am "..."` | **Sirf tracked** files uthata hai. Nayi file chhut jaayegi — pehle `add` karna hoga. |
| `git pull --rebase` | Kai jagah ye team policy hai — history seedhi rehti hai, faltu merge commits nahi bante. |
| `git push` | Rozana. `main` par direct push aksar block hota hai. |
| `git push -u origin HEAD` | Nayi branch pehli baar bhejte waqt. `HEAD` likhne se naam dobara type nahi karna padta. |
| `git log --oneline -20` | Kya-kya hua, ek line me. `--graph` jodo to branches bhi dikh jaayengi. |
| `git diff` / `git diff --staged` | Commit se pehle apna khud ka review. Bina `--staged` = jo abhi stage nahi hua. |
| `git fetch --prune` | Remote se update lo, aur delete ho chuki branches local list se hata do. |

---

## 2. Hafte me kabhi-kabhi — 3/4

> PR ke aas-paas, cleanup ke waqt

| Command | Matlab |
|---|---|
| `git stash` / `git stash pop` | Aadha kaam side me rakho. `-u` lagao to untracked files bhi saath jaayengi. |
| `git rebase main` | Apni branch ko latest `main` ke upar rakho. **Sirf apni branch par.** |
| `git rebase -i HEAD~5` | PR se pehle commits saaf karna — squash, reword, drop. |
| `git merge main` | Jab team rebase ki jagah merge prefer kare. Conflict yahin nipatte hain. |
| ⚠️ `git restore <file>` | File ke local changes wapas. **Wo changes gaye** — reflog me bhi nahi milenge. |
| `git restore --staged <file>` | Unstage karo, changes bache rahenge. Purana tareeka `git reset <file>`. |
| `git reset --soft HEAD~1` | Aakhri commit undo, changes staged rahenge. Galat message ke liye. |
| ⚠️ `git reset --hard HEAD~1` | Commit **aur** changes dono gaye. Sirf apni local branch par — shared par kabhi nahi. |
| `git branch -d <branch>` | Merge ho chuki branch delete. `-D` bina-merge wali ko bhi zabardasti hata dega. |
| ⚠️ `git push --force-with-lease` | Rebase ke baad apni feature branch. **Plain `--force` kabhi nahi** — wo teammate ka kaam mita deta hai. |
| `git cherry-pick <sha>` | Ek commit doosri branch par uthana — hotfix ko release branch tak le jaane ke liye. |
| `git tag -a v1.2.0 -m "..."` | Release mark karna. Push alag se: `git push origin v1.2.0`. |
| `git revert <sha>` | Shared branch par undo ka **sahi** tareeka — ulta commit banata hai, history nahi badalta. |

---

## 3. Kabhi-kabhaar — 2/4

> Debugging ke waqt, aksar senior log

| Command | Matlab |
|---|---|
| `git blame <file>` | Kaunsi line kisne, kab badli. Command se zyada IDE ke andar se chalta hai. |
| `git log -S "functionName"` | Kis commit ne ye code add ya delete kiya. Bahut kaam ka, bahut kam log jaante hain. |
| `git bisect start \| bad \| good` | Binary search se pata karo bug kis commit se aaya. Powerful, par saal me do-chaar baar. |
| `git reflog` | "Maine kuch uda diya" ka jawab. Har HEAD move ka record — lifesaver. Sirf local. |
| `git switch @{-2}` | Do switch pehle wali branch. Reflog se aata hai, isiliye fresh clone par kaam nahi karega. |
| `git worktree add ../hotfix main` | Ek hi repo, do folder, do branch — bina stash kiye urgent kaam nipatane ke liye. |
| `git submodule update --init` | Sirf un repos me jinme submodules hain. Clone ke turant baad. |
| ⚠️ `git clean -fd` | Untracked files/folders hamesha ke liye khatam. **Pehle `-fdn` chala ke dekho** kya jaayega. |

Ye saare commands ek hi kism ke sawal ka jawab dete hain — **"ye kaise ya kab hua?"** Isiliye inki
zarurat tab padti hai jab kuch toota ho, roz ke kaam me nahi.

---

## 4. Lagbhag kabhi nahi — 1/4

> App teams me — ye DevOps ya maintainers ka kaam hai

| Command | Matlab |
|---|---|
| ⚠️ `git filter-repo` | History se secret ya badi file hatana. Poori history rewrite — team-wide coordination chahiye. |
| `git gc` / `git fsck` / `git prune` | Git khud time par chala leta hai. Manually chalane ki nobat kam hi aati hai. |
| `git notes` / `git replace` | Commit ke saath extra metadata. Zyadatar tooling ise dikhata hi nahi. |
| `git bundle` / `git archive` | Repo ko ek file me pack karna — offline transfer ya release tarball ke liye. |
| `git format-patch` / `git am` | Email se patch bhejna. Linux kernel ka tareeka — normal companies me nahi. |
| `git rerere` | Wahi conflict baar-baar aaye to Git uska hal yaad rakh leta hai. Long-lived branches wali team me. |
| `git subtree` | Submodule ka alternative. Aaj kal ye kaam package manager se ho jaata hai. |

**Exception:** `git sparse-checkout` aur `git lfs` is list me sirf chhoti teams ke liye hain. Bade
monorepo ya media-heavy repo me ye rozana ke commands ban jaate hain — Google/Meta scale par bilkul normal.

---

## Teen niyam — har company me same

1. **`main` par direct push nahi.** Protected branch. Har change PR se jaata hai, chahe one-line fix hi ho.
2. **Shared branch rebase mat karo.** Rebase sirf apni feature branch par, jab tak koi aur us par kaam na kar raha ho.
3. **Public history par `revert`, `reset` nahi.** `revert` naya commit banata hai; `reset` history badal deta hai — sabki clone toot jaati hai.

---

## Version note

`git switch` aur `git restore` Git 2.23 (2019) me aaye the. `git checkout` **deprecated nahi hai** aur
hataya bhi nahi jaayega — purani scripts aur tutorials chalte rahenge. Bahut purane server ya CI image
par `switch` na mile to `checkout` hi fallback hai.
