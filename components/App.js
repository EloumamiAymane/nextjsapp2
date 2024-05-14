"use client";

//scss
import "./assets/scss/socialv.scss"
import "./assets/scss/customizer.scss"
// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { setSetting } from '../components/store/setting/actions'


function App(props) {
  const dispatch = useDispatch()
  dispatch(setSetting())


  return (
    <div className="App">
      {/* <IndexRouters /> */}
      {props.children}
    </div>
  );
}

export default App;
