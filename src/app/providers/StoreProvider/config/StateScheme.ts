import { CounterScheme } from "entities/Counter";
import { UserScheme } from "entities/user";

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme;
}
