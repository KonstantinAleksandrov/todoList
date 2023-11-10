export interface ITextAreaProps {
    placeholder: string,
    maxLength: number
    changeHandler: (e: React.ChangeEvent) => void
}