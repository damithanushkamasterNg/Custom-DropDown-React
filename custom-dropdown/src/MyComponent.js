import React from 'react';
import CustomDropdownStatic from './CustomDropdown-Static';
import CustomDropdownDynamic from "./CustomDropdown-Dynamic";

function MyComponent() {
    return (
        <div>
            <CustomDropdownStatic/>
            <CustomDropdownDynamic options={["Option 1", "Option 2", "Option 3"]} />
        </div>
    );
}

export default MyComponent;
