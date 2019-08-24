#!/bin/bash
set -e

docker build -t lucasfds/breath:latest
docker run -p 3000:3000 lucasfds/breath:latest 