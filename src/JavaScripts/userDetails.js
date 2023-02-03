// import React, {Component } from "react";
// import React from "react";
import React, {useState} from "react";
// const UserDetails = (props) => {
//     props.user = {
//         name: "Alex",
//         email: "alex@email.com",
//         phoneNumber: "+91-6987564230"
//     };
//     let user = props.user;
//     return (
//         <div>
//              <h3>{user.name}</h3>
// //             <h5>
// //                 Email: {user.email}
// //                 <br />
// //                 Phone Number: {user.phoneNumber}
// //             </h5>
//         </div>
//     );
// };

// const UserDetails = ({user = {}}) => {
//     const UserDetails = (props) => {
        const UserDetails = ({user = {}}) => {
            const [h1Text, setH1Text] = 
            useState("This is Demo Component!");
        // let user = props.user;
        // let {user} = props;
    return (
        <div>
            <h3>{user.name}</h3>
            <h5>
                Email: {user.email}
                <br />
                Phone Number: {user.phoneNumber}
            </h5>
            
            <h1>{h1Text}</h1>
            <button onClick={(e) => {
                // console.log(e);
                setH1Text("This is Ciphar School");
            }}
            >Click Me!
            </button>
        </div>
    );
};

// class UserDetails extends Component {
//     user = this.props.user;

//     render() {
        
//         return (
//             <div>
//                  <h3>{this.user.name}</h3>
//              <h5>
//                 Email: {this.user.email}
//                  <br />
//                  Phone Number: {this.user.phoneNumber}
//              </h5>
//             </div>
//         );
//     }
// }

export default UserDetails;