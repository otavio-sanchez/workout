export interface Props {
    onChange?: (name: string, value: Date | [Date, Date]) => void;
    placeholder?: string;
    name: string
}
