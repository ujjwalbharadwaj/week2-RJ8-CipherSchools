import React, { useState } from "react";

// class Name extends Component {
//     state = { name: "Ujjwal Bhardwaj!" };

//     setName(name) {
//         this.setState({ ...this.state, name});
//     }
//     render() {
//         return (
//             <>
//             <h1>The name is: {this.state.name}</h1>
//             <button onClick={() => this.setName("Ujjwal")}>Click Me!</button>
//             </>
//         );
//     }
// }

const Name = () => {
    const [state, setState] = useState({ name: "Ujjwal Bhardwaj!" });

    let setName = (e) => {
        setState({ ...state, name: "Ujjwal"});
    };

    return (
        <>
        <h1>The name is: {state.name}</h1>
        <button onClick={setName}>Click Me!</button>
        </>
    );
};

export default Name;