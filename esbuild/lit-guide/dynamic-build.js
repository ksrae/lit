const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const componentDir = 'web-component';

fs.readdir(`${srcDir}/${componentDir}`, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const tsFiles = files.filter(file => file.endsWith('.ts'));
  // import './web-component/my-element';
  const imports = tsFiles.map(file => `import './${componentDir}/${file}';`).join('\n');

  console.log('srcDir');
  fs.writeFile(path.resolve(srcDir, 'main.ts'), imports, err => {
    if (err) {
      console.error(err);
    }
  });
});