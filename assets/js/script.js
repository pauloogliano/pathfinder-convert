const containerResult = document.querySelector('.result');
const messageCopied = document.querySelector('.messageCopied');

const App = {
  init() {
    const convertButton = document.getElementById('submit');
    const copyButton = document.getElementById('copyToClipboard');

    convertButton.addEventListener("click", function () {
      const getAddress = document.getElementById('address').value;
      const AddressFormatted = replacePrefix(replaceBars(getAddress));
      document.getElementById('resultValue').value = AddressFormatted;

      containerResult.style.display = 'block';

    });

    copyButton.addEventListener("click", function () {
      const getConvertedInfo = document.getElementById('resultValue');
      getConvertedInfo.select();
      getConvertedInfo.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(getConvertedInfo.value);

      containerResult.style.display = 'none';

      document.getElementById('address').value = "";
      document.getElementById('resultValue').value = "";

      messageCopied.style.display = 'block';
      document.getElementById('address').focus();

      let opacity = 1.0;
      const intervalo = window.setInterval(function() {
        opacityElement(opacity, intervalo);
        opacity = opacity - 0.01;
      }, 30);
    });
  }
}

function opacityElement(opacity, intervalo) {
  if (opacity > 0) {
  messageCopied.style.opacity = opacity;
  } else {
    clearInterval(intervalo);
  }
}

function replaceBars(string) {
  return string.split('\\').join('/');
}

function replacePrefix(string) {
  const path = string.split(':');
  let prefix;

  switch (path[0]) {
    case "PREFIX FROM WINDOWS": // input the letter from disk Windows
      prefix = "PREFIX TO MAC"; // set prefix to Mac
      break;
  }

  return prefix + path[1];
}

export { App }
