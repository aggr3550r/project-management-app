export class ResponseModel<T> {
  statusCode: string | number;
  message: string;
  data: T;

  constructor(statusCode: string, message: string, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
