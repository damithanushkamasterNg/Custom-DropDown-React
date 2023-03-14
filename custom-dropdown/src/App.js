import './App.css';
import MyComponent from "./MyComponent";

function App() {
    return (
        <div>
            <ul>
                <li>Create a new React component called "CustomDropdown"</li>
                <li>Add state to the component to keep track of whether the dropdown is open or closed.</li>
                <li>Add CSS styles to the component to make it look like a dropdown.</li>
                <li>Add functionality to the dropdown to allow users to select an option.</li>
                <li>Use the component in your application.</li>
            </ul>

            <MyComponent/>
        </div>
    );
}

export default App;
