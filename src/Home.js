import react from "react";
import app from "./base";

const Home = () => {
    return(
        <>
        <hi>Home</hi>
        <button onClick={() => app.auth().signOut()}></button>
        </>
    );
};

export default Home;