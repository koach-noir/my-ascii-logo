# 🎨 My ASCII Logo Generator

Custom ASCII art logo generator with beautiful colorful gradients for your terminal!

## ✨ Features

- 🎨 **11 Beautiful Color Palettes** - From sunset gradients to matrix green
- 🔴 **RED Color Support** - Perfect red gradients for your logos
- 🔤 **Multiple Fonts** - Support for various figlet fonts
- 🌈 **Custom Colors** - Use your own hex colors
- ⚡ **Easy to Use** - Simple command-line interface
- 🎯 **Zero Configuration** - Works out of the box

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/koach-noir/my-ascii-logo.git
cd my-ascii-logo

# Install dependencies
npm install

# Run demo
npm start

GitHubリポジトリが空の状態ですね！まず初期ファイルを作成してプッシュしましょう。

## 📁 初期プロジェクトファイルの作成

### 1. package.json を作成
```bash
cat > package.json << 'EOF'
{
  "name": "my-ascii-logo",
  "version": "1.0.0",
  "description": "Custom ASCII art logo generator with colorful gradients",
  "type": "module",
  "main": "logo-cli.js",
  "bin": {
    "my-logo": "./logo-cli.js"
  },
  "scripts": {
    "start": "node logo-cli.js",
    "demo": "node logo-cli.js 'DEMO' fire",
    "test": "node logo-cli.js 'TEST' matrix"
  },
  "keywords": [
    "ascii",
    "art",
    "logo",
    "gradient",
    "terminal",
    "cli",
    "figlet"
  ],
  "author": "koach-noir",
  "license": "MIT",
  "dependencies": {
    "figlet": "^1.7.0",
    "gradient-string": "^2.0.2"
  },
  "devDependencies": {
    "@types/figlet": "^1.5.8"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
EOF
```

### 2. logo-cli.js を作成（赤色対応版）
```bash
cat > logo-cli.js << 'EOF'
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

// 🎯 メイン実行
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
EOF
```

### 3. README.md を作成
```bash
cat > README.md << 'EOF'
# 🎨 My ASCII Logo Generator

Custom ASCII art logo generator with beautiful colorful gradients for your terminal!

## ✨ Features

- 🎨 **11 Beautiful Color Palettes** - From sunset gradients to matrix green
- 🔴 **RED Color Support** - Perfect red gradients for your logos
- 🔤 **Multiple Fonts** - Support for various figlet fonts
- 🌈 **Custom Colors** - Use your own hex colors
- ⚡ **Easy to Use** - Simple command-line interface
- 🎯 **Zero Configuration** - Works out of the box

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/koach-noir/my-ascii-logo.git
cd my-ascii-logo

# Install dependencies
npm install

# Run demo
npm start
```

### Basic Usage

```bash
# Simple logo with default blue palette
node logo-cli.js "HELLO"

# 🔴 Red colored logo (your request!)
node logo-cli.js "WORLD" red

# Custom hex color
node logo-cli.js "CUSTOM" "#ff0000"

# Different font
node logo-cli.js "BIG" sunset --font Big
```

## 🎨 Color Palettes

| Palette | Description | Perfect For |
|---------|-------------|-------------|
| `red` | Bold red gradient | Error messages, warnings, fire themes |
| `blue` | Classic blue gradient | Corporate logos, tech brands |
| `green` | Fresh green gradient | Nature, eco-friendly themes |
| `sunset` | Warm sunset colors | Creative projects, art |
| `matrix` | Hacker-style green | Terminal themes, coding |
| `fire` | Intense fire colors | Gaming, energy themes |
| `ocean` | Deep ocean blues | Calm, professional themes |

View all palettes:
```bash
node logo-cli.js --palettes
```

## 🔴 Red Color Examples

```bash
# Basic red
node logo-cli.js "ERROR" red

# Custom red shade
node logo-cli.js "ALERT" "#ff0000"

# Fire red
node logo-cli.js "DANGER" fire
```

## 📋 Commands

```bash
# Show help
node logo-cli.js --help

# Demo mode (includes red examples)
npm start

# Test with matrix style
npm test

# Fire demo
npm run demo
```

## 🎯 Examples

### Company Logo
```bash
node logo-cli.js "STARTUP" sunset
```

### Error Message
```bash
node logo-cli.js "ERROR" red
```

### Hacker Style
```bash
node logo-cli.js "HACK THE PLANET" matrix
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Make executable
chmod +x logo-cli.js

# Run with custom text
./logo-cli.js "DEV MODE" purple
```

## 📦 Dependencies

- [figlet](https://www.npmjs.com/package/figlet) - ASCII art text generator
- [gradient-string](https://www.npmjs.com/package/gradient-string) - Beautiful gradient colors

## 📄 License

MIT License - feel free to use this in your projects!

**Made with ❤️ for terminal lovers who need RED colors!**

