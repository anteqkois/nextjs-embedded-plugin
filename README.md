# Webapp plugin based on react

Simple way to create webapp plugin like Crips using React and serve using CDN. You can use it in any html file using:


# start

1. Install dependencies in both project `nestjs-static-server` and `react-web-plugin`.
2. Make `build-plugin.sh` executable `chmod +x ./build-plugin.sh`.
3. Build react plugin `./build-plugin.sh` (it also copie bundled react lib files to nestJS server to serve they as s static files).
4. Check the result by opening `plugin.html` file. There on the right bottom should be the react plugin.

