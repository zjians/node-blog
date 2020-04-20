class BaseModel {
  constructor(data, message) { 
    if (typeof data === 'string') {
      this.message = data;
      data = message = null;
    }
    if (data) this.data = data;
    if (message) this.message = message;
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.code = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.code = 10000;
  }
}

module.exports = {
  ErrorModel,
  SuccessModel
}