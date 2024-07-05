# Webapp plugin based on react

Simple way to create webapp plugin like Crips using React and serve using CDN. You can use it in any html by adding this script:
```
	<script type="module">
		import { loadPlugin } from 'http://127.0.0.1:3001/plugin.js';

		// Initialize the plugin with configuration
		loadPlugin({
			apiKey: 'my-api-key'
		})
	</script>
```


# start

1. Install dependencies in both project `nestjs-static-server` and `react-web-plugin`.
2. Make `build-plugin.sh` executable `chmod +x ./build-plugin.sh`.
3. Build react plugin `./build-plugin.sh` (it also copie bundled react lib files to nestJS server to serve they as s static files).
4. Run server with static files. Enter to nest project `cd nestjs-static-server` and execute `npm run start:dev`. It will act as a cdn for static files.
5. Check the result by opening `plugin.html` file. There on the right bottom should be the react plugin.

