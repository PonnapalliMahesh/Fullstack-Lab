import React , { useState , useContext , useEffect,createContext} from 'react';
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
const [theme , setTheme ] = useState ('light' );

const toggleTheme = () => {
setTheme((prevTheme ) => (prevTheme === 'light' ? 'dark' : 'light' ));
};

return(
<ThemeContext.Provider value = {{  theme , toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};
const ThemedComponent = () => {
  const {theme,toggleTheme}=useContext(ThemeContext);
  const themedComponentStyle = {
    background : theme === 'light' ? '#fff' : '#333',
    color : theme === 'light' ? '#333' : '#fff',
    padding : '20px',
    margin : '20px 0',
  };
  return (
    <div style = {themedComponentStyle}>
      <h3>Themed Component</h3>
      <p>The current theme is: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const CounterComponent = () => {
  const [count,setCount] = useState(0);
  useEffect(() => {
    document.title = `Count:${count}`;
  },[count]);

  const counterStyle = {
    margin : '20px 0',
    padding:'15px',
    border : '10px solid #ccc',
    borderRadius : '8px',
  };
  return (
    <div style= {counterStyle}>
      <h2>Counter component</h2>
      <p>Current count: {count}</p>
      <button onClick={()=> setCount(count + 1)} >Increment</button>
      <button onClick={()=> setCount(count - 1 ) } disabled = {count === 0 }>Decrement</button>
      <ThemedComponent/>
      </div>
      );
      };

      const UserInfoComponent = () => {
        const [userInfo ,setUserInfo] = useState({ name : '' ,age :0});

        useEffect(() => {
          const fetchUserInfo = async () => {
            setTimeout(() => {
              setUserInfo({name : "Sneha" , age : 20 });
              } , 3000) ;
            };
            fetchUserInfo();
          },[]);

          const  userInfoStyle = {
            margin : ' 20px 0',
            padding : '20px',
            border : '1px solid #ccc',
            borderRadius : '8px',
          };
          return (
            <div style = {userInfoStyle}>
              <h2>User Info Component</h2>
              <p> name : {userInfo.name}</p>
              <p> Age :{userInfo.age} </p>
            </div>
            );
          };


const App = () => {
  const appStyle = {
    fontFamily : 'Arial,sans-serif',
    maxWidth : '600px',
    margin : 'auto',
    padding : '20px',
  };
  return (
    <ThemeProvider>
      <div style = {{textAlign:'center',marginTop : '10px'}}>
        <h1 style = {{ borderBottom : '2px solid orange',color : 'Blue'}}>All Hooks at once</h1> 
      </div>
      <div style = {appStyle}>
        <CounterComponent/>
        <UserInfoComponent/>
      </div>
    </ThemeProvider>
  );
};

export default App;