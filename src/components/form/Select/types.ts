export interface Props {
    onChange?: (name: string, value: string) => void;
    label?: string;
    name: string;
    options: [{
        value: string;
        key: string;
    }];
    value: string;
    error?: string;
}
