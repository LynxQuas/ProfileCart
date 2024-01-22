const SocialMedia = () => {
    return (
        <ul className="w-full flex flex-col justify-center items-center text-stone-300 gap-4 font-bold">
            <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                >
                    Github
                </a>
            </li>

            <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                <a
                    href="https://www.frontendmentor.io/home"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                >
                    Frontend Mentor
                </a>
            </li>

            <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                >
                    LinkedIn
                </a>
            </li>

            <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                >
                    Twitter
                </a>
            </li>

            <li className="bg-[#333333] hover:text-black py-3 w-full rounded-lg text-center hover:bg-[#c5f82a] cursor-pointer">
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                >
                    Instagram
                </a>
            </li>
        </ul>
    );
};

export default SocialMedia;
