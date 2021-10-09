import logo from './logo.svg';
import './App.css';
import FullName from './component/Profile/FullName' ;
import ProfilePhoto from './component/Profile/ProfilePhoto';
import Address from './component/Profile/Address';

function App() {
  return (
  
      <>
      <ProfilePhoto />
      <FullName/>
      <Address/>
    </>
  );
}

export default App;
