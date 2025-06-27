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

