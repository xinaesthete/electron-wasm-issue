// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const wasm = fetch('./node_modules/vscode-oniguruma-wasm/release/onig.wasm');

wasm.then((response) => {
    return onig.loadWASM(response);
}).then(() => {
    alert(`initialized OK!`);
}).catch((reason) => {
    console.error(reason);
    alert(`failed: '${reason}'`);
});
