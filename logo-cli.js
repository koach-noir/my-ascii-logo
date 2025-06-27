#!/usr/bin/env node
// logo-cli.js - Proper Block Character ASCII Logo Generator

import figlet from 'figlet';
import gradient from 'gradient-string';

// 🎨 oh-my-logo互換パレット
const PALETTES = {
  'grad-blue': ['#4ea8ff', '#7f88ff'],
  'sunset': ['#ff9966', '#ff5e62', '#ffa34e'], 
  'dawn': ['#00c6ff', '#0072ff'],
  'nebula': ['#654ea3', '#eaafc8'],
  'ocean': ['#667eea', '#764ba2'],
  'fire': ['#ff0844', '#ffb199'],
  'forest': ['#134e5e', '#71b280'],
  'gold': ['#f7971e', '#ffd200'],
  'purple': ['#667db6', '#0082c8', '#0078ff'],
  'mint': ['#00d2ff', '#3a7bd5'],
  'coral': ['#ff9a9e', '#fecfef'],
  'matrix': ['#00ff41', '#008f11'],
  'mono': ['#f07178', '#f07178'],
  'red': ['#ff0000', '#cc0000']
};

// 🧱 美しいブロック文字パターン（手作り）
const BLOCK_PATTERNS = {
  'A': [
    '  ████  ',
    ' ██  ██ ',
    '████████',
    '██    ██',
    '██    ██'
  ],
  'B': [
    '███████ ',
    '██   ██ ',
    '███████ ',
    '██   ██ ',
    '███████ '
  ],
  'C': [
    ' ███████',
    '██     █',
    '██      ',
    '██     █',
    ' ███████'
  ],
  'D': [
    '██████  ',
    '██   ██ ',
    '██    ██',
    '██   ██ ',
    '██████  '
  ],
  'E': [
    '████████',
    '██      ',
    '██████  ',
    '██      ',
    '████████'
  ],
  'F': [
    '████████',
    '██      ',
    '██████  ',
    '██      ',
    '██      '
  ],
  'G': [
    ' ███████',
    '██      ',
    '██  ████',
    '██    ██',
    ' ███████'
  ],
  'H': [
    '██    ██',
    '██    ██',
    '████████',
    '██    ██',
    '██    ██'
  ],
  'I': [
    '████████',
    '   ██   ',
    '   ██   ',
    '   ██   ',
    '████████'
  ],
  'J': [
    '████████',
    '      ██',
    '      ██',
    '██    ██',
    ' ███████'
  ],
  'K': [
    '██   ██ ',
    '██  ██  ',
    '█████   ',
    '██  ██  ',
    '██   ██ '
  ],
  'L': [
    '██      ',
    '██      ',
    '██      ',
    '██      ',
    '████████'
  ],
  'M': [
    '██    ██',
    '████████',
    '██ ██ ██',
    '██    ██',
    '██    ██'
  ],
  'N': [
    '██    ██',
    '███   ██',
    '██ ██ ██',
    '██   ███',
    '██    ██'
  ],
  'O': [
    ' ██████ ',
    '██    ██',
    '██    ██',
    '██    ██',
    ' ██████ '
  ],
  'P': [
    '███████ ',
    '██    ██',
    '███████ ',
    '██      ',
    '██      '
  ],
  'Q': [
    ' ██████ ',
    '██    ██',
    '██ ██ ██',
    '██   ███',
    ' ███████'
  ],
  'R': [
    '███████ ',
    '██    ██',
    '███████ ',
    '██   ██ ',
    '██    ██'
  ],
  'S': [
    ' ███████',
    '██      ',
    ' ██████ ',
    '      ██',
    '███████ '
  ],
  'T': [
    '████████',
    '   ██   ',
    '   ██   ',
    '   ██   ',
    '   ██   '
  ],
  'U': [
    '██    ██',
    '██    ██',
    '██    ██',
    '██    ██',
    ' ██████ '
  ],
  'V': [
    '██    ██',
    '██    ██',
    '██    ██',
    ' ██  ██ ',
    '  ████  '
  ],
  'W': [
    '██    ██',
    '██    ██',
    '██ ██ ██',
    '████████',
    '██    ██'
  ],
  'X': [
    '██    ██',
    ' ██  ██ ',
    '  ████  ',
    ' ██  ██ ',
    '██    ██'
  ],
  'Y': [
    '██    ██',
    ' ██  ██ ',
    '  ████  ',
    '   ██   ',
    '   ██   '
  ],
  'Z': [
    '████████',
    '     ██ ',
    '  ████  ',
    ' ██     ',
    '████████'
  ],
  ' ': [
    '        ',
    '        ',
    '        ',
    '        ',
    '        '
  ]
};

