profile=$1
region='ap-northeast-2'
account_id='524043130808'

aws ecr get-login-password --region "$region" --profile "$profile" | docker login --username AWS --password-stdin $account_id.dkr.ecr.$region.amazonaws.com
