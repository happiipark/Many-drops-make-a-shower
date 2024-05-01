import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    // 최초 렌더링시 가장 먼저 실행
    super(props);
    console.log("LifeCycleSample constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 2번째로 실행 , 업데이트시 또 바로 실행된다.
    console.log("getDerivedStateFromProps"); // props로 받아온 값을 state에 동기화 시킬 때 사용하는 메서드로 마운트와 업데이트시 호출 부모 컴포넌트에서 color을 받아온다
    console.log("부모 컴포넌트가 내려준 props(prevState) : ", prevState);
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //현재 값은 this. 으로 읽어고고
    // 다음 값은 next로 읽어올 수 있다.
    console.log("shouldComponentUpdate", nextProps, nextState);
    console.log("nextProps : ", nextProps);
    console.log("nextState : ", nextState);
    // 숫자의 마지막 자리가 4면 리렌더링 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    // 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달
    console.log("getSnapshotBeforeUpdate");
    console.log("prevProps : ", prevProps);
    console.log("prevState : ", prevState);
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.haneldClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
