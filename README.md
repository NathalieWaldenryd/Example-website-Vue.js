

## Build Setup

update `nginx/default.conf` to match:
``` bash
ssl_certificate /.certs/certificates/$DOMAIN.pem;
ssl_certificate_key /.certs/certificates/$DOMAIN.key;
```
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

#generate SSL certificates using DNS
docker run --rm -v "$PWD/.certs":/.lego --env DO_AUTH_TOKEN="$DO_AUTH_TOKEN" goacme/lego --pem --accept-tos  -m "$EMAIL" -d "$DOMAIN" -d "*.$DOMAIN" --dns digitalocean --dns.resolvers  1.1.1.1 run

#run in server 
docker-compose up
```
