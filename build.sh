#!/bin/bash
set -e

#build and tag image
docker build -t lucasfds/breath:latest -t lucasfds/breath:$1 . 

#upload image
docker push lucasfds/breath:latest
docker push lucasfds/breath:latest:$1