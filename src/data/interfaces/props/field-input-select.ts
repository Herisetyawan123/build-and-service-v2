import { ListSelect } from "@/data/types/select-option";

export default interface SelectInputProps {
  name: string;
  placholder: string;
  label: string;
  onChange?: void;
  data: ListSelect[];
}
