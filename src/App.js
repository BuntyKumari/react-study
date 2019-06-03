import React from 'react';
import './App.css';
import FocusInput from './Component/FocusInput';
import FRParentInput from './Component/FRParentInput';
import PortalDemo from './Component/PortalDemo';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';
import ClickCounterTwo from './Component/ClickCounterTwo';
import HoveredCounterTwo from './Component/HoveredCounterTwo';
import User from './Component/User';
import Counter from './Component/Counter'
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/UserContext';
// import Greet from './Component/Greet';
// import FunctionClick from './Component/FunctionClick';
// import ClassClick from './Component/ClassClick';
//import ParentComponent from './Component/ParentComponent';
// import Form from './Component/Form';
// import LifeCycleA from './Component/LifeCycleA';
// import Fragments from './Component/Fragments';
// import Table from './Component/Table';
// import RefsDemo from './Component/RefsDemo';

function App() {
  return (
    <div className="App">
    {/* <Greet />
    <FunctionClick />
    <ClassClick /> */}
    {/* <ParentComponent /> */}
    {/* <Form /> */}
    {/* <LifeCycleA /> */}
    {/* <Fragments /> */}
    {/* <Table /> */}
    {/* <RefsDemo /> */}
    {/* <FocusInput /> */}
    {/* <FRParentInput /> */}
    {/* <PortalDemo /> */}
    {/* <ClickCounter name="Bunty" />
    <HoverCounter name="Adder" /> */}
    {/* <ClickCounterTwo />
    <HoveredCounterTwo />
    <User render= {(isLoggedIn) => isLoggedIn ? 'Bunty' : 'Guest' } /> */}
    {/* <Counter 
      render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )}
    />
    <Counter 
      render={(count, incrementCount) => (
        <HoveredCounterTwo count={count} incrementCount={incrementCount} />
      )}
    /> */}
    <UserProvider value="Bunty" >
    <ComponentC />
    </UserProvider>
   
    </div>
  );
}

export default App;
