export default function CardiopulmonaryList({ carpuls }) {
  return (
    <>
      <p className="font-bold">Cardiopulmonary Statistics</p>
      <ul className="list-disc pl-2">
        {carpuls.map((carpul) => {
          return (
            <>
              <li>
                <p>Beats Per Minute: {carpul.cardio.daily_avg_bpm}</p>
              </li>
              <li>
                <p>5 Day BPM Average: {carpul.cardio.five_day_avg_bmp}</p>
              </li>
              <li>
                <p>Breaths Per Minute: {carpul.pulmonary.daily_avg_bpm}</p>
              </li>
              <li>
                <p>5 Day BPM Average: {carpul.pulmonary.five_day_avg_bmp}</p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
