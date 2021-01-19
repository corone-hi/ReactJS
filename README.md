Movie App 2020
노마드 코더 강의 

React JS Fundametals Course. . Also, How to github





## 🔶 깃허브 기본 사용법

*출처: https://evan-moon.github.io/2019/07/25/git-tutorial/#git%EC%9D%80-%EB%88%84%EA%B0%80-%EC%99%9C-%EB%A7%8C%EB%93%A4%EC%97%88%EB%82%98%EC%9A%94 

### 깃허브 기본 개념

Git은 분산 버전 관리 시스템이기 때문에 리모트 서버에 있는 소스를 수정하려면 로컬 환경으로 소스를 클론(Clone)하는 과정이 필요하다. 말 그대로 모든 소스를 복사하여 사용자의 컴퓨터로 받아오는 것이다.

이후 Git은 로컬 환경의 파일을 추적하고 있다가 사용자가 소스를 수정하면 그 변경 사항을 감지한다. 그 후 사용자는 자신이 리모트 서버에 변경 사항을 반영하고 싶은 파일이나 소스 코드의 라인을 고른 뒤 리모트 서버에 업로드한다.

모트 서버에 있는 파일을 내 컴퓨터로 복붙한 다음 수정해서 다시 리모트 서버로 업데이트한다는 것. 이때 사용자가 자신이 변경한 로컬의 소스를 서버의 소스에 업로드하는, 즉 서버로 밀어올리는 행위를  __Push__ 라고 부르고 사용자가 서버의 소스를 자신의 클라이언트로 가져오는 행위를 __Pull 또는 Fetch__ 라고 하는 것이다. 

 - Git을 사용할 때는 내가 어떤 리모트 서버에 변경 사항을 업로드 할 것인지 정해야하는데, 반드시 하나의 리모트 서버만 사용할 수 있는 것이 아니기 때문에 내가 사용하는 리모트 서버의 이름을 정해줘야한다. 이때 주로 사용하는 관례적인 이름이 바로 __Origin__ 이다.

- 레파지토리(Repository, Repo)는 저장소라는 뜻으로, 리모트 서버 내에서 구분되는 프로젝트 단위라고 생각하면 된다. 우리가 구글 드라이브를 사용할 때도 하나의 디렉토리에 모든 파일을 다 때려넣지않고 몇 개의 디렉토리를 만들고 용도에 따라 파일을 나눠서 구분하는 것과 동일하다.
```
https://github.com/user/repository.git

-> 레파지토리를 클론받을 때는 해당 레파지토리를 가리키는 URL이 필요한데, 레파지토리의 이름은 URL의 맨 마지막에 __.git 확장자__ 를 가지는 방식으로 표현된다.

```


- 브랜치는 일종의 독립된 작업을 진행하기 위한 작업 공간의 개념이다. 맨 처음 Git을 초기화했을 때 기본적으로 master라는 이름의 브랜치가 하나 생성된다. 그 후 개발하는 기능 또는 버그 픽스에 따라서 브랜치를 새로 생성하고 거기서 작업한 후에 나중에 다시 master로 합치는 것이다.

  <img src="https://evan-moon.github.io/static/3337736752b17e897031f2d2142cd163/5cae2/branches.png">
  
 
### 필수 명령어

#### clone

clone은 말 그대로 리모트 서버의 레파지토리에서 클라이언트로 파일을 복붙하는 행위를 말한다. 이때 클론을 수행하기 위해서는 어떤 레파지토리에서 파일을 가져올 것인지에 대한 정보가 필요한데, 이 정보는 위에서 설명했듯이 URL로 표현한다. HTTPS 프로토콜이나 SSH 프로토콜을 사용하여 소스를 클론할 수 있는데, 보통 HTTPS를 많이 사용한다.

```

$ cd ~/dev/evan # 원하는 작업 디렉토리로 이동
$ git clone https://github.com/evan-moon/test-repo.git

```

원하는 작업 디렉토리로 이동한 뒤 clone 명령어를 사용하여 레파지토리를 클론하게되면 현재 위치에 레파지토리 이름과 동일한 디렉토리가 생성되고 그 내부에 리모트 서버의 소스가 전부 복사된다. 위 예제의 경우 ~/dev/evan 디렉토리 내부에 test-repo 디렉토리가 생성되고 해당 레파지토리의 소스가 복사될 것이다.

이제 이 복사된 소스를 맘대로 수정하거나 파괴해도 리모트 서버에 업로드만 하지 않는다면, 같은 리모트 서버를 보고 있는 다른 사람이 영향을 받을 일은 절대 없기 때문에 안심하고 맘대로 만지작거려도 된다.

#### pull

