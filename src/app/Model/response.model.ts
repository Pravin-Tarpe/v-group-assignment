import { Employee } from "./employee.model";

export interface Response {
    status : string,
    data : Employee[],
    message: string
}