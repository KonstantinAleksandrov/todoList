export interface IInputProps {
    placeholder: string,
    maxLength: number
    changeHandler: (e: React.ChangeEvent) => void
}