### React web plugin which can be imported to any webpage from CDN

Simple way to create webapp plugin like Crips using React and serve using CDN. For demo puprose it is shared by local nestJS server. Both `ES` and `UMD` module are suppported. You can use them in that way:

# For `UMD` module type use this html script (example in `plugin-umd.html` file)

```
	<script src="http://127.0.0.1:3001/load-plugin.umd.js"></script>
	<script>
		// Initialize the plugin with configuration
		loadPlugin({
			apiKey: 'my-api-key'
		})
	</script>
```

# For `ES` module type use this html script (example in `plugin-es.html` file)

```
	<script type="module">
		import { loadPlugin } from 'http://127.0.0.1:3001/plugin.js';

		// Initialize the plugin with configuration
		loadPlugin({
			apiKey: 'my-api-key'
		})
	</script>
```

## local setup

1. Install dependencies in both project `nestjs-static-server` and `react-web-plugin`.
2. Make `build-plugin.sh` executable `chmod +x ./build-plugin.sh`.
3. Build react plugin `./build-plugin.sh` (it also copie bundled react lib files to nestJS server to serve they as s static files).
4. Run server with static files. Enter to nest project `cd nestjs-static-server` and execute `npm run start:dev`. It will act as a cdn for static files.
5. Check the result by opening `plugin-umd.html` or `plugin-es.html` file. There on the right bottom should be the react plugin.
