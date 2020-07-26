import React from 'react'
import Select from 'react-select';
import './Dropdown.css';

const Dropdown = () => {
    function customTheme(theme) {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                text: '#000',
            },
        }
    }

    const style = {
        control: base => ({
            ...base,
            // This line disable the blue border
            boxShadow: '0 !important',
            height: 50,
            minHeight: 50,
            borderRadius: '50px !important',
            border: 0,
        })
    };

    const options = [
        { value: 'option1', label: 'Option 1', },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
    return (
        <div>
            <Select
                theme={customTheme}
                options={options}
                placeholder="Choose plan"
                className="customClass"
                styles={style}
            />
        </div>
    )
}

export default Dropdown
