import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-dark" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button