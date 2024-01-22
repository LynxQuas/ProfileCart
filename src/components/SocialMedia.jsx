const SocialMedia = () => {
    return (
        <ul className="w-full flex flex-col justify-center items-center text-stone-300 gap-4 font-bold">
            <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full"
            >
                <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                    Github
                </li>
            </a>

            <a
                href="https://www.frontendmentor.io/home"
                target="_blank"
                rel="noreferrer"
                className="w-full"
            >
                <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                    Frontend Mentor
                </li>
            </a>

            <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full"
            >
                <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                    LinkedIn
                </li>
            </a>

            <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full"
            >
                <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                    Twitter
                </li>
            </a>

            <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full"
            >
                <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                    Instagram
                </li>
            </a>
        </ul>
    );
};

export default SocialMedia;
