import{Box, styled} from "@mui/material"
import Sunset from "../assets/image/bg2.png"
import Form from "../Comp/Form";

const Comp = styled(Box)({
    height:"100vh",
    display:"flex",
    alignItems:"center",
    width:"65%",
    margin:"0 auto"
    
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width:"27%" ,
    height:"80%",
    backgroundSize:"cover",
    borderRadius:"20px 0 0 20px"
})

function Home() {
    return ( 
        
        <Comp>
            <Image></Image>
            <Box style={{width:"73%",height:"80%"}}>
                <Form/>
            </Box>
        </Comp>
    
     );
}

export default Home;