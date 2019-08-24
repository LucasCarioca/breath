#!/bin/bash
set -e

kubectl apply -f ./k8s

kubectl set image deployments/breath-deployment breath=lucasfds/breath:$1
