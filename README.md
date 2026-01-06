<p align="center">
    <a href="https://github.com/esengine/ccesengine">
        <img src="./ui.png"
             alt="CCESEngine Logo">
    </a>
</p>
<p align="center">
    <a href="https://github.com/esengine/ccesengine/stargazers">
        <img src="https://img.shields.io/github/stars/esengine/ccesengine.svg?style=flat-square&colorB=4183c4"
             alt="stars">
    </a>
    <a href="https://github.com/esengine/ccesengine/network">
        <img src="https://img.shields.io/github/forks/esengine/ccesengine.svg?style=flat-square&colorB=4183c4"
             alt="forks">
    </a>
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&colorB=4183c4"
             alt="license">
    </a>
</p>

# CCESEngine

CCESEngine is an open-source, high-performance, cross-platform game engine forked from [Cocos Creator Engine](https://github.com/cocos/cocos-engine). Built on a mature C++ and TypeScript architecture, it provides powerful rendering capabilities and flexible script bindings.

> **Note**: This project is based on Cocos Creator 4.0 and is being developed as an independent game engine by the ESEngine team.

## Origin

CCESEngine is forked from [Cocos Creator Engine v4.0](https://github.com/cocos/cocos-engine), an excellent open-source game engine developed by the Cocos team. We are grateful to the Cocos team for their outstanding work and contributions to the game development community.

### What's Different

- **Independent Development**: We are building our own editor and toolchain
- **Focused Optimization**: Streamlined APIs and removed legacy compatibility layers
- **Community Driven**: Open to contributions and feedback from the community

## Features

1. **Modern Graphics**: Vulkan on Windows/Android, Metal on macOS/iOS, WebGL/WebGPU on Web
2. **High Performance**: Hybrid C++ and TypeScript architecture for optimal runtime performance
3. **Customizable Render Pipeline**: Support for forward and deferred rendering, fully customizable
4. **Extensible Surface Shader**: GLSL 300 based material system with automatic conversion
5. **Physically Based Rendering (PBR)**: Realistic rendering with physically based camera and lighting
6. **Easy TypeScript API**: Developer-friendly API design with excellent IDE support

## Getting Started

### Prerequisites

- [Node.js v18.0.0+](https://nodejs.org/)
- [gulp-cli v2.3.0+](https://github.com/gulpjs/gulp/tree/master/docs/getting-started)

### Installation

```bash
# Clone the repository
git clone https://github.com/esengine/ccesengine.git

# Install dependencies
cd ccesengine
npm install

# Build the engine
npm run build
```

### Development

```bash
# Development build
npm run build:dev

# Run tests
npm test

# Clear cache
npm run clear
```

## Project Structure

```
ccesengine/
├── cocos/              # Engine core source code (TypeScript)
├── native/             # Native implementation (C++)
├── editor/             # Editor related code
├── exports/            # Public API exports
├── pal/                # Platform Abstraction Layer
├── tests/              # Test files
└── docs/               # Documentation
```

## Documentation

- [TypeScript Coding Style](./docs/TS_CODING_STYLE.md)
- [C++ Coding Style](./docs/CPP_CODING_STYLE.md)
- [Native Development](./native/README.md)

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes following [Conventional Commits](https://conventionalcommits.org/)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow [TypeScript Coding Style](./docs/TS_CODING_STYLE.md) for TypeScript code
- Follow [C++ Coding Style](./docs/CPP_CODING_STYLE.md) for C++ code
- Use ESLint and integrate [CPP Linter](./docs/CPP_LINTER_AUTOFIX_GUIDE.md)

## Acknowledgments

- [Cocos Creator Engine](https://github.com/cocos/cocos-engine) - The original engine this project is forked from
- The Cocos team for their excellent work on the game engine

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Links

- [ESEngine GitHub](https://github.com/esengine)
- [Original Cocos Engine](https://github.com/cocos/cocos-engine)
- [Cocos Official Site](https://www.cocos.com/)
