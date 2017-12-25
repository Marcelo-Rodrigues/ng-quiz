rm -rf ./deploy/*
mkdir -p ./deploy
ng build --prod -op ./deploy/front
cp -r ./server/* ./deploy/
rm ./deploy/config.json
mv ./deploy/config-deploy.json ./deploy/config.json
cp ./Dockerfile ./deploy/Dockerfile
cp ./.dockerignore ./deploy/.dockerignore
docker build -t marcelorodrigues/ng-quiz ./deploy
