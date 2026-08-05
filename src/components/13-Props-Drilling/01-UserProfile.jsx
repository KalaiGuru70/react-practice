/*
Topic      : React Props Drilling
Program    : User Profile
Purpose    : Pass user data from UserProfile to GrandChild using props.
*/

import Parent from "./02-Parent";

function UserProfile() {

    const user = "Kalaiselvi";

    return (
        <div>
            <h2>Props Drilling Example</h2>
            <Parent user={user} />
         </div>
    );

}

export default UserProfile;

/*
=========================
Output

Props Drilling Example

User Name : Kalaiselvi
=========================
*/