# Go Coding Standards

## 1. Code Organization
### 1.1 Package Structure
- Code within a package should have a single clear responsibility; avoid miscellaneous packages like util/common/misc
- Types and functions with similar functionality should be placed in the same package
- Avoid circular dependencies; isolate internal types with `internal/`
- Split files within a package by responsibility: service.go, repository.go, handler.go

### 1.2 File Organization
- Each file focuses on one core type and its methods
- Exported types go in files with the same name: user.go contains the User struct and its methods
- Order within a file: package declaration → import → constants → variables → type definitions → constructor → public methods → private methods

### 1.3 Package Documentation
- Every package must have a package-level comment before the package declaration
- Start with `Package <package name>`
- Example:
```go
// Package user provides user-related business logic and data access.
package user
```

## 2. Naming Conventions
### 2.1 Package Naming
- All lowercase, singular, short, no underscores; avoid conflicting with standard library names

### 2.2 Interface Naming
- Single-method interfaces use `-er` suffix: Reader, Writer, Closer
- Multi-method interfaces use nouns: UserStore, PaymentGateway
- Define interfaces at the point of use

### 2.3 Getter/Setter
- Getters do not use a `Get` prefix: `Name()` instead of `GetName()`
- Setters use a `Set` prefix: `SetName(name string)`

### 2.4 Variable Naming
- Short scopes may use short names (i, ctx, err); long scopes require descriptive names
- Avoid repeating the package name: `user.User{}` instead of `user.UserInfo{}`
- Acronyms should be all uppercase or all lowercase: `HTTPServer` or `httpServer`, never `HttpServer`

## 3. Import Conventions
- Standard library → third-party libraries → internal packages, separated by blank lines
- No relative path imports (`./`, `../`)
- No dot imports (`.`) except in test files
- No importing unused packages
- Blank imports (`_`) must include a comment explaining why

## 4. Error Handling
### 4.1 Basic Principles
- Errors must be handled explicitly; never ignore with `_`
- Handle errors only once: either propagate or log and handle, never both

### 4.2 Error Wrapping
- When propagating upward, wrap context with `fmt.Errorf("...: %w", err)`
- Callers use `errors.Is` and `errors.As` for checks; never compare error strings

```go
func GetUser(id int) (*User, error) {
    user, err := repo.FindByID(id)
    if err != nil {
        return nil, fmt.Errorf("get user %d: %w", id, err)
    }
    return user, nil
}
```

### 4.3 Custom Errors
- Sentinel errors: `var ErrNotFound = errors.New("not found")`
- Complex error types implement the `Error()` method; implementing `Unwrap()` is also recommended

### 4.4 Panic Usage
- Only for unrecoverable initialization failures
- Never use panic in library code
- recover only at the top level of the program or in goroutines that explicitly need protection

## 5. Concurrency Conventions
### 5.1 Goroutine Management
- Every goroutine must have a clear exit condition
- Use `sync.WaitGroup` or `errgroup` for waiting
- Never directly modify outer loop variables in goroutines (must pass a copy)

```go
for _, item := range items {
    go func(item Item) {
        process(item)
    }(item)
}
```

### 5.2 Channel Usage
- Channel owners are responsible for closing; consumers should not close
- Prefer `select` with `context.Done()` for timeouts and cancellation
- Channel capacity must have a clear justification

### 5.3 Synchronization Primitives
- Prefer `sync.Mutex` over channels for simple mutual exclusion
- `sync.Map` only for specific scenarios
- Never copy synchronization primitives like `sync.Mutex` (pass by pointer)

## 6. Context Usage
### 6.1 Propagation Rules
- `context.Context` as the first parameter of functions, named `ctx`
- Never store in structs (except request-scoped middleware)
- No global context variables

### 6.2 Cancellation and Timeout
- Every request chain must have timeout control
- Use `context.WithTimeout` or `WithDeadline`
- Goroutines must have their lifecycle controlled via context

### 6.3 Value Passing
- Context is only for passing request-scoped values (trace ID, user ID); never pass business parameters
- Use custom types as context keys; never use strings

## 7. Interface Design
- Keep interfaces as small as possible; prefer 1-3 methods
- Follow the Interface Segregation Principle
- Define interfaces at the point of use; return concrete types, accept interface types

```go
func SaveUser(store UserStore, user User) error { ... }

type UserStore interface {
    Save(User) error
    FindByID(int) (*User, error)
}
```

## 8. Testing Conventions
- Use Go's standard testing framework
- Test files: `*_test.go`, same directory
- Prefer table-driven tests
- Test helper functions marked with `t.Helper()`
- Prefer interfaces for mocking
- Never use `time.Sleep` to wait for async results
- Use `t.Parallel()` for independent test cases
- New code must cover core paths
- Bug fixes must include test cases
- Use `go test -race ./...` to detect data races

## 9. Dependency Management
- `go.mod` uses an explicit Go version
- Dependency versions are precisely pinned
- Never manually edit `go.sum`
- Clean up deprecated dependencies promptly
- Large projects may use monorepo with multiple `go.mod`
- Shared internal code uses `internal/`

## 10. Performance Conventions
- Use `make` with pre-allocated capacity for slices and maps of known size
- Avoid frequent creation of small objects on hot paths
- Use `sync.Pool` for temporary object reuse
- Use `strings.Builder` for heavy string concatenation
- Avoid `fmt.Sprintf` in loops
- Performance-sensitive code must include benchmarks

## 11. Prohibited Actions
- No panic as a substitute for error returns
- No ignoring errors (`_` swallowing errors)
- No capturing loop variables in goroutines
- No relative path and dot imports
- No exporting types and functions that don't need external exposure
- No hardcoding keys/credentials
- No side effects in `init()` other than registration
- No passing business parameters via context
- No copying structs containing `sync.Mutex`
- No using `reflect` and `unsafe` in production code (unless explicitly optimized and reviewed)
