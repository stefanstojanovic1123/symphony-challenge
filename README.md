# React Boilerplate project

## Available Scripts

In the project directory, you can run:

### `yarn clean`

Runs rimraf on dist folder.\

### `yarn build`

Builds the app for production to the `dist` folder.\
The build is minified and the filenames include the hashes.\
The app is built using configs from the webpack.config.dist.prod.js file. Progress is displayed

### `yarn build-stage`

Builds the app for staging to the `dist` folder.\
The build is minified and the filenames include the hashes.\
The app is built using configs from the webpack.config.dist.stage.js file. Progress is displayed.

### `yarn build-silent`

Builds the app for production to the `dist` folder.\
The build is minified and the filenames include the hashes.\
The app is built using configs from the webpack.config.dist.prod.js file. Progress is not displayed

### `yarn build-silent-stage`

Builds the app for staging to the `dist` folder.\
The build is minified and the filenames include the hashes.\
The app is built using configs from the webpack.config.dist.stage.js file. Progress is not displayed

### `yarn serve`

Starts local dev server using configs from the webpack.config.dev.prod.js file.

### `yarn serve-stage`

Starts local dev server using configs from the webpack.config.dev.stage.js file.

### `yarn serve-local`

Starts local dev server using configs from the webpack.config.dev.local.js file.

### `yarn lint`

Runs eslint check on src/ folder.

### `yarn format`

Runs prettier on src/*/*.js and src/*/*.css files. Writes.

### `yarn format-check`

Runs prettier check on src/*/*.js and src/*/*.css files. Doesn't write.
