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
}

export const dataService = new DataService()