pull 명령어는 리모트 서버의 최신 소스를 가져와서 로컬 소스에 병합(Merge)해주는 명령어이다. 만약 우리가 처음 소스를 클론한 후에 다른 사람이 리모트 서버를 상태를 갱신했더라도 리모트 서버가 우리에게 그 변경된 사항을 알려주지는 않기 때문에 우리가 직접 서버에 문의를 날려야 하는 것이다.

```

$ git pull # 현재 내 로컬 브랜치와 같은 이름을 가진 리모트 서버 브랜치가 타겟
$ git pull origin master # origin 리모트 서버의 master 브랜치가 타겟

```

#### fetch

fetch는 리모트 서버의 최신 이력을 내 클라이언트로 가져오되 병합은 하지 않는 명령어이다.

```
$ git fetch

```

fetch 명령어를 사용하면 다른 사람들이 리모트 서버에 새로 업데이트한 모든 내역을 받아올 수 있다. 이제 그 내역을 보고 내 로컬에 있는 버전이 리모트 서버에 있는 버전보다 이전 버전이라면 pull 명령어를 사용하여 내 컴퓨터의 소스 코드를 갱신하면 된다.

### 변경 사항을 리모트 서버에 업데이트 하기

#### add

add 명령어가 어떤 물건들을 포장할 것인지 고르는 과정을 담당한다.

```

$ git add . # 현재 디렉토리의 모든 변경사항을 스테이지에 올린다
$ git add ./src/components # components 디렉토리의 모든 변경사항을 스테이지에 올린다
$ git add ./src/components/Test.vue # 특정 파일의 변경사항만 스테이지에 올린다
$ git add -p # 변경된 사항을 하나하나 살펴보면서 스테이지에 올린다

```

이때 선택된 변경 사항들은 스테이지(Stage)라고 불리는 공간으로 이동하게 된다. 이때 __git add <경로>__ 명령어는 해당 경로 안에 있는 변경 사항을 전부 스테이지에 올리게 되는데, 이게 영 불안하다 싶은 사람은 __-p__ 옵션을 줌으로써 변경 사항을 하나하나 확인하면서 스테이지에 올릴 수도 있다.

이렇게 스테이지에 담긴 변경 사항들은 __git status__ 명령어를 사용하여 확인해볼 수 있고, status 명령어에 추가적으로 __-v__ 옵션을 사용하면 어떤 파일의 어떤 부분이 변경되었는지도 함께 볼 수 있다.



#### commit

add를 사용하여 원하는 변경사항을 스테이지에 올렸다면 이제 스테이지에 있는 변경 사항들을 포장할 차례이다. 이때 이 포장하는 행위를 commit이라고 한다. 커밋은 Git에서 상당히 중요한 부분을 차지하는 행위인데, 바로 Git이 하나의 커밋을 하나의 버전으로 정의하기 때문이다. 그렇기 때문에 특정 버전으로 어플리케이션을 변경이라는 기준도 당연히 바로 이 커밋이 된다.

```
$ git log --graph

* commit 20f1ea9 (HEAD -> master, origin/master, origin/HEAD)
| Author: Evan Moon <bboydart91@gmail.com>
|
|     회원가입 기능 개발 끝!
|
* commit ca693fd
| Author: Evan Moon <bboydart91@gmail.com>
|
|     회원가입 비밀번호 입력 폼 추가
|
* commit f9b6e2d
| Author: Evan Moon <bboydart91@gmail.com>
|
|     회원가입 이메일 입력 폼 추가
|

```

위의 그래프 상에서 필자의 어플리케이션의 현재 상태는 어떤 커밋일까?

그래프 상에서 HEAD가 20f1ea9 회원가입 기능 개발 끝! 커밋에 위치해 있으므로 현재 필자의 어플리케이션은 회원가입 기능까지 개발이 완료된 상태라는 것을 알 수 있다.

그리고 그래프를 자세히 보면 각각의 커밋들은 20f1ea9과 같은 고유한 해쉬 값을 가지고 있는데, 이 해쉬 값을 사용하여 어떠한 커밋으로든 자유자재로 이동할 수 있다. 예를 들면 회원가입 비밀번호 입력 폼 추가 커밋의 해쉬 값을 사용하여 git checkout ca693fd 명령어로 회원가입 비밀번호 입력 폼이 추가된 시점으로 이동할 수 있다는 것이다. 즉, 시간여행이 가능하다!

이러한 커밋의 기능을 제대로 활용하기 위해서 커밋은 반드시 실행 가능한 단위로 해야한다. 더 쉽게 말하자면 특정 커밋으로 버전을 변경했을 때 어플리케이션이 제대로 실행되지 않고 에러가 발생하면 안된다는 것이다.

그리고 위의 예제에서 볼 수 있듯이 커밋에는 메세지를 담을 수 있다. 이 메세지는 이 커밋으로 인한 변경 사항이 무엇인지 직접적으로 표현해주는 유일한 수단이므로 좋은 커밋 메세지를 작성하기 위한 고민은 필수다. 다행히도 이미 많은 개발자 분들이 좋은 커밋 메세지를 어떻게 작성해야 하는지에 대해 포스팅을 해주셨기 때문에 구글에서 한번 검색해보면 수두룩하게 나온다.

