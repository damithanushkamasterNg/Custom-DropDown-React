import React, { useState } from "react";
import "./CustomDropdown.css";

const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown_button" onClick={toggleDropdown}>
                {selectedOption || "Select an option"}
            </button>
            {isOpen && (
                <ul className="dropdown_list">
                    <li className="dropdown_item" onClick={() => handleOptionClick("Option 1")}>
                        Option 1
                    </li>
                    <li className="dropdown_item" onClick={() => handleOptionClick("Option 2")}>
                        Option 2
                    </li>
                    <li className="dropdown_item" onClick={() => handleOptionClick("Option 3")}>
                        Option 3
                    </li>
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;