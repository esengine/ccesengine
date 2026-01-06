# CCESEngine 贡献指南

感谢您对 CCESEngine 项目的贡献！本文档提供了参与项目开发的指南和规范。

## 目录

- [分支策略](#分支策略)
- [提交规范](#提交规范)
- [代码风格](#代码风格)
- [Pull Request 流程](#pull-request-流程)
- [开发环境搭建](#开发环境搭建)

## 分支策略

我们采用简化的 Git Flow 模型：

```
main        ← 生产就绪代码，受保护
  ↑
develop     ← 功能集成分支
  ↑
feature/*   ← 新功能 (如 feature/add-physics)
bugfix/*    ← Bug 修复 (如 bugfix/fix-memory-leak)
hotfix/*    ← 紧急生产修复 (从 main 分支)
```

### 分支命名规范

| 类型 | 格式 | 示例 |
|------|------|------|
| 功能 | `feature/<描述>` | `feature/webgpu-optimization` |
| 修复 | `bugfix/<issue-id>-<描述>` | `bugfix/123-fix-texture-loading` |
| 热修复 | `hotfix/<描述>` | `hotfix/critical-crash-fix` |
| 发布 | `release/<版本号>` | `release/1.1.0` |

## 提交规范

我们遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范。

### 提交信息格式

```
<类型>(<范围>): <主题>

<正文>

<页脚>
```

### 类型说明

| 类型 | 描述 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档变更 |
| `style` | 代码格式（不影响功能） |
| `refactor` | 重构（非新功能/修复） |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/依赖/工具 |

### 示例

```bash
feat(gfx): 添加 WebGPU 计算着色器支持

fix(audio): 修复 AudioSource 组件内存泄漏

refactor(core): 移除废弃的 v3.x API

chore(deps): 更新 TypeScript 到 5.0
```

## 代码风格

### TypeScript 规范

1. **使用严格模式** - 所有代码必须通过严格类型检查
2. **显式类型** - 公共 API 优先使用显式类型注解
3. **禁用 `any`** - 避免使用 `any`，必要时使用 `unknown`
4. **只读属性** - 不可变属性使用 `readonly`

### 命名规范

| 元素 | 规范 | 示例 |
|------|------|------|
| 类 | PascalCase | `RenderPipeline` |
| 接口 | PascalCase | `IRenderable` |
| 函数 | camelCase | `createBuffer()` |
| 变量 | camelCase | `vertexCount` |
| 常量 | UPPER_SNAKE_CASE | `MAX_TEXTURE_SIZE` |
| 私有成员 | 下划线前缀 | `_internalState` |
| 文件 | kebab-case | `render-pipeline.ts` |

### 代码质量规则

- 生产代码禁止 `console.log`（使用调试工具）
- 提交中不包含注释掉的代码
- 文件最大行数：500 行
- 函数最大行数：50 行
- 正确处理所有错误

## Pull Request 流程

### 提交前检查

1. **先创建 Issue** - 重大变更先讨论
2. **从 develop 分支** - 创建 feature/bugfix 分支
3. **运行测试** - 确保本地测试通过
4. **构建检查** - `npm run build` 成功
5. **自我审查** - 请求他人审查前先自己审查

### PR 要求

- [ ] 符合规范的标题
- [ ] 关联相关 Issue
- [ ] 变更摘要
- [ ] 测试计划
- [ ] 截图（UI 变更）
- [ ] 无合并冲突

### PR 模板

```markdown
## 摘要
变更简述

## 关联 Issue
Fixes #123

## 变更内容
- 变更 1
- 变更 2

## 测试计划
- [ ] 测试用例 1
- [ ] 测试用例 2

## 截图（如适用）
```

### 审查流程

1. 至少 1 人批准
2. CI 检查全部通过
3. 无未解决的讨论
4. Squash 合并到 develop

## 开发环境搭建

### 前置条件

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### 快速开始

```bash
# 克隆仓库
git clone https://github.com/esengine/ccesengine.git
cd ccesengine

# 安装依赖
npm install

# 构建引擎
npm run build

# 运行测试
npm test
```

### 常用命令

| 命令 | 描述 |
|------|------|
| `npm run build` | 构建引擎（压缩 + 声明文件） |
| `npm run build:dev` | 开发构建 |
| `npm test` | 运行测试 |
| `npm run lint` | 运行 ESLint |

## 问题？

如有疑问，请创建带有 `question` 标签的 Issue。

---

感谢您为 CCESEngine 做出贡献！
