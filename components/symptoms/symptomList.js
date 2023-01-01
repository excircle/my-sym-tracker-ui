export default function SymptomList({ symptoms }) {
  return (
    <>
      <p className="font-bold">Active Symptoms</p>
      <ul className="list-disc pl-2">
        {symptoms.map((symptom) => {
          return <li>{symptom}</li>;
        })}
      </ul>
    </>
  );
}
