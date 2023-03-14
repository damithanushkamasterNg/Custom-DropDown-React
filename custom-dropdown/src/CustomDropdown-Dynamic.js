import React, { useState } from "react";
import "./CustomDropdown.css";

const CustomDropdownDynamic  = ({ options }) => {
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
                <h2>DropDown-Dynamic</h2>
                <li>Create a new React component called "CustomDropdown-Dynamic".</li>
                <li>Add state to the component to keep track of whether the dropdown is open or closed.</li>
                <li>Add CSS styles to the component to make it look like a dropdown.</li>
                <li>Add functionality to the dropdown to allow users to select an option.</li>
                <li>Pass an array of options as a prop to the component."</li>
                <li>Use the component in your application.</li>
            </ul>
            <button className="dropdown_button" onClick={toggleDropdown}>
                {selectedOption || "Select an option-Dynamic"}
            </button>
            {isOpen && (
                <ul className="dropdown_list">
                    {options.map((option) => (
                        <li key={option} className="dropdown_item" onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdownDynamic;