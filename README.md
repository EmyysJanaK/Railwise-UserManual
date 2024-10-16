

## Run project locally

Use this command below to boot this project locally.

```bash
git clone https://github.com/Evavic44/adocs.git

cd adocs

npm install

npm run docs:dev
```

Visit [https://localhost:5173](https://localhost:5173) to see your site

## Build
You may run this command to build the docs

```bash
npm run docs:build
```

## Folder Structure

```
docs/
├── .vitepress/
│   ├── config.ts
│   └── theme/
│       ├── index.ts
│       └── custom.css
├── public/
│   ├── logo.svg
│   └── logo-big.svg
├── about.md
├── configs.md
├── contact.md
├── get-started.md
├── guide.md
├── index.md
├── package.json
└── README.md
```
