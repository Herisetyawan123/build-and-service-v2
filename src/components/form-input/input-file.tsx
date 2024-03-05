import type InputFileProps from '@/data/interfaces/props/field-input-file';

export default function InputFile({
  label,
  name,
  onChange,
  value,
  type
}: InputFileProps) {
  return (
    <div className="mb-6">
      <label className="mb-3 block text-black">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={() => onChange}
        className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#c3c3c3] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-green-500 file:focus:border-green-500 active:border-green-500 disabled:cursor-default disabled:bg-whiter"
      />
    </div>
  );
}
