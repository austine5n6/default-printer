# default-printer package

## Installation

To install this package, run:

```javascript
npm install default-printer
```



## Usage

To use this package, it should be included in a async function as shown below;

```javascript
const printer = require('default-printer');
  async function test() {
      try {
    const default_printer = await printer.getDefaultPrinter();
    console.log(default_printer);
        } 
        catch (err) {
    console.error(err);
  }
  }
```

  ## API
## getDefaultPrinter()
 The function uses the child_process module to spawn a new Python process and execute a Python script named get_default_printer.py. 
 The Python script retrieves the name of the default printer installed on a Windows machine and sends it back to the Node.js process through the stdout stream.

The getDefaultPrinter function returns a Promise that resolves with the name of the default printer when the Python process exits with a success status code, or rejects with an error if the Python process exits with a non-zero status code or an error occurs.

In summary, the getDefaultPrinter function provides a way for Node.js applications to retrieve the name of the default printer installed on a Windows machine using Python.


