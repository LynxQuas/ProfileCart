import Avatar from "./components/Avatar";
import Profession from "./components/Profession";
import ProfileInfo from "./components/ProfileInfo";
import SocialMedia from "./components/SocialMedia";
import CartContainer from "./components/ui/CartContainer";

const App = () => {
    return (
        <div className="bg-[#141414] w-screen h-screen text-white">
            <CartContainer>
                <Avatar />
                <ProfileInfo />
                <Profession />
                <SocialMedia />
            </CartContainer>
        </div>
    );
};

export default App;
