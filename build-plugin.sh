cd react-web-plugin
npm run build-lib
cd ..
rm -rf nestjs-static-server/static
cp -R react-web-plugin/dist nestjs-static-server/static
cp -R react-web-plugin/load-plugin.es.js nestjs-static-server/static/load-plugin.es.js
cp -R react-web-plugin/load-plugin.umd.js nestjs-static-server/static/load-plugin.umd.js