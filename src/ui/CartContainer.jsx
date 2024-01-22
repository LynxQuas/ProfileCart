/* eslint-disable react/prop-types */
const CartContainer = ({ children }) => {
    return (
        <div className="flex flex-col items-center gap-6 bg-[#1f1f1f] w-[90%] md:w-[25rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 rounded-2xl">
            {children}
        </div>
    );
};

export default CartContainer;
