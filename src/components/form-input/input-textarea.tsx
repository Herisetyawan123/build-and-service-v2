import type InputTextareaProps from '@/data/interfaces/props/field-input-textarea';

export default function InputTextArea({
  label,
  name,
  placholder,
  onChange,
  value
}: InputTextareaProps) {
  return (
    <div className="mb-6">
      <label className="mb-1 block text-black">{label}</label>
      <textarea
        rows={6}
        name={name}
        placeholder={placholder}
        value={value}
        onChange={() => onChange}
        className="w-full bg-white rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-green-500 active:border-green-500 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-green-500"
      ></textarea>
    </div>
  );
}
