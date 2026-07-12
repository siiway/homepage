# Naming Conventions

> This specification applies to identifier naming across all projects, covering files, variables, constants, functions, classes, components, types, interfaces, etc. When a language/framework has mandatory conventions (e.g., environment variables, specific file names), follow those conventions first.

---

## 1. Core Principles

All naming follows a three-tier system, with the format chosen based on the number of words and semantic role of the identifier:

| Category                                  | Format        | Example                         |
| ----------------------------------------- | ------------- | ------------------------------- |
| Single word (file/folder/module name)     | all lowercase | `utils`, `types`, `index`       |
| Multi-word function/method/variable       | camelCase     | `getPackageInfo`, `handleClick` |
| Multi-word class/component/type/interface | PascalCase    | `UserProfile`, `ApiResponse`    |

### 1.1 Single Word Rules

- Single-word identifiers such as files, folders, modules, and package names use all lowercase
- Example: `utils/`, `types/`, `index.ts`, `auth.ts`

### 1.2 Multi-Word Rules

- Functions, methods, variables: camelCase
- Classes, components, types, interfaces, enums: PascalCase
- Constants: UPPER_SNAKE_CASE

---

## 2. File and Directory Naming

### 2.1 General Conventions

| File Type                     | Format        | Example                            |
| ----------------------------- | ------------- | ---------------------------------- |
| Single-word directory/module  | all lowercase | `utils/`, `types/`, `index.ts`     |
| Multi-word non-component file | kebab-case    | `date-utils.ts`, `http-request.ts` |
| Component file (Vue/React)    | PascalCase    | `UserList.vue`, `OrderDetail.vue`  |
| Type file                     | kebab-case    | `user-types.ts`, `order-types.ts`  |
| Store file                    | kebab-case    | `user-store.ts`, `cart-store.ts`   |
| Composable function file      | kebab-case    | `use-user-list.ts`                 |
| Style file                    | kebab-case    | `user-card.scss`                   |

### 2.2 Constraints

- No spaces, Chinese characters, or special characters in file names
- No file names that duplicate directory names (e.g., `user/user.ts`)
- Directory names must be meaningful nouns; no meaningless names like `temp`, `test1`

---

## 3. Variable Naming

### 3.1 General Variables

- Use camelCase
- Example:

```typescript
const userName = 'Alice'
const itemCount = 42
const isActive = true
```

### 3.2 Boolean Variables

- Must use `is`, `has`, `should`, `can` prefixes
- Example:

```typescript
const isLoading = true
const hasPermission = false
const shouldUpdate = true
const canEdit = false
```

### 3.3 Collection Variables

- Arrays, Maps, Sets, etc. use plural form
- Example:

```typescript
const users: User[] = []
const userIdMap = new Map<number, User>()
const activeIdSet = new Set<string>()
```

---

## 4. Constant Naming

### 4.1 Module-Level Constants

- Use UPPER_SNAKE_CASE
- Example:

```typescript
const MAX_RETRY_COUNT = 3
const DEFAULT_PAGE_SIZE = 10
const API_BASE_URL = 'https://api.example.com'
```

### 4.2 Enum Members

- Use PascalCase or UPPER_SNAKE_CASE, consistent within the project
- Example:

```typescript
enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed'
}
```

---

## 5. Function and Method Naming

### 5.1 General Functions

- Use camelCase
- Start with a verb or verb phrase
- Recommended verb prefixes:

| Prefix                  | Meaning        | Example                           |
| ----------------------- | -------------- | --------------------------------- |
| `get` / `fetch`         | Retrieve data  | `getUserInfo`, `fetchUserList`    |
| `set` / `update`        | Set/update     | `setUserName`, `updateProfile`    |
| `create` / `add`        | Create/add     | `createOrder`, `addItem`          |
| `delete` / `remove`     | Delete/remove  | `deleteUser`, `removeItem`        |
| `handle`                | Event handler  | `handleSubmit`, `handleCancel`    |
| `validate` / `check`    | Validate/check | `validateForm`, `checkPermission` |
| `format` / `parse`      | Format/parse   | `formatDate`, `parseJson`         |
| `compute` / `calculate` | Compute        | `computeTotal`, `calculateAge`    |

