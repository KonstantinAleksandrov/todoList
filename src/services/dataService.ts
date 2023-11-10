class DataService {
    private BASE_URL: string
    constructor() {
        this.BASE_URL = 'http://localhost:8089/api/ToDoList/'
    }

    getTasks = <T>(): Promise<T> => {
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}GetTasks`)
              .then((response) => response.json())
              .then((result) => {
                resolve(result);
              })
              .catch((err) => reject(err));
          });
    }

    getCategories = <T>(): Promise<T> => {
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}GetCategories`)
            .then((response) => response.json())
            .then((result) => {
              resolve(result);
            })
            .catch((err) => reject(err));
        })
    }

    getAllData = <taskType, categoryType>(): Promise<{tasks: taskType, categories: categoryType}>  => {
        return new Promise((resolve,reject)=> {
            Promise.all([this.getTasks<taskType>(),this.getCategories<categoryType>()])
            .then(([tasks,categories])=>{
                resolve({tasks,categories})
            })
            .catch((error)=> {
                reject(error)
            })
        })
    }
}

export const dataService = new DataService()