interface IError {
    isError: boolean,
    errorText: string
}

class ErrorsStore {
    public loadTasksError: IError
    public loadCategoriesError: IError
    public loadAllDataError: IError
    public addNewTaskError: IError
    public editTaskError: IError
    constructor(){
        this.loadTasksError = {
            isError: false,
            errorText: 'Произошла ошибка при загрузке списка задач'
        }
        this.loadCategoriesError = {
            isError: false,
            errorText: 'Произошла ошибка при загрузке списка категорий'
        }
        this.loadAllDataError = {
            isError: false,
            errorText: 'Произошла ошибка при загрузке данных'
        }
        this.addNewTaskError = {
            isError: false,
            errorText: 'Произошла ошибка при добавлении новой задачи'
        }
        this.editTaskError = {
            isError: false,
            errorText: 'Произошла ошибка при добавлении новой задачи'
        }
    }
}

export default ErrorsStore