import React from 'react';

const Selection = ({options, value, onChange}) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            { options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            ) }
        </select>
    );
};

export default Selection;