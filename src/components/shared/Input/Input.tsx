import './Input.scss';

import { Field, useFormikContext } from 'formik';
import React from 'react';

interface IInputProps {
  name: string;
  placeholder: string;
  className?: string;
  maxLength?: string;
  as?: string;
  required: boolean;
}

const Input: React.FC<IInputProps> = ({
  name,
  placeholder,
  className,
  maxLength,
  as = "input",
  required,
}: IInputProps) => {
  const { errors } = useFormikContext();
  return (
    <>
      <Field
        className={`input ${className}`}
        name={name}
        as={as}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-required={required}
        aria-label={placeholder}
        data-testid={name}
      />
      {errors[name] && (
        <div className="input__error" data-testid="error">
          {errors[name]}
        </div>
      )}
    </>
  );
};

export default Input;
