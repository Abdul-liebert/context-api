import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
    const {profile, toggleProfile} = useContext(UserContext)

    const status = profile === 'guess' ? 'sign up' : 'logout';

    return (
        <div>
            <h1>User is : {profile}</h1>
            <button onClick={() => toggleProfile()}>{status}</button>
        </div>
    )
}

export default UserProfile;