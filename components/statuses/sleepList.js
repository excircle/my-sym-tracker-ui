export default function SleepList({ sleeps }) {
  return (
    <>
      <p className="font-bold">Sleep Statistics</p>
      <ul className="list-disc pl-2">
        {sleeps.map((sleep) => {
          return (
            <>
              <li>
                <p>
                  REM Sleep: {sleep.rem.hour}h {sleep.rem.minute}m{" "}
                </p>
              </li>
              <li>
                <p>
                  Core Sleep: {sleep.core.hour}h {sleep.core.minute}m{" "}
                </p>
              </li>
              <li>
                <p>
                  Deep Sleep: {sleep.deep.hour}h {sleep.deep.minute}m{" "}
                </p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
