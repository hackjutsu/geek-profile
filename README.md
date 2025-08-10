# Geek Profile
Write your profile in Markdown and publish it on GitHub Page.
- Demo: http://hackjutsu.com/geek-profile/

## Bootstrap
Make sure you have `yarn` installed. If you don't have it, install it from https://yarnpkg.com/getting-started/install
```bash
yarn
```

## Customize your Profile
- Customize your profile/CV/resume at `profile/src/index.md`.
- Put your customized CSS in `profile/src/css/site.css`.

## Build
```bash
yarn run build
```
Static website will be generated at `profile/public`.

## Release
```bash
yarn run release
```
Static website will be generated and moved to `./docs`.
Push this project to your GitHub repo's master branch and set `master branch /docs folder` as the GitHub Page source.


# License
[MIT @CosmoX](./LICENSE)
