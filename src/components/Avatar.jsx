import avatar from "../assets/images/avatar-jessica.jpeg";

const Avatar = () => {
    return (
        <div className="rounded-full overflow-clip w-32 h-32">
            <img src={avatar} alt="jessica" />
        </div>
    );
};

export default Avatar;
