
const _createScript = (url, callback) => {
    const element = document.createElement("script");
    element.type = "text/javascript";
    element.src = url;
    element.addEventListener('load', callback);
    document.body.appendChild(element);
}

const _searchScript = (url) => {
    const arrScript = document.querySelectorAll('script');
    let inBody = false;
    arrScript.forEach((script) => {
        let src = script.getAttribute('src');
        if (url === src) {
            inBody = true;
        }
    })
    return inBody
}

let cntLoadScripts = 0
const waitCallbacks = []

function loadScript(url = '', callback) {
    cntLoadScripts++;

    if (!Array.isArray(url)) url = [url];
    let scriptsLoad = 0;

    const countScripts = () => {
        ++scriptsLoad
        if (scriptsLoad === url.length) {
            waitCallbacks.unshift(callback);
            cntLoadScripts--
        }
        if (cntLoadScripts === 0) { waitCallbacks.forEach((CBF) => CBF()) }
    }

    url.forEach((value) => {
        if (!_searchScript(value)) {
            _createScript(value, countScripts);
        } else {
            countScripts();
        }
    })

}