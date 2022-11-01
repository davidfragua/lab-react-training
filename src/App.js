import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';


const arrPeople =[
{
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth:new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
},
{
  lastName:'Delores',
  firstName:'Obrien',
  gender:'female',
  height:172,
  birth:new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
}
]

const greetings = [
  {
    lang:"de",
    children: "Hallo"
   },
   {
    lang:"en",
    children: "Hello"
   },
   {
   lang:"es",
   children: "Hola"
   },
   {
    lang:"fr",
    children: "Bonjour"
    }
]


function App() {
  return (
    <div className="App">
     

    <IdCard people = { arrPeople[0]}/>
    <IdCard people = { arrPeople[1]}/>

    <Greetings  greeting = { greetings[0]}/> 
    <Greetings  greeting = { greetings[1]}/>

    <Random min={1} max={6}/>
    <Random min={1} max={100}/>


    </div>
  );
}

export default App;
