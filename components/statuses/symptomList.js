import Link from "next/link";

export default function SymptomList({ symptoms }) {
  return (
    <>
      <p className="font-bold">Active Symptoms</p>
      <ul className="list-disc pl-2">
        {symptoms.map((symptom) => {
          return (
            <li>
              <Link className="underline text-blue-500 text-xl" href="#">
                {symptom}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
