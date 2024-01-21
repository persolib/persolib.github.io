// Dateien laden
const files_head_pages = [""];

// Inhalt aus `template.html` lesen
const request_head = new XMLHttpRequest();
request_head.open('GET', '../../assets/html/pages/head.html');
request_head.responseType = 'text';

request_head.onload = () => {
  const templateContent = request_head.responseText;

  // Inhalt in `<head>`-Tags einfügen
  files_head_pages.forEach(file => {
    const head = document.querySelector(`head`, file);
    head.innerHTML += templateContent;
  });
};

request_head.send();
