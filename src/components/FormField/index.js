import React from 'react';


function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        {type === "textarea" ? (
            <textarea
                name="descricao"
                value={value}
                onChange={onChange}
            />
        ) : (
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange} />
        )}
      </label>
    </div>
  );
}

export default FormField;