2022-02-07 19-17 -> new zip from

```shell
curl -OL https://github.com/goitacademy/react-homework-template/archive/main.zip
npm i -D prettier eslint prop-types nanoid react-icons react-toastify react-loading-icons react-loading-skeleton
git remote add origin https://github.com/KostiantynO/goit-react-hw-04-hooks-images.git
```

react-debounce-input

`app.jsx`

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

`package.json`

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-04-hooks-images",

  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,sass,md}": "prettier --write"
  }
```

`jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "exclude": ["node_modules", "build"],
  "include": ["src"]
}
```
