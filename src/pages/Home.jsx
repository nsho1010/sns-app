import { useContext } from "react";
import { SessionContext } from "../SessionProvider";
import { Navigate } from "react-router-dom";

const Home = () => {
    const { currentUser } = useContext(SessionContext);

    // ログインしていなければログインページに遷移させる
    if (currentUser == null) return <Navigate replace to="/signin" />;
    return <div>Home</div>;
};

export default Home;
