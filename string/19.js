class StringBuilder {
    constructor() {
        this.strings = [];
    }

    append(value) {
        this.strings.push(value);
        return this; // Allows method chaining
    }

    toString() {
        return this.strings.join('');
    }

    clear() {
        this.strings = [];
    }
}

// Example usage:
const sb = new StringBuilder();
sb.append('Hello, ')
  .append('World!')
  .append(' How are you?');

console.log(sb.toString()); // Output: "Hello, World! How are you?"
