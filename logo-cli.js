#!/usr/bin/env node
// logo-cli.js - Custom ASCII Logo Generator with RED support

import figlet from 'figlet';
import gradient from 'gradient-string';

// 🎨 定義済みカラーパレット
const PALETTES = {
  red: ['#ff0000', '#cc0000'],           // 🔴 あなたのリクエスト！
  blue: ['#0066ff', '#003399'],
  green: ['#00ff00', '#006600'],
  sunset: ['#ff9966', '#ff5e62', '#ffa34e'],
  matrix: ['#00ff41', '#008f11'],
  fire: ['#ff0844', '#ffb199'],
  ocean: ['#667eea', '#764ba2'],
  gold: ['#f7971e', '#ffd200'],
  purple: ['#667db6', '#0082c8', '#0078ff'],
  mint: ['#00d2ff', '#3a7bd5'],
  coral: ['#ff9a9e', '#fecfef']
};

// 🎯 メインのロゴ生成関数
function createLogo(text, palette = 'blue', options = {}) {
  const {
    font = 'Standard',
    direction = 'vertical',
    layout = 'default'
  } = options;

  try {
    // ASCII アート生成
    const asciiArt = figlet.textSync(text, {
      font: font,
      horizontalLayout: layout,
      verticalLayout: 'default'
    });

    // カラーパレット取得
    let colors = PALETTES[palette];
    
    // カスタムカラーの場合
    if (!colors) {
      if (palette.startsWith('#')) {
        colors = [palette];
      } else {
        colors = PALETTES.blue; // デフォルト
      }
    }

    // グラデーション適用
    const coloredArt = gradient(colors)(asciiArt);
    return coloredArt;
  } catch (error) {
    console.error('Error generating logo:', error.message);
    return text;
  }
}

// 📋 使用可能なパレット一覧表示
function showPalettes() {
  console.log('\n🎨 Available Color Palettes:');
  Object.keys(PALETTES).forEach(name => {
    const preview = gradient(PALETTES[name])('████████');
    console.log(`  ${name.padEnd(8)} ${preview}`);
  });
  console.log('');
}

// 📖 ヘルプ表示
function showHelp() {
  console.log(`\n🎨 ASCII Logo Generator\n`);
  console.log('Usage: node logo-cli.js [text] [palette] [options]\n');
  console.log('Examples:');
  console.log('  node logo-cli.js "HELLO"');
  console.log('  node logo-cli.js "WORLD" red');
  console.log('  node logo-cli.js "CUSTOM" "#ff0000"');
  console.log('  node logo-cli.js "BIG" sunset --font Big\n');
  
  showPalettes();
  
  console.log('Options:');
  console.log('  --font [name]    Set figlet font (default: Standard)');
  console.log('  --palettes       Show available color palettes');
  console.log('  --help           Show this help message\n');
}

// 🚀 CLI引数の処理
const args = process.argv.slice(2);

// ヘルプ表示
if (args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

// パレット一覧表示
if (args.includes('--palettes')) {
  showPalettes();
  process.exit(0);
}

// 引数解析
const text = args[0] || 'HELLO';
const palette = args[1] || 'blue';
const fontIndex = args.indexOf('--font');
const font = fontIndex !== -1 ? args[fontIndex + 1] : 'Standard';

// �� メイン実行
console.log('🎨 ASCII Logo Generator\n');

// デモ表示（引数がない場合）
if (args.length === 0) {
  console.log('🔴 RED VERSION:');
  console.log(createLogo('OCC', 'red'));
  
  console.log('\n🔥 FIRE VERSION:');
  console.log(createLogo('FIRE', 'fire'));
  
  console.log('\n🌊 OCEAN VERSION:');
  console.log(createLogo('OCEAN', 'ocean'));
  
  console.log('\n💡 Try: node logo-cli.js "YOUR NAME" red');
  console.log('💡 Help: node logo-cli.js --help');
} else {
  // ユーザー指定のロゴ生成
  console.log(`🎯 Generating: "${text}" with ${palette} palette`);
  console.log(createLogo(text, palette, { font }));
}
