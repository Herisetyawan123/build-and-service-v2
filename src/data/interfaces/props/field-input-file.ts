export default interface InputFileProps {
  name: string;
  value?: string;
  label: string;
  onChange?: (e: Event) => void;
  type: string;
}
