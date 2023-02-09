import Form from "../components/Form/Form";
import Display from "../components/Display/Display"
import "../App/App.css";

const App = () => {

  return (
    <>
      <Form></Form>
      <Display/>
    </>

  );
}

//dit word bij class components gebruikt
//connect(mapStateToProps, mapDispatchToProps)
//mapStateToProps state vanuit store in app als props binnnen kwamen
//mapDispatchToProps dingen we schrijven naar de store
export default App;
