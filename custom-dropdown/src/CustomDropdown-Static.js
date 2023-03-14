import React, { useState } from "react";
import "./CustomDropdown.css";

const CustomDropdownStatic = () => {
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
            <ul>
                <h2>DropDown-Static</h2>
                <li>Create a new React component called "CustomDropdown-Static"</li>
                <li>Add state to the component to keep track of whether the dropdown is open or closed.</li>
                <li>Add CSS styles to the component to make it look like a dropdown.</li>
                <li>Add functionality to the dropdown to allow users to select an option.</li>
                <li>Use the component in your application.</li>
            </ul>
            <button className="dropdown_button" onClick={toggleDropdown}>
                {selectedOption || "Select an option-Static"}
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

export default CustomDropdownStatic;