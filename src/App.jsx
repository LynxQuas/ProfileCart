import Avatar from "./components/Avatar";
import Profession from "./components/Profession";
import ProfileInfo from "./components/ProfileInfo";
import SocialMedia from "./components/SocialMedia";
import CartContainer from "./ui/CartContainer";

const App = () => {
    return (
        <main className="bg-[#141414] w-screen h-screen text-white">
            <CartContainer>
                <Avatar />
                <ProfileInfo />
                <Profession />
                <SocialMedia />
            </CartContainer>
        </main>
    );
};

export default App;
