This is configured to use the electron@latest: 10.1.3 at the time of writing.

It displays an alert indicating whether or not Wasm compiles successfully, as well as some information about the environment. On my machine, this is:
> We are using Node.js 12.16.3, Chromium 85.0.4183.121, and Electron 10.1.3.

and the alert reports an error:

> CompileError: WebAssembly.instantiateStreaming(): Wasm code generation disallowed by embedder

Either of the following cause the error to go away:
* unsetting `contextIsolation` on line 11 of main.js
* `npm install node@9.0.0`