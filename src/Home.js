import react from "react";
import app from "./base";
import { getAuth } from "firebase/auth";

const Home = () => {
    return(
        <>
        <h1>Home</h1>
        <button onClick={() => getAuth().signOut()}>Sign out</button>
        </>
    );
};

export default Home;