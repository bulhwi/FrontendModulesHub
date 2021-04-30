#### Frontend
**강의 본거, 스터디한거, 기타등등 프론트엔드 관련된 것을 git submodule로 연동**

### git submodule 
```bash
  // root 경로는 필요없음.
  // 서브모듈 추가
  git submodule add https://github.com/bulhwi/repository.git 경로/명
  
  // 서브모듈 제거
  git submodule deinit 경로/명
  
  // 모든 서브모듈 제거
  git submodule deinit .
  
  // root 리포지토리를 clone할때 서브모듈도 한번에 clone
  git clone --recursive URL
  
  // 서브모듈 업데이트 / 초기화
  git submodule update
  git submodule init
```

#### node 버전이 다른 개발환경에서 필요시 version을 변경하기 위해 사용하는 NVM(Node Version Manager) 설치/사용 정리  

* 제어판에서 기존 node.js 제거
* 최신버전의 NVM을 설치 (setup으로 설치)
* [다운로드 github](https://github.com/coreybutler/nvm-windows/releases)
* window + r -> cmd (터미널 열기)
* 필요한 버전의 node를 설치
    * nvm install v6.11.2
    * nvm install v10.15.3
* 설치된 node 버전을 확인
    * nvm ls
* 사용할 node 버전을 선택
    * nvm use 6.11.2
* 변경된 node/npm 버전을 확인
    * node -v
    * npm -v
    * nvm ls
