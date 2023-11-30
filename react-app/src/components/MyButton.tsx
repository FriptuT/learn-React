import React, { useState } from "react";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

// const [show, setShow] = useState(true);


const MyButton = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
