const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// dist 폴더 생성
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// index.html 복사
fs.copyFileSync(
  path.join(__dirname, 'index.html'),
  path.join(distDir, 'index.html')
);

console.log('✅ Build 완료 → dist/index.html');
