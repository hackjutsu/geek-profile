# Geek Profile
Write your profile in Markdown and publish it on GitHub Page.
- Demo: http://hackjutsu.com/geek-profile/

## Bootstrap
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
