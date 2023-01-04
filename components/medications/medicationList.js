import Link from "next/link";

export default function MedicationList({ medications }) {
  return (
    <>
      <p className="font-bold">Current Medications</p>
      <ul className="list-disc pl-2">
        {medications.map((medication) => {
          return (
            <li>
              <p className="text-xl">{medication.name}: </p>
              <p>{medication.dosage}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