// 🎨 美しいブロック文字生成
function createBeautifulBlocks(text) {
  const lines = ['', '', '', '', ''];
  
  for (const char of text.toUpperCase()) {
    const pattern = BLOCK_PATTERNS[char] || BLOCK_PATTERNS[' '];
    
    for (let i = 0; i < 5; i++) {
      lines[i] += pattern[i] + '  '; // 文字間スペース
    }
  }
  
  return lines.join('\n');
}

// 🎯 メインのロゴ生成関数
function createLogo(text, palette = 'grad-blue', options = {}) {
  const {
    font = 'Standard',
    filled = false,
    direction = 'vertical'
  } = options;

  try {
    let asciiArt;
    
    if (filled) {
      // 🧱 美しいブロック文字を生成
      asciiArt = createBeautifulBlocks(text);
    } else {
      // 📏 通常のfiglet
      asciiArt = figlet.textSync(text, {
        font: font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
      });
    }

    // カラーパレット取得
    let colors = PALETTES[palette] || PALETTES['grad-blue'];
    
    if (palette.startsWith('#')) {
      colors = [palette];
    }

    // 🌈 あなたが望んだシンプルな書き方！
    const coloredArt = gradient(colors)(asciiArt);
    return coloredArt;
    
  } catch (error) {
    console.error('Error generating logo:', error.message);
    return text;
  }
}

// 📋 パレット一覧表示
function showPalettes() {
  console.log('\n🎨 Available Color Palettes:');
  console.log('');
  Object.keys(PALETTES).forEach(name => {
    const preview = gradient(PALETTES[name])('████████████');
    console.log(`  ${name.padEnd(12)} ${preview}`);
  });
  console.log('');
}

// 📖 ヘルプ表示
function showHelp() {
  console.log(`\n🎨 Beautiful ASCII Logo Generator\n`);
  console.log('Usage: ./logo-cli.js [text] [palette] [options]\n');
  console.log('Examples:');
  console.log('  ./logo-cli.js "HELLO"                    # Figlet style');
  console.log('  ./logo-cli.js "HELLO" sunset --filled    # Beautiful blocks');
  console.log('  ./logo-cli.js "FIRE" fire --filled       # Fire blocks');
  console.log('  ./logo-cli.js "OCC" red --filled         # Red blocks\n');
  
  showPalettes();
  
  console.log('Options:');
  console.log('  --filled         Use beautiful hand-crafted block characters');
  console.log('  --font [name]    Set figlet font (when not using --filled)');
  console.log('  --palettes       Show available color palettes');
  console.log('  --help           Show this help message\n');
}

// 🚀 メイン処理
function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }

  if (args.includes('--palettes')) {
    showPalettes();
    return;
  }

  const text = args[0] || 'HELLO';
  const palette = args[1] || 'grad-blue';
  const filled = args.includes('--filled');
  const fontIndex = args.indexOf('--font');
  const font = fontIndex !== -1 ? args[fontIndex + 1] : 'Standard';

  console.log('🎨 Beautiful ASCII Logo Generator\n');

  if (args.length === 0) {
    console.log('🔴 RED VERSION (Figlet):');
    console.log(createLogo('OCC', 'red'));
    
    console.log('\n🧱 RED VERSION (Beautiful Blocks):');
    console.log(createLogo('OCC', 'red', { filled: true }));
    
    console.log('\n🔥 FIRE VERSION (Beautiful Blocks):');
    console.log(createLogo('FIRE', 'fire', { filled: true }));
    
    console.log('\n💡 Try: ./logo-cli.js "YOUR NAME" red --filled');
    console.log('💡 Help: ./logo-cli.js --help');
  } else {
    const modeText = filled ? 'beautiful blocks' : 'figlet style';
    console.log(`🎯 Generating: "${text}" with ${palette} palette (${modeText})\n`);
    
    const result = createLogo(text, palette, { filled, font });
    console.log(result);
  }
}

main();
