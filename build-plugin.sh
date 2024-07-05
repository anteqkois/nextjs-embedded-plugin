cd react-web-plugin
npm run build-lib
cd ..
rm -rf nestjs-static-server/static
cp -R react-web-plugin/dist nestjs-static-server/static