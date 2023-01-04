import React from "react";
import SymptomList from "../statuses/symptomList";
import MedicationList from "../statuses/medicationList";
import SleepList from "../statuses/sleepList";
import CardiopulmonaryList from "../statuses/cardiopulmonaryList";

export default function Status({ session }) {
  const temp_symp_list = ["heart flutter", "restlessness", "dizziness"];
  const temp_med_list = [
    {
      name: "propranolol",
      dosage: "20mg",
    },
    {
      name: "aprazolam",
      dosage: "0.25mg",
    },
  ];
  const temp_sleep_list = [
    {
      rem: {
        hour: 3,
        minute: 23,
      },
      core: {
        hour: 6,
        minute: 33,
      },
      deep: {
        hour: 6,
        minute: 33,
      },
    },
  ];
  const temp_carpul_list = [
    {
      cardio: {
        daily_avg_bpm: 69,
        five_day_avg_bmp: 71,
      },
      pulmonary: {
        daily_avg_bpm: 23,
        five_day_avg_bmp: 29,
      },
    },
  ];
  const boxStyle = "bg-white p-3 rounded w-56";
  const container = "grid grid-cols-2 grid-rows-2 gap-4";
  const main_div = "bg-slate-300 flex item-center justify-center py-4";
  const email_div = "bg-slate-300 flex item-center justify-center py-2";
  const imgClass = "py-2 rounded";

  return (
    <React.Fragment>
      <div className={email_div}>
        <p className="text-xl">Welcome, {session.user.name}</p>
      </div>
      <div className={email_div}>
        <p className="text-xl">Email: {session.user.email}</p>
      </div>
      <div className={email_div}>
        <img className={imgClass} src={session.user.image} alt="User Logo" />
      </div>
      <div className={main_div}>
        <div className={container}>
          <div className={boxStyle}>
            <SymptomList symptoms={temp_symp_list} />
          </div>
          <div className={boxStyle}>
            <MedicationList medications={temp_med_list} />
          </div>
          <div className={boxStyle}>
            <SleepList sleeps={temp_sleep_list} />
          </div>
          <div className={boxStyle}>
            <CardiopulmonaryList carpuls={temp_carpul_list} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
