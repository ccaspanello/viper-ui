# Viper UI

Viper UI is a planned component library for Viperware applications, built around React, TypeScript, and Tailwind CSS.

The repository is currently an early workspace scaffold. Component packages, application examples, and build and test scripts have not yet been added.

## Getting started

Install [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/installation), then install the workspace dependencies:

```sh
pnpm install
```

The repository specifies pnpm 10.33.0 in `package.json`.

## Workspace structure

The pnpm workspace is configured to discover packages in `apps/*` and `libs/*`. These directories can be added as applications and libraries are introduced.

## Development commands

| Command             | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `pnpm format`       | Format the repository with oxfmt.                                 |
| `pnpm format:check` | Check formatting without changing files.                          |
| `pnpm verify`       | Run the repository's current verification check (`format:check`). |

Installing dependencies also sets up Husky. The pre-commit hook runs `pnpm verify`.
