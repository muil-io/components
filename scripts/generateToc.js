const fs = require('fs');
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const filename = 'README.md';
const table = ``;

const generate = async () => {
  const result = await fetch('https://docs.muil.io/docs/components/intro/');
  const data = await result.text();
  const dom = new JSDOM(data);
  const links = dom.window.document.querySelector('.navGroups').querySelectorAll('a[href*="/docs/components"]');
  const fileContent = fs.readFileSync('./scripts/TEMPLATE.md').toString();
  const components = [...links]
    .filter((link) => link.textContent !== 'Intro')
    .map((link) => `-  [${link.textContent}](https://docs.muil.io${link.href})`);

  fs.writeFileSync(filename, fileContent.replace('<!--COMPONENTS!-->', components.join('\n')));
};

generate();
