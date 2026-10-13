interface Props {
  trenutno: number;
  ukupno: number;
}

const TestNapredak = ({ trenutno, ukupno }: Props) => {
  const procenat = Math.round((trenutno / ukupno) * 100);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="font-medium text-[#10375C]">
          Pitanje {trenutno} od {ukupno}
        </span>
        <span className="text-gray-500">{procenat}%</span>
      </div>
      <div
        className="h-2 w-full bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={procenat}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Napredak kroz test"
      >
        <div
          className="h-full bg-yellow-500 rounded-full transition-[width] duration-300 ease-out"
          style={{ width: `${procenat}%` }}
        />
      </div>
    </div>
  );
};

export default TestNapredak;
