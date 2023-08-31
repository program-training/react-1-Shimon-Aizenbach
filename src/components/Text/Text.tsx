import { useState } from "react";

export default function Text() {
    const [state, setState] = useState<Boolean>(true)
    return <div>
        {state && <h2>Hello World</h2>}
        <button onClick={() => setState(state => !state)}>Click Me</button>
    </div>
}

