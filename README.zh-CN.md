<p align="center">
    <a href="https://github.com/esengine/ccesengine">
        <img src="./logo.svg" width="400"
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

CCESEngine 是一个开源、高性能、跨平台的游戏引擎，基于 [Cocos Creator Engine](https://github.com/cocos/cocos-engine) 开发。采用成熟的 C++ 和 TypeScript 混合架构，提供强大的渲染能力和灵活的脚本绑定。

> **说明**：本项目基于 Cocos Creator 4.0，由 ESEngine 团队进行独立开发。

## 项目来源

CCESEngine 是从 [Cocos Creator Engine v4.0](https://github.com/cocos/cocos-engine) fork 而来，这是由 Cocos 团队开发的优秀开源游戏引擎。我们非常感谢 Cocos 团队对游戏开发社区的杰出贡献。

### 主要区别

- **独立开发**：我们正在构建自己的编辑器和工具链
- **专注优化**：精简 API，移除遗留兼容层
- **社区驱动**：欢迎社区贡献和反馈

## 特性

1. **现代图形**：Windows/Android 使用 Vulkan，macOS/iOS 使用 Metal，Web 使用 WebGL/WebGPU
2. **高性能**：C++ 和 TypeScript 混合架构，确保最佳运行时性能
3. **可定制渲染管线**：支持前向渲染和延迟渲染，完全可定制
4. **可扩展表面着色器**：基于 GLSL 300 的材质系统，自动转换
5. **基于物理的渲染 (PBR)**：配合物理相机和光照的真实感渲染
6. **简洁的 TypeScript API**：开发者友好的 API 设计，优秀的 IDE 支持

## 快速开始

### 环境要求

- [Node.js v18.0.0+](https://nodejs.org/)
- [gulp-cli v2.3.0+](https://github.com/gulpjs/gulp/tree/master/docs/getting-started)

### 安装

```bash
# 克隆仓库
git clone https://github.com/esengine/ccesengine.git

# 安装依赖
cd ccesengine
npm install

# 构建引擎
npm run build
```

### 开发

```bash
# 开发构建
npm run build:dev

# 运行测试
npm test

# 清除缓存
npm run clear
```

## 项目结构

```
ccesengine/
├── cocos/              # 引擎核心源码 (TypeScript)
├── native/             # 原生实现 (C++)
├── editor/             # 编辑器相关代码
├── exports/            # 公开 API 导出
├── pal/                # 平台抽象层
├── tests/              # 测试文件
└── docs/               # 文档
```

## 文档

- [TypeScript 编码规范](./docs/TS_CODING_STYLE.md)
- [C++ 编码规范](./docs/CPP_CODING_STYLE.md)
- [原生开发指南](./native/README.md)

## 贡献

我们欢迎贡献！请在提交 Pull Request 前阅读贡献指南。

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 按照 [Conventional Commits](https://conventionalcommits.org/) 规范提交
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

### 编码规范

- TypeScript 代码遵循 [TypeScript 编码规范](./docs/TS_CODING_STYLE.md)
- C++ 代码遵循 [C++ 编码规范](./docs/CPP_CODING_STYLE.md)
- 使用 ESLint 并集成 [CPP Linter](./docs/CPP_LINTER_AUTOFIX_GUIDE.md)

## 致谢

- [Cocos Creator Engine](https://github.com/cocos/cocos-engine) - 本项目 fork 的原始引擎
- Cocos 团队在游戏引擎方面的卓越工作

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](./LICENSE) 文件。

## 链接

- [ESEngine GitHub](https://github.com/esengine)
- [原始 Cocos Engine](https://github.com/cocos/cocos-engine)
- [Cocos 官网](https://www.cocos.com/)
