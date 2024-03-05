import type SelectInputProps from '@/data/interfaces/props/field-input-select';

export default function InputSelect({
  label,
  data,
  name,
  onChange
}: SelectInputProps) {
  return (
    <div className="mb-6">
      <label className="block text-black">{label}</label>
      <select
        name={name}
        onChange={() => onChange}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-green-500 active:border-green-500 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-green-500"
      >
        <option value="">-</option>
        {data.map((item, index) => (
          <option key={index} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
