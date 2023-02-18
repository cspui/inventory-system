import classNames from 'classnames';
import { ClassAttributes, InputHTMLAttributes } from 'react';

export interface IInputProps
  extends JSX.IntrinsicAttributes,
    ClassAttributes<HTMLInputElement>,
    InputHTMLAttributes<HTMLInputElement> {
  iserror?: boolean;
  extra?: any;
}

const Input = (props: IInputProps) => {
  return (
    <input
      {...props}
      iserror={undefined} // prevents passing custom attr to DOM element
      {...props.extra}
      className={classNames(
        props?.className,
        'focus-visible:outline-nightBlack-500 border-2 px-4 py-3 text-base',
        props.disabled ? 'border-greyCool text-greyCool' : 'hover:border-nightBlack-500',
        props.type != 'radio' && 'rounded',
        props.iserror &&
          'border-candyAppleRed-500 text-candyAppleRed-500 focus-visible:outline-candyAppleRed-500'
      )}
    />
  );
};

export default Input;
