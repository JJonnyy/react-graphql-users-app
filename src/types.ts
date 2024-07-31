import type { GetUsersQuery } from "./graphql/generated";

// Assuming `messages` is an array in your `U` type
export type Message = GetUsersQuery["users"] extends (infer U)[]
    ? U extends { messages: (infer M)[] }
        ? M
        : never
    : never;

export type User = GetUsersQuery["users"] extends (infer U)[]
    ? U
    : never;