참고로 커밋 메세지는 꼭 영어여야 할 필요는 없다. 조직에 따라서 커밋 메세지를 영어로만 작성하도록 강제하는 룰이 있을 수는 있지만, 사실 커밋 메세지는 결국 커뮤니케이션 수단이므로 언제 누가 보더라도 알아보기 쉽게만 작성하면 장땡이다. 그러니까 영어가 익숙하지 않은데도 불구하고 굳이 영어를 고집할 필요는 없다. 오히려 같이 협업하는 팀원들이 영어에 익숙하지 않다면 그 또한 불필요한 커뮤니케이션 비용이 될 수 있다.

또한 커밋은 아직 리모트 서버에 파일을 전송하는 것이 아니라 사용자의 클라이언트 내에서 수행되는 과정이므로 인터넷에 연결이 되어 있지 않아도 변경 사항을 커밋하는 것은 아무런 지장이 없다.(비행기에서 코딩할 때도 커밋까지는 가능하다!)

#### push

커밋을 통해 포장된 변경 사항들은 push 명령어를 사용하여 리모트 서버로 업로드 된다. 이때는 커밋된 변경 사항들을 실제 리모트 서버에 전송하는 것이기 때문에 반드시 네트워크에 연결이 되어있어야 한다. 그리고 푸쉬할 때 반드시 A 로컬 브랜치는 A 리모트 브랜치에만 푸쉬해야 한다는 룰 따윈 없기 때문에 커밋들을 리모트 서버로 푸쉬할 때는 Git에게 “어떤 리모트 서버의 어떤 브랜치로 푸쉬할 것인지”도 함께 알려줘야 한다.

```
$ git push origin master # origin 리모트 서버의 master 브랜치로 푸쉬해줘
```

- 브랜치를 자동으로 추적할 수 있는 기능

```
$ git push --set-upstream origin master

```



##  🔶리액트 JS를 이용하여 movie app 만들기 (웹에 해당)

### 리액트 앱 만들기

1. npx create-react-app <폴더 이름>
2. visual code에서 폴더 열기
   == code <폴더이름>/
3. package.json 에서 script{}에서 start, build만 사용
4. 실행 : npm start

* 페이지를 찾을 수 없다는 안내가 나오는이유는 서버가 시작되지 않았기 때문
-> 터미널: npm start 필요

5. git에서 repository 만들기
6. git init : 초기화
7. git remote add origin  https://github.com/corone-hi/movie_app_2020.git
8. git add .
9. git commit -m <repository url>
10. git commit -m <내가 원하는 이름>
11. git push origin master
 



### 기본적인 리액트 함수가 돌아가는 것

```

import React from ′react′;
import PropTypes from ′prop−types′;
//function Food({fav}) == props.fav
function Food({name, picture, rating}){
  return <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
  </div>
}
const foodILike = [
{
  id: 2,
  name: "Samgyeopsal",
  image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  rating: 4.9
},
{
  id: 3,
  name: "Bibimbap",
  image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  rating: 4.8
},
{
  id: 4,
  name: "Doncasu",
  image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  rating: 5.5
},
{
  id: 5,
  name: "Kimbap",
  image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  rating: 4.7
}
];
//무조건 이름은 propTypes여야 작동한다.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
function App() {
  return( 
  <div>
    {foodILike.map(dish => ( 
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}
    
  </div>
  )
}
export default App;

```

### 리액트에서 class component 개념

```

import React from 'react';
import PropTypes from 'prop-types';
//react class component↓↓
class App extends React.Component{
  /*
  //Javascript에서 class를 호출하기 위해 사용
  constructor(props){
    super(props);
    console.log("hello");
  }*/
  //데이터는 변하기 때문에 state를 사용
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({
     count: this.state.count +1
    }));
  };
  minus = () => {
    this.setState(current => ({
      count: this.state.count -1
    }));
    //setState를 사용해야만 호출 시 state를 refresh하고
    //render function을 호출한다.
    //그렇지만 state를 다시 사용하는 것은 좋지않으므로, 함수형식으로 사용(current)
  };
  //이 component는 처음 render된 것을 알려줌
  componentDidMount(){
    console.log("component render");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  componentWillUnmount(){
    //componenet가 죽을 때 발생, 페이지가 바뀌거나 등등
    console.log("Goodbye, cruel world");
  }
  render(){
    console.log("I'm rendering");
  return (
  <div>
    <h1>The number is {this.state.count}</h1>
    <button onClick={this.add} >Add</button>
    <button onClick={this.minus}>Minus</button>
  </div>
  )
  }
}
export default App;

```

### ⁜ setTime에서 시간 지정

```
setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000)

```
