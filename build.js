const fs = require('fs');
const path = require('path');

const SB_URL = process.env.SB_URL;
const SB_KEY = process.env.SB_KEY;

if (!SB_URL || !SB_KEY) {
  console.error('❌ 환경변수 SB_URL, SB_KEY 가 설정되지 않았습니다.');
  console.error('   Netlify 대시보드 → Site configuration → Environment variables 에서 추가하세요.');
  process.exit(1);
}

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// index.html 읽기 → 플레이스홀더 치환 → dist에 저장
let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
html = html.replace(/%%SB_URL%%/g, SB_URL);
html = html.replace(/%%SB_KEY%%/g, SB_KEY);

fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');

console.log('✅ Build 완료 → dist/index.html');
console.log(`   SB_URL: ${SB_URL}`);
console.log(`   SB_KEY: ${SB_KEY.slice(0, 20)}...`);
