# GnuBoard-Docker

<img src="https://i.ibb.co/B42GNbY/Screenshot-2023-04-26-at-9-37-47-PM.png" alt="Screenshot-2023-04-26-at-9-37-47-PM" >

- 그누보드 공식 홈페이지: https://sir.kr/
- 참고 레퍼런스: https://lifefun.tistory.com/37#google_vignette

## 개요

그누보드를 컨테이너 환경에서 개발하기 위한 프로젝트 입니다.

### 메인 페이지

<img src="https://i.ibb.co/pz4gqKL/Screenshot-2023-04-26-at-9-41-21-PM.png" alt="Screenshot-2023-04-26-at-9-41-21-PM" >

### 관리자 페이지

<img src="https://i.ibb.co/yFkhDGp/Screenshot-2023-04-26-at-9-39-27-PM.png" alt="Screenshot-2023-04-26-at-9-39-27-PM" >

## 설치 (로컬)

### 1. Git 설치

[설치](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)

### 2. Docker 설치

#### Mac

```bash
brew install --cask docker
```

#### Linux

https://docs.docker.com/desktop/install/linux-install/

#### Windows

https://www.docker.com/

### 3. 그누보드 소스 설치

#### Linux & Mac

```bash
sh ./install.sh
```

#### Windows

```batch
install.bat
```

### 4. Docker 실행

#### 빌드 후 실행

```bash
docker compose up --build -d
```

#### 실행

```bash
docker compose up -d
```

#### 종료

```bash
docker compose down
```

### 5. 그누보드 설치

#### 개발 용 DB 정보

```
Host: db
User: gnu
Password: gnu2000
DB: gnu
```

#### 접속 주소

```
http://localhost
```

<img src="https://i.ibb.co/9sZXj2z/Screenshot-2023-04-26-at-9-26-45-PM.png" alt="Screenshot-2023-04-26-at-9-26-45-PM" >

<img src="https://i.ibb.co/dLQPKYS/Screenshot-2023-04-26-at-9-27-22-PM.png" alt="Screenshot-2023-04-26-at-9-27-22-PM" >

<img src="https://i.ibb.co/9HCvdv8/Screenshot-2023-04-26-at-9-28-11-PM.png" alt="Screenshot-2023-04-26-at-9-28-11-PM" >

<img src="https://i.ibb.co/nQQd1Ch/Screenshot-2023-04-26-at-9-29-11-PM.png" alt="Screenshot-2023-04-26-at-9-29-11-PM" >

<img src="https://i.ibb.co/Y3T3Yvn/Screenshot-2023-04-26-at-9-31-51-PM.png" alt="Screenshot-2023-04-26-at-9-31-51-PM" >

## 개발 (로컬)

- DB 파일 볼륨 - mariadb_data
- PHP 소스 볼륨 - html

source 는 Submodule 로 관리하세요.

## 포트 (로컬)

- HTTP: 80
- HTTPS: 443
- PHP: 9000
- MariaDB: 3306

## Docker login

```bash
sh login-docker-by-aws.sh <profile>
```

## Docker 이미지 배포

```bash
sh push-ecr.sh <profile>
```

## Docker to ECS

참고: https://github.com/GenstarDB/aws-docker2ecs

```
//local test
docker-compose up

//aws configuration
aws config

//list current context
docker context ls

//create context for ecs
docker context create ecs myecscontext

//use ecs context
docker context use myecscontext

//convert docker-compose stack to cloudformation
docker compose convert

//Deployment to ECS
docker compose up

//Details of the compose stack -> Find the url of LB
docker compose ps

//Delete cfn stack from AWS
docker compose down
```

## Todo

- [x] push to ECR
- [ ] run on ECS (with EFS Volume)
- [ ] Separate DB into private zone
- [ ] Connect with Cognito for Authentication
- [ ] Migrate Gnuboard User to Cognito
- [ ] Connect with S3 for File Upload
