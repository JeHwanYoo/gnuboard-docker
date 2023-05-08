#!/usr/bin/env bash

profile=$1
region='ap-northeast-2'
account_id='524043130808'
nginx_repository='gnu-nginx'
nginx_name='gnu-nginx'
php_repository='gnu-php'
php_name='gnu-php'

aws ecr get-login-password --region "$region" --profile "$profile" | docker login --username AWS --password-stdin $account_id.dkr.ecr.$region.amazonaws.com

docker build -t $nginx_name ./images/nginx/
docker build -t $php_name ./images/php/

docker tag "$nginx_name" $account_id.dkr.ecr.$region.amazonaws.com/$nginx_repository:latest
docker push $account_id.dkr.ecr.$region.amazonaws.com/$nginx_repository:latest

docker tag "$php_name" $account_id.dkr.ecr.$region.amazonaws.com/"$php_repository":latest
docker push $account_id.dkr.ecr.$region.amazonaws.com/"$php_repository":latest
