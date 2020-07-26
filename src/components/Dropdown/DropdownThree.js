import React from 'react'
import Select from 'react-select';
import './DropdownThree.css';

const DropdownThree = () => {
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
            height: 35,
            width: 110,
            minHeight: 35,
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
                placeholder="menu"
                className="customClass"
                styles={style}
            />
        </div>
    )
}

export default DropdownThree
