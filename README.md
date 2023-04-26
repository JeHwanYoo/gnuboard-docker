# FE-GnuBoard-Container

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

### Docker

#### Mac

```bash
brew install --cask docker
```

#### Linux

https://docs.docker.com/desktop/install/linux-install/

#### Windows

https://www.docker.com/

### 빌드 후 실행

```bash
docker compose up --build -d
```

### 실행

```bash
docker compose up -d
```

### 종료

```bash
docker compose down
```

### 그누보드 설치

#### 접속 주소

#### 개발 용 DB 정보

```
Host: db
User: gnu
Password: gnu2000
DB: gnu
```

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
- PHP 소스 볼륨 - source

## 포트 (로컬)

- HTTP: 80
- HTTPS: 443
- PHP: 9000
- MariaDB: 3306

## Todo

- [ ] push to ECR
- [ ] run on ECS (with EFS Volume)
- [ ] Separate DB into private zone
- [ ] Connect with Cognito for Authentication
- [ ] Migrate Gnuboard User to Cognito
- [ ] Connect with S3 for File Upload