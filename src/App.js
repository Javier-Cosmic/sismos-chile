import React, {useState ,useEffect} from 'react'
import axios from 'axios'
import Detail from './components/Detail'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import { CssBaseline } from '@material-ui/core'

export const Context = React.createContext()

function App() {

  const themeLight = createMuiTheme({
    palette: {
        primary: {
          main: '#607d8b'
        },
        secondary: {
          main: '#cfd8dc'
        }
    },
    typography: {
      fontFamily: 'Ubuntu'
    }
  })
  
  const themeDark = createMuiTheme({
        palette: {
          primary: {
            main: '#263238'
          },
          secondary: {
            main: '#263238'
          },
          type: 'dark',

          background: {
             paper: '#222222',
             default: '#191919' 
          }  
        },
        typography: {
          fontFamily: 'Ubuntu'
        }
    }
  )

  const [darkMode, setDarkMode] = useState(false);

  const [sismo, setSismo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    
      const getApi = async () => {
          const sismos = await axios.get('https://api.gael.cl/general/public/sismos')
          // const data = sismos.data
          const {data} = sismos
          setSismo(data)
          setLoading(true)
      }

      getApi()

  }, [])
 

  const context = {
    sismo: sismo, 
    darkMode: darkMode, 
    setDarkMode: setDarkMode
  }

  return (
    <div>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <Context.Provider value={context}>

            <Header/>
          
            {loading
              ? <Detail />
              : <Loading />
            }

            <Footer />

        </Context.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
