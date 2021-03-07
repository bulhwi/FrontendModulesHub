### Frontend

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