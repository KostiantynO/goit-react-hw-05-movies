```shell
git clone "${reactTemplate}"
grr
gra "${myGit}goit-react-hw-05-movies.git"
npm i -D prettier eslint styled-components prop-types react-router-dom react-toastify react-icons axios formik

npx mrm@2 lint-staged

npm start

gca "initial"
gph
```

2. Deploy:

- Изначально на GitHub Pages `package.json`

  ```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-05-movies/",
  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,scss,md}": "prettier --write"
  }
  ```

- TODO Kostiantyn: Надо поменять homepage перед Netlify. Deadline: 2022-02-08
  23:00. Will change URL !!!
  ```json
  "homepage": "https://netlify.com/KostiantynO/goit-react-hw-05-movies/",
  ```

3. `index.js`

   ```js
   <BrowserRouter basename="/goit-react-hw-05-movies/">
     <App />
   </BrowserRouter>
   ```

4. `index.html` added `div` to enable `portal` for modal.

   ```html
   <div id="modal-root"></div>
   ```

5. `jsconfig.json`

   ```json
   {
     "compilerOptions": { "baseUrl": "src" },
     "exclude": ["node_modules", "build"],
     "include": ["src"]
   }
   ```
