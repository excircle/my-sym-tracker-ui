import React from "react";
import SymptomList from "../components/symptoms/symptomList";

export default function Home() {
  const temp_symp_list = ["heart flutter", "restlessness"];
  const boxStyle = "bg-white p-3 rounded w-56";
  const container = "grid grid-cols-2 grid-rows-2 gap-4";
  const main_div = "bg-slate-300 flex item-center justify-center py-4";

  return (
    <React.Fragment>
      <div className={main_div}>
        <div className={container}>
          <div className={boxStyle}>
            <SymptomList symptoms={temp_symp_list} />
          </div>
          <div className={boxStyle}>box 2</div>
          <div className={boxStyle}>box 3</div>
          <div className={boxStyle}>box 4</div>
        </div>
      </div>
    </React.Fragment>
  );
}
