import React from "react";

export default function Follow() {
  const long_text =
    "Hello. My name is Alexander Kalaj. I am a DevOps engineer trying to learn web development. I find that this shit is pretty fucking hard and I regularly struggle with stuff because this shit if fucking hard mang. Hate this shit, but also love this shit.";
  const boxStyle = "bg-slate-100 p-3 rounded";
  return (
    <React.Fragment>
      <div className="bg-blue-400 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2">
          <div className={boxStyle}>box 1</div>
          <div className={boxStyle}>box 2</div>
          <div className={boxStyle}>box 3</div>
          <div className={boxStyle}>{long_text}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
