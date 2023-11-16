import { useState } from "react";

interface Props {
  codes: string[];
  top: string;
  onSelect: (code: string) => void;
}

function Dir({ codes, top, onSelect }: Props) {
  const [select, set] = useState(-1);

  return (
    <>
      <h1>{top}</h1>
      {codes.length === 0 ? <p>error</p> : null}
      {codes.length === 0 && <p>error</p>}
      <ul className="list-group">
        {codes.map((code, index) => (
          <li
            className={
              select === index ? "list-group-item active" : "list-group-item"
            }
            key={code}
            onClick={() => {
              set(index);
              onSelect(code);
            }}
          >
            {code}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dir;
