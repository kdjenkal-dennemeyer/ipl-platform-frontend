# IPL Platform Frontend

A Turborepo monorepo containing 5 React applications and shared packages for the IPL Platform.

## Prerequisites

- **Node.js**: >= 20.0.0
- **pnpm**: >= 9.0.0

Install pnpm globally if you haven't:
```bash
npm install -g pnpm@9
```

## Quick Start

```bash
# Install dependencies for all apps and packages
pnpm install

# Run all 5 apps in parallel
pnpm dev

# Build all apps
pnpm build

# Type-check all apps
pnpm type-check
```

## Available Scripts

### Development

- `pnpm dev` - Run all 5 apps in parallel (ports 3000-3004)
- `pnpm dev:shell` - Run only Shell app (port 3000)
- `pnpm dev:lounge` - Run only Lounge app (port 3001)
- `pnpm dev:portfolio` - Run only Portfolio app (port 3002)
- `pnpm dev:recordals` - Run only Recordals app (port 3003)
- `pnpm dev:epv` - Run only EPV app (port 3004)

### Build & Quality

- `pnpm build` - Build all apps for production
- `pnpm type-check` - TypeScript type checking for all apps
- `pnpm lint` - Lint all apps
- `pnpm test` - Run tests for all apps
- `pnpm clean` - Remove all node_modules, dist, and .turbo cache

## Directory Structure

```
ipl-platform-frontend/
├── apps/                    # Applications
│   ├── shell/              # Shell app (http://localhost:3000)
│   ├── lounge/             # Lounge app (http://localhost:3001)
│   ├── portfolio/          # Portfolio app (http://localhost:3002)
│   ├── recordals/          # Recordals app (http://localhost:3003)
│   └── epv/                # EPV app (http://localhost:3004)
├── packages/               # Shared packages
│   ├── ui/                 # Shared UI components
│   ├── api-client/         # API client utilities
│   ├── auth/               # Authentication utilities
│   ├── i18n/               # Internationalization
│   ├── types/              # Shared TypeScript types
│   ├── utils/              # Utility functions
│   ├── forms/              # Form components & utilities
│   ├── table/              # Table components & utilities
│   └── eslint-config/      # Shared ESLint configuration
├── tooling/                # Build tooling
│   └── tsconfig/           # Shared TypeScript configurations
├── turbo.json              # Turborepo configuration
├── pnpm-workspace.yaml     # pnpm workspace configuration
└── package.json            # Root package.json with scripts
```

## Applications

All applications are built with:
- **React 19.x**
- **Vite 7.x**
- **TypeScript 5.x**

### App URLs (Local Development)

- **Shell**: http://localhost:3000/shell/
- **Lounge**: http://localhost:3001/lounge/
- **Portfolio**: http://localhost:3002/portfolio/
- **Recordals**: http://localhost:3003/recordals/
- **EPV**: http://localhost:3004/epv/

## Technology Stack

- **Monorepo Tool**: Turborepo 2.x
- **Package Manager**: pnpm 9.x
- **Framework**: React 19.x
- **Build Tool**: Vite 7.x
- **Language**: TypeScript 5.x

## Turborepo Features

- **Parallel Execution**: All apps run simultaneously with `pnpm dev`
- **Smart Caching**: Build outputs are cached for faster rebuilds
- **Task Pipelines**: Dependencies between tasks are handled automatically
- **Incremental Builds**: Only changed packages are rebuilt

## Verification

To verify everything works:

```bash
# Install dependencies
pnpm install

# Type-check (should pass with no errors)
pnpm type-check

# Build all apps (check dist/ folders are created)
pnpm build

# Start all apps in dev mode
pnpm dev
```

Each app should be accessible at its respective port and show a welcome message.
