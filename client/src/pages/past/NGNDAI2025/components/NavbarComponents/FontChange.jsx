import React, {useState} from "react";
import {MdTextDecrease, MdTextFormat, MdTextIncrease} from "react-icons/md";

const FontChange = () => {
    const [fontSize, setFontSize] = useState(16); // Starting with 16px

    const handleIncrement = () => {
        setFontSize(prevSize => prevSize + 1);
        document.documentElement.style.fontSize = `${fontSize + 1}px`;
    };

    const handleDecrement = () => {
        setFontSize(prevSize => (prevSize > 12 ? prevSize - 1 : prevSize)); // Limit at 12px
        document.documentElement.style.fontSize = `${fontSize - 1}px`;
    };

    const handleDefault = () => {
        setFontSize( 16);
        document.documentElement.style.fontSize = `${fontSize}px`;
    }

    return (<div>
        <div className="flex items-center justify-center gap-2 align-middle *:cursor-pointer *:select-none">
        <span>
          <MdTextIncrease
              className="text-[24px]"
              onClick={handleIncrement}
          />
        </span>
            <span>
          <MdTextFormat className="text-[24px]" onClick={handleDefault}/>
        </span>
            <span>
          <MdTextDecrease
              className="text-[24px]"
              onClick={handleDecrement}
          />
        </span>
        </div>
    </div>);
};

export default FontChange;
