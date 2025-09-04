
import React from "react";

interface IProps {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const QuantityInput: React.FC<IProps> = ({ quantity, setQuantity }) => {

    const increase = () => {
        setQuantity(prev => prev + 1)
    }

    const decrease = () => {
        setQuantity(prev => prev > 2 ? prev - 1 : 1)
    }

    return (
        <div className="mt-3 max-w-[400px]">
            <label className="text-md font-semibold" htmlFor="quantity">
                Quantity
            </label>
            <div className="flex border border-violet-300 rounded-md w-full overflow-clip mt-3">
                <button onClick={decrease} className="w-12 aspect-square text-xl cursor-pointer bg-gray-200 overflow-clip">-</button>
                <input
                    id="quantity"
                    readOnly={true}
                    className="flex-1 h-12 px-2 text-center outline-none"
                    value={quantity}
                    min={1}
                />
                <button onClick={increase} className="w-12 aspect-square text-xl cursor-pointer bg-gray-200">+</button>
            </div>
        </div>
    );
};

export default QuantityInput;
