import React, { useState } from 'react';
import '../styles/Collapse.scss';

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`collapse${open ? ' open' : ''}`}>
      <button className="collapse-header" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <span className={`collapse-arrow${open ? ' up' : ''}`}>▲</span>
      </button>
      {open && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
