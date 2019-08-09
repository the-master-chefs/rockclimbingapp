import React from "react";
import ContainerA from "../../components/Container";
import actions from "../../actions";
import { connect } from "react-redux";
import { getRandomDog } from "../../store.js";

function Test(props) {
  if(props.dog.loading) {
    return <div>Loading</div>;
  }
  if(props.dog.data && props.dog.data.message){
    return <img onClick={()=>props.getRandomDog()} src={props.dog.data.message} alt="dog"/>;
  }

  return (
    <ContainerA>
    <span onClick={()=>props.getRandomDog()}>
      test
    </span>
  </ContainerA>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getRandomDog: getRandomDog.action(dispatch),
    logout: payload => dispatch(actions.logout(payload))
  };
};

export default connect(function(state){
  return {
    name: state.users.name,
    dog: state.dog
  };
}, mapDispatchToProps)(Test);