### 5.2 Event Handler Functions

- Use `handle` or `on` prefix
- `handle` for handler functions defined inside methods
- `on` for callback property names (event callbacks in props)
- Example:

```typescript
const handleSubmit = () => {}
const handleCancel = () => {}

// callback properties
interface Props {
  onClick?: () => void
  onChange?: (value: string) => void
}
```

### 5.3 Async Functions

- No additional naming requirements; follow general function rules
- Functions returning a Promise do not need an `Async` suffix

---

## 6. Class and Component Naming

### 6.1 Class Naming

- Use PascalCase
- Use nouns or noun phrases
- Example:

```typescript
class UserService {}
class OrderController {}
class PaymentGateway {}
```

### 6.2 Component Naming

- Use PascalCase
- Must consist of multiple words to avoid conflicts with native HTML elements
- Example:

```typescript
// Correct
export default defineComponent({
  name: 'UserList'
})

// Incorrect
export default defineComponent({
  name: 'List'      // Too simple, may conflict
})

// Incorrect
export default defineComponent({
  name: 'userList'  // Should use PascalCase
})
```

### 6.3 Composable Function Naming

- Use camelCase, start with `use`
- Example: `useUserList`, `useFormValidation`, `useDarkMode`

### 6.4 Store Naming

- Store ID uses camelCase
- Store function uses `use` prefix + PascalCase store name
- Example: `useUserStore`, `useCartStore`, `useAppStore`

---

## 7. Type and Interface Naming

### 7.1 Interface Naming

- Use PascalCase
- Use nouns or noun phrases
- Optional `I` prefix (choose one consistently within the project)
- Example:

```typescript
interface User {
  id: number
  name: string
}

// or with I prefix
interface IUser {
  id: number
  name: string
}
```

### 7.2 Type Aliases

- Use PascalCase
- Complex types such as union types and intersection types are recommended to use a `Type` suffix
- Example:

```typescript
type UserStatus = 'active' | 'inactive' | 'banned'
type ApiResponse<T> = { code: number; data: T }
type SortDirectionType = 'asc' | 'desc'
```

### 7.3 Specialized Type Suffixes

| Type Usage           | Suffix            | Example                           |
| -------------------- | ----------------- | --------------------------------- |
| Component Props      | Props             | `UserCardProps`, `SearchBarProps` |
| Component Emits      | Emits             | `UserFormEmits`, `ModalEmits`     |
| Data Transfer Object | DTO               | `UserCreateDTO`, `OrderUpdateDTO` |
| View Object          | VO                | `UserDetailVO`, `OrderSummaryVO`  |
| Request Parameters   | Query / Params    | `UserQuery`, `SearchParams`       |
| Response Type        | Response / Result | `UserListResponse`, `LoginResult` |

### 7.4 Generic Parameters

- Single uppercase letters recommended: `T`, `K`, `V`
- Use descriptive names when semantics are clear: `TData`, `TItem`
- Example:

```typescript
type ApiResponse<TData> = { code: number; data: TData }
type Nullable<T> = T | null
```

---

## 8. CSS Class Naming

### 8.1 Naming Convention

- Use BEM naming convention
- Block `__` Element `--` Modifier
- Block and Element use kebab-case
- Example:

```css
.user-card {}
.user-card__header {}
.user-card__title {}
.user-card__content {}
.user-card--active {}
.user-card--disabled {}
```

### 8.2 Constraints

- No ID selectors for styling
- No camelCase for CSS classes
- Public utility classes use a single hyphen prefix (e.g., `is-`, `has-`)

---

## 9. Environment Variable Naming

- Use UPPER_SNAKE_CASE
- Framework prefix + description
- Example:

```
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=My App
NEXT_PUBLIC_GA_ID=UA-123456
```

---

## 10. Prohibited Actions

- No pinyin naming
- No meaningless abbreviations (except `btn`; `act`, `cnt`, `usr`, etc. are prohibited)
- No single-letter variables (except `i`, `j`, `k` in `for` loops)
- No uninformative names like `temp`, `data`, `info`
- No two identifiers in the same scope differing only in case
- No `_` prefix or suffix naming (except framework conventions like `_props`, `_internal`)
- No reserved words as identifiers
