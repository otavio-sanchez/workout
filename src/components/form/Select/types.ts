export interface Props {
    onClick?: (name: string, value: string) => void;
    label?: string;
    name: string;
    options: [{
        value: string;
        key: string;
    }]
}
