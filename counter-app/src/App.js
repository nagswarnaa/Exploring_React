import NavBar from './components/navbar'
import './App.css';
import React, { Component } from 'react';
import Counters from "./components/counters";
class App extends Component {
  state = { 
    counters:[
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:3},
        {id:4,value:4}
    ]
 };
 handleIncrement =(counter)=>{
   
   const counters=[...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index]={...counter};
   counters[index].value++;
   this.setState({counters});
 }
 handleDecrement =(counter)=>{
   
  const counters=[...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value--;
  this.setState({counters});
   
 }
 handleDelete = () =>{
     console.log('delete clicked');
 };
 handleReset=()=>{
   
    const counters=this.state.counters.map(c => {
         c.value=0;
         return c;
     })
     this.setState({counters});
 }
  render(){
  return (
    <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c =>c.value >0).length}/>
    <main className='container'> 
    <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} onReset={this.handleReset}/>
    </main>
    </React.Fragment>
  );
};
}
export default App;
