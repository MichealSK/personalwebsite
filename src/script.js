function clipboardCopy(startT, typeT) {
    let a = document.createElement('input');
    a.setAttribute('value', startT); document.body.appendChild(a);
    a.select(); document.execCommand('copy');
    a.parentNode.removeChild(a);
    alert( typeT + ' copied to clipboard.' );
}