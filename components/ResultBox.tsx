export default function ResultBox({
  text,
  isError,
  placeholder,
}: {
  text: string;
  isError: boolean;
  placeholder: string;
}) {
  return (
    <div
      className={
        "mt-4 rounded-lg border px-3 py-2 text-sm " +
        (isError
          ? "border-red-500/30 bg-red-500/10 text-red-200"
          : "border-slate-700/30 bg-slate-900/20 text-slate-300")
      }
    >
      {text || placeholder}
    </div>
  );
}