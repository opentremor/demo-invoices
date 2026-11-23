# demo-invoices

A small TypeScript billing API. It is the demo repository for
[OpenTremor](https://opentremor.dev): the video on the homepage reviews a pull request opened
here.

The code is an example. Do not deploy it.

A script in the OpenTremor end-to-end repository opens and updates the pull requests here. The
OpenTremor comment and the commit status on them come from a demo stack.

## OpenTremor in this repository

- `.claude/settings.json` runs OpenTremor's hooks in Claude Code sessions, as
  `opentremor hook install claude` writes them. When a session starts, the agent gets the
  repository's rules. Before it stops, a check runs, and blocking findings send it back to work.
- `.pre-commit-config.yaml` runs a quick check before each commit and a full check before each push.

Both need the `opentremor` CLI, signed in to an organization that has connected this repository.
