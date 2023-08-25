import{Box , InputBase , Button , styled , Typography} from "@mui/material"
import { useState } from "react"
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Container = styled(Box)({
    backgroundColor:"gray",
    padding:"17px",
    borderRadius:"0 20px 0 0"
})

const Input = styled(InputBase)({
    color:"black",
    fontSize:"20px"
})

const Getbutton = styled(Button)({
    backgroundColor:"green",
    display:"inline-block",
    float:"right"
  
})

const Allcontainer = styled(Box)({
    backgroundColor:"gray",
    borderRadius:"0 20px 20px 0",
    width:"100%",
    height:"100%"
})

const Text = styled(Box)({
    // color:"white"
})


const api = {
    key:"e10e48cd5c1df35f6da8d75df73a8bb5",
    base: "https://api.openweathermap.org/data/2.5/",
}


function Form() {
    const[city,setCity]=useState("")
    const[weather,setWeather]=useState({})

    const searchpress = async()=>{
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    
    }

 

    return ( <>
    <Allcontainer>
        <Container >
            <Input
            placeholder="Enter City/Town..."
            onChange={(e)=>{setCity(e.target.value)}}
            />
            <Getbutton variant="contained" onClick={searchpress}>Get Weather</Getbutton>
        </Container>
        <Text>
        <Row><LocationOn />Location: {weather.name}, {weather.sys.country}</Row>
            <Row><SettingsBrightness />Temperature: {weather.main.temp}</Row>
            <Row><Opacity />Humidity: {weather.main.humidity}</Row>
            <Row><Brightness5 />Sun Rise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun Set: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {weather.weather[0].main}</Row>
            <Row><Cloud />Clouds: {weather.clouds.all}%</Row>
        </Text>
    </Allcontainer>
        </>
     );
}

export default Form;