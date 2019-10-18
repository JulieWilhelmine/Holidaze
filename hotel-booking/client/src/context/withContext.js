import React from "react";
import { ContextConsumer } from "./context";

export default function withContext(Component) {
    return function WrapperComponent(props) {
        return <ContextConsumer>{state => <Component {...props} context={state} />}</ContextConsumer>;
    };
}
