import React from 'react';

function LabeledInput(props) {
    const { label, id, ...rest } = props;
    return (
        <>
            <label
                htmlFor={id}
                className="block text-sm text-gray-600 mb-2">
                {label}
              </label>
              <input
                className="text-sm rounded-md w-full bg-special-mainBg border border-gray-200 text-gray-700 py-2 px-3 focus:border-gray-400 focus:outline-none focus:ring-0"
                id={id}
                {...rest}
              />
        </>
    );
}

export default LabeledInput;