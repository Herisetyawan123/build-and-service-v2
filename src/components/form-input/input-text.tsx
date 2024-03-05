import type InputFieldProps from '@/data/interfaces/props/field-input-text';

export default function InputText({
  label,
  type,
  name,
  placholder,
  value,
  onChange
}: InputFieldProps) {
  return (
    <div className="mb-6">
      <label className="mb-1 block text-black">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placholder}
        value={value}
        onChange={() => onChange}
        className="w-full bg-white rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-green-500 active:border-green-500 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-green-500"
      />
    </div>
  );
}
