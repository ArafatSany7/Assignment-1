## Type Safety: Why `unknown` is Superior to `any`

## Introduction
TypeScript's primary goal is helping developers to catch errors at compiletime rather than runtime.when working with dynamic data, such as API payloads or user inputs, we often face unpredictable types. While it might be tempting to use the `any` type to bypass strict checks, it acts as a "type safety hole." The `unknown` type offers a much safer alternative.

---

# Why `any` is a “type safety hole”
The type any basically turns off the type system for whatever value it touches.

```typescript
let value: any = "hello";
value.toUpperCase();
value.nonExistent();
```

By declaring value: `any`,we essentially turned off TypeScript type checker for that specific variable.For this reason compiler allows any operation on value, even if it doesn’t exist at runtime.This is why it’s called a type safety hole.

## Why `unknown` is safer 
The unknown type is the type-safe counterpart to any.we assign any value to an unknown variable, but TypeScript will strictly prevent from performing operation on it until we explicitly decleare what type it is.

```typescript
let value: unknown = "hello";
value.toUpperCase(); // Error
```

TypeScript blocks this because it doesn’t know what value is yet. until we decleare its type.

## Type Narrowing
Type narrowing means reducing a broad type into a more specific type after checking what the value actually is.It helps TypeScript understand the exact kind of data being used, so the program can safely use the correct properties and methods without causing errors.

```typescript
if (typeof value === "string") {
  value.toUpperCase();
}
```

By utilizing unknown combined with type narrowing, we maintain the flexibility needed for unpredictable data .


## Conclusion
While any might save time in the short term, it compromises your application's stability. By defaulting to unknown for unpredictable data, you force yourself to write type guards, ensuring your code remains predictable, strictly typed, and completely safe at runtime.