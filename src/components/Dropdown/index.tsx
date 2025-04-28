import { useState } from "react";

interface IDropdownProps {
    options: {id: string | number, name: string}[];
    defaultValue: string;
    label?: string;
    onChange: (value: string) => void;
}
const Dropdown = ({options, defaultValue, label, onChange}: IDropdownProps) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    
    const handleChange = (event: any) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
        setSelectedValue(selectedValue);
    };

    return (
        <div className="dropdown">
            {label && <label htmlFor="dropdown">{label}</label>}
            <select id="dropdown" value={selectedValue} onChange={handleChange}>
                {options.map((option: any) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;