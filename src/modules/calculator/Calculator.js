export class Calculator {
  static checkType(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      throw new Error("wrong type, please input a numeric value");
    }
  }

  static add(a, b) {
    this.checkType(a, b);
    return Math.round((a + b) * 100) / 100;
  }

  static subtract(a, b) {
    this.checkType(a, b);
    return Math.round((a - b) * 100) / 100;
  }

  static multiply(a, b) {
    this.checkType(a, b);
    return Math.round(a * b * 100) / 100;
  }

  static divide(a, b) {
    this.checkType(a, b);

    if (b === 0) {
      throw new Error("a division by zero is impossible");
    }
    return Math.round((a / b) * 100) / 100;
  }
}
