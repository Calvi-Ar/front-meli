
import { Container, Stack, Box,Input,Icon, Img, Text, StackDivider, Divider, Button } from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineShoppingCart, AiFillPlusCircle, AiOutlineCar, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation} from "react-icons/go";
import { GiShakingHands, GiSmartphone, GiOldMicrophone, GiSoccerBall, GiModernCity,GiSteeringWheel,GiLipstick, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineQrCode2, MdChair } from "react-icons/md";
import { CgScreen, CgSmartHomeRefrigerator } from "react-icons/cg";
import {IoShirtOutline, IoStar} from "react-icons/io5";
import {BiJoystick, BiCookie} from "react-icons/bi";
import {RiBearSmileLine, RiMickeyFill} from "react-icons/ri";
import {FaPlay, FaHandHoldingUsd, FaHandshake} from "react-icons/fa";
import {BsFillCreditCard2BackFill, BsFillCreditCard2FrontFill} from "react-icons/bs";



import banner from "./assets/banner.jpg";
import   celu2  from "./assets/celu2.jpg"
import casco2 from "./assets/casco2.jpg";
import tv2 from "./assets/tv2.jpg"
import notebook2 from "./assets/notebook2.jpg"
import   logo  from "./assets/Mercado-Libre.png"
import paramount from "./assets/paramount.jpg"
import HBOmax  from "./assets/HBOmax.jpg"
import disney from "./assets/disney.jpg";
import celu from "./assets/celu.jpg";
import auris from "./assets/auris.jpg";
import notebook from "./assets/notebook.jpg";
import tv from "./assets/tv.jpg";
import tablet from "./assets/tablet.jpg";


function App() {
  

  return (
    
      <Stack>
        <Box backgroundColor="#FFF555" paddingY={4}>
          <Container alignSelf="center" maxWidth="container.xl" padding={0}>
            <Stack>
              <Stack direction="row"  marginRight={65}>
                <Stack direction="row" spacing={9} flex={1} >
                  <Box borderRadius={100} width={49} height={41} backgroundColor="blue.700" display="flex" justifyContent="center"  >
                  <Icon borderRadius={100} backgroundColor="#FFF555" width={10} height={10} color="blackAlpha.500" as={FaHandshake} ></Icon>
                  </Box>
                  <Stack spacing={-2} alignItems="center">
                  <Text fontWeight="bold" color="blue.700" fontSize={18}>MODER</Text>
                  <Text fontWeight="bold" color="blue.700" fontSize={18}>CALIBRE</Text>
                  </Stack>
                  
                    <Stack alignItems="center" borderRadius="sm" boxShadow="sm" padding={2} backgroundColor="white" maxWidth={600} width="100%" direction="row" divider={<StackDivider/>}>
                      <Input paddingX={2} variant="unstyled" placeholder="Buscar productos, marcas y más..." />
                      <Icon width={5} height={5} color="gray" as={AiOutlineSearch}/>
                    </Stack>
                </Stack>
                <Stack  direction="row" >
                  <Stack align="center" spacing={0} fontFamily="cursive" justifyContent="center">
                    <Text fontSize={12} color="blackAlpha.800">Disney STAR+</Text>
                    <Text color="gray" fontSize={8}>INCLUIDO</Text>
                  </Stack>
                <Stack spacing={16} direction="row" alignItems="center" color="blackAlpha.700">
                  <Text fontWeight="bold">Suscribite al nivel 6 por solo $399</Text>
                </Stack>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={16} >
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <Icon color="gray" width={22} height={22} as={GoLocation}></Icon>
                    <Stack spacing={-1}>
                      <Text fontSize={13} color="gray">Enviar a</Text>
                      <Text fontSize={14} color="black">Capital Federal</Text>
                    </Stack>
                  </Stack>
                
                <Stack direction="row" spacing={60} >
                <Stack direction="row" spacing={6} alignItems="flex-end" >
                    <Text color="gray" fontSize={14} >Categorias</Text>
                    <Text color="gray" fontSize={14} >Ofertas</Text>
                    <Text color="gray" fontSize={14} >Historial</Text>
                    <Text color="gray" fontSize={14} >Supermercado</Text>
                    <Text color="gray" fontSize={14}>Moda</Text>
                    <Text color="gray" fontSize={14}>Vender</Text>
                    <Text color="gray" fontSize={14}>Ayuda</Text>
                </Stack>
                  
                <Stack direction="row" spacing={4} fontSize={14} alignItems="flex-end">
                    <Text>Creá tu cuenta</Text>
                    <Text>Ingresá</Text>
                    <Text>Mis Compras</Text>
                    <Icon width={5} height={5} as={AiOutlineShoppingCart }></Icon>    
                </Stack>

                </Stack>
                  
              </Stack>

            </Stack>
          </Container>
        </Box>


        <Container alignSelf="center" maxWidth="container.xl" padding={0} backgroundColor="blackAlpha.200" paddingBlock={6}>
          <Stack align="center"  maxWidth="Stack.xl">
          <Img height="350px" width="1200px"  src={banner}></Img>
          </Stack>

          <Box backgroundColor="white"  borderRadius={10} margin={10} height={100}>
          <Stack  direction="row" flex={1}  spacing={30} paddingY={6} justifyContent="space-around" alignItems="center">

            <Stack direction="row" alignItems="center" spacing={4}>
            <Icon color="blue.600" width={8} height={8} as={BsFillCreditCard2BackFill}></Icon>
            <Stack spacing={-1}>
            <Text fontSize={18}>Tarjeta de crédito</Text>
            <Text color="blue.500" fontSize={14}>Ver promociones bancarias</Text>
            </Stack>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={4}>
            <Icon color="blue.600" width={8} height={8} as={BsFillCreditCard2FrontFill}></Icon>
            <Stack spacing={-1}>
            <Text fontSize={18}>Tarjeta de débito</Text>
            <Text color="blue.500" fontSize={14}>Ver más</Text>
            </Stack>
            </Stack>
            
            <Stack direction="row" alignItems="center" spacing={4}>
            <Icon color="blue.600" width={8} height={8} as={FaHandHoldingUsd}></Icon>
            <Stack spacing={-1}>
            <Text fontSize={18}>Cuotas sin tarjeta</Text>
            <Text color="blue.500" fontSize={14}>Conocé Mercado Crédito</Text>
            </Stack>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={4}>
            <Icon color="blue.600" width={8} height={8} as={GiTakeMyMoney}></Icon>
            <Stack spacing={-1}>
            <Text fontSize={18}>Efectivo</Text>
            <Text color="blue.500" fontSize={14}>Ver más</Text>
            </Stack>
            </Stack>

            <Stack>
            <Icon color="blue.500" width={30} height={30} as={AiFillPlusCircle}></Icon>
            </Stack>
            
          </Stack>
          </Box>

          <Stack>

            <Stack direction="row" alignItems="baseline" paddingX={10} spacing={4}>
              <Text fontSize={25} color="blackAlpha.600">Ofertas</Text>
              <Text fontSize={15} color="blue.500">Ver todas</Text>
            </Stack>

            <Stack direction="row" spacing={5}  justifyContent="center" marginTop={14} padding={4}>

              <Box backgroundColor="white" width={224} height={330}>
                <Img padding={5} width="221px" src={celu}></Img>
                <Divider />
                <Stack direction="row" justifyContent="center" alignItems="center" padding={2}>
                  <Text color="blackAlpha.800" fontSize={25}>$2.689</Text>
                  <Text fontWeight="bold" color="green.500">11% OFF</Text>
                </Stack>
              </Box>
              <Box backgroundColor="white" width={224} height={330}>
                <Img padding={5} paddingBottom={24} width="221px" src={tablet}></Img>
                <Divider/>
                <Stack alignItems="center">
                <Stack direction="row" justifyContent="center" alignItems="center" padding={2}>
                  <Text color="blackAlpha.800" fontSize={25}>$4.722</Text>
                  <Text fontWeight="bold" color="green.500">5% OFF</Text>
                </Stack>
                <Stack alignItems="center">
                  <Text fontWeight="bold" color="green.500">Envio Gratis</Text>
                </Stack>
                </Stack>
              </Box>
              <Box backgroundColor="white" width={224} height={330} >
                <Img padding={5} width="221px" src={auris}></Img>
                <Divider />
                <Stack direction="row" justifyContent="center" alignItems="center" padding={2}>
                  <Text color="blackAlpha.800" fontSize={25}>$5.559</Text>
                  <Text fontWeight="bold" color="green.500">8% OFF</Text>
                </Stack>
              </Box>
              <Box backgroundColor="white" width={224} height={330} >
                <Img padding={5} paddingBottom={14} width="221px" src={tv}></Img>
                <Divider />
                <Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" padding={2}>
                  <Text color="blackAlpha.800" fontSize={25}>$9.201</Text>
                  <Text fontWeight="bold" color="green.500">11% OFF</Text>
                </Stack>
                <Stack alignItems="center">
                  <Text fontWeight="bold" color="green.500">Envio Gratis</Text>
                </Stack>
                </Stack>
              </Box>
              <Box backgroundColor="white" width={224} height={330} >
                <Img padding={5} width="221px" src={notebook}></Img>
                <Divider />
                <Stack direction="row" justifyContent="center" alignItems="center" padding={2}>
                  <Text color="blackAlpha.800" fontSize={25}>$3.863</Text>
                  <Text fontWeight="bold" color="green.500">10% OFF</Text>
                </Stack>
              </Box> 
            </Stack>

          </Stack>

          <Stack justifyContent="center" alignItems="center" paddingTop={20}  borderBottomRadius="30px">

          <Stack width={1200} height={425} borderRadius={30} spacing={0}>

            <Stack direction="row" spacing={-16} bgGradient='linear(to-r,#8c2882,	#9c2882, blue.900 )'>
            <Stack flex={0.8} height={90}  justifyContent="center" alignItems="flex-start">
              <Text marginLeft={6} color="white" fontSize={30}>Suscribite al nivel 6</Text>
            </Stack>
            <Stack><Text fontSize={35} color="white">|</Text></Stack>
            
            <Stack flex={0.2} height={90} justifyContent="center" alignItems="center" >
              <Text fontSize={22} color="white">$399 / Mes</Text>
              <Text padding={1} borderRadius={20} backgroundColor="green.700" color="white" fontSize={12}>67%OFF TODO UN AÑO</Text>
            </Stack>
            </Stack>

            <Stack width={1200} height={172}  backgroundColor="white"  >
              <Stack padding={4}>
                <Text fontSize={22} color="blackAlpha.600">Conseguí los mejores beneficios en Mercado Libre y Mercado Pago</Text>
              </Stack>
            <Stack spacing={6} direction="row" justifyContent="space-evenly"  >
              
              <Stack direction="row" width={225} height={75} backgroundColor="white" alignItems="center" justify="center">
                <Icon color= "blue.700" width={10} height={10} as={RiMickeyFill}></Icon>
                <Text fontSize={18}>
                  Disney+ sin cargo
                </Text>  
              </Stack>

              <Stack direction="row" width={225} height={75} backgroundColor="white" alignItems="center" justify="center">
                <Icon color="red.600" width={10} height={10} as={IoStar}></Icon>
                <Text fontSize={18}>
                ST<Icon color="red.600" width={4} height={4} as={IoStar}></Icon>R+ sin cargo
                </Text>
              </Stack>

              <Stack direction="row" width={225} height={75} backgroundColor="white" alignItems="center" justify="center">
                <Stack direction="row">
                  <Icon borderRadius={100}  backgroundColor="yellow.400" color= "white" width={10} height={10} as={GiShakingHands}></Icon>
                </Stack>
                <Stack spacing={-2}>

                <Text fontSize={18}>
                Beneficios en
                </Text>
                <Text fontSize={18}>
                 Mercado Libre
                </Text>
                </Stack>
              </Stack>

              <Stack direction="row" width={225} height={75} backgroundColor="white" alignItems="center" justify="center">
                <Stack direction="row">
                  <Icon color="blue.300" width={10} height={10} as={MdOutlineQrCode2}></Icon>
                </Stack>
                <Stack spacing={-2}>
                <Text fontSize={18}>
                Más descuentos con 
                </Text>
                <Text fontSize={18}>
                  Mercado Pago
                </Text>
                </Stack>
              </Stack>

            </Stack>

            </Stack>
            <Divider/>
            <Stack padding={4} width={1200} height={90} backgroundColor="white" justifyContent="center" alignItems="flex-end">
              <Button fontSize={18} color="white" backgroundColor="blue.500" width={120} height={55}>Suscribite</Button>
            </Stack>
          </Stack>
          </Stack>

          

          <Stack width={1100} height={400} padding={9} alignItems="flex-start" spacing={4}>
            <Stack direction="row" alignItems="baseline">
              <Text fontSize={30} color="blackAlpha.600">
                Beneficios de Mercado Puntos
              </Text>
              <Text fontSize={18} color="blue.400" >
                Ver todos los beneficios
              </Text>
            </Stack>
            <Stack direction="row" spacing={4}>
              <Img borderRadius={15} src={disney} width={400} height={250} ></Img>
              <Img borderRadius={15} src={HBOmax}  width={400} height={250} ></Img>
              <Img borderRadius={15} src={paramount} width={400} height={250} ></Img>
            </Stack>
          </Stack>

          <Stack width="100%" height={400} spacing={6} alignItems="center" padding={2} >

            <Stack alignSelf="start" marginLeft={70}>
              <Text color="blackAlpha.600" fontSize={28}>Descubrí</Text>
            </Stack>

            <Stack direction="row" spacing={6}  >
              <Stack direction="row" width={550} height={250} backgroundColor="white"  >
                <Stack width="50%" justifyContent="center" padding={6}  >
                  <Text letterSpacing={4} color="blackAlpha.700" fontSize={13}>CELULARES</Text>
                  <Stack spacing={-2}>
                  <Text  color="blackAlpha.700" fontWeight="bold" fontSize={25}>HASTA 9X</Text>
                  <Text _hover={{color: "red"}} color="blackAlpha.700" fontWeight="bold" fontSize={25}>SIN INTERÉS</Text>
                  </Stack>
                  <Button width={28} color="white" backgroundColor="blue.500">Ver más</Button>
                </Stack>
                <Stack alignItems="center">
                <Img mt={4} width="500px" height="100%" src={celu2}></Img>
                </Stack>
              </Stack>

              <Stack direction="row" width={550} height={250} backgroundColor="white">
              <Stack width="50%" justifyContent="center" padding={6}  >
                  <Text letterSpacing={4} color="blackAlpha.700" fontSize={13}>¡CALENTÁ MOTORES!</Text>
                  <Stack spacing={-2}>
                  <Text _hover={{color: "red"}}  color="blackAlpha.700" fontWeight="bold" fontSize={25}>HASTA 35% OFF</Text>
                  <Text color="blackAlpha.700" fontWeight="bold" fontSize={25}>Y 12X SIN INTERÉS</Text>
                  </Stack>
                  <Button width={28} color="white" backgroundColor="blue.500">Ver más</Button>
                </Stack>
                <Stack alignItems="center">
                <Img mt={4} width="200px" height="100%" src={casco2}></Img>
                </Stack>

              </Stack>
            </Stack>

          </Stack>

          <Stack width="100%" height={400} spacing={6} alignItems="center" padding={2} >


          <Stack alignSelf="start" marginLeft={70}>
            <Text color="blackAlpha.600" fontSize={28}>Te puede interesar</Text>
          </Stack>

          <Stack direction="row" spacing={6}  >
            <Stack direction="row" width={550} height={250} backgroundColor="white"  >
              <Stack width="50%" justifyContent="center" padding={6}  >
                <Text letterSpacing={4} color="blackAlpha.700" fontSize={13}>TELEVISORES</Text>
                <Stack spacing={-2}>
                <Text  color="blackAlpha.700" fontWeight="bold" fontSize={25}>HASTA 20% OFF</Text>
                <Text _hover={{color: "red"}} color="blackAlpha.700" fontWeight="bold" fontSize={25}>Y 12X SIN INTERÉS</Text>
                </Stack>
                <Button width={28} color="white" backgroundColor="blue.500">Ver más</Button>
              </Stack>
              <Stack alignItems="center">
              <Img m={2} width="250px" height="100%" src={tv2}></Img>
              </Stack>
            </Stack>

            <Stack direction="row" width={550} height={250} backgroundColor="white">
            <Stack width="50%" justifyContent="center" padding={6}  >
                <Text letterSpacing={4} color="blackAlpha.700" fontSize={13}>SOLO POR UNAS HORAS</Text>
                <Stack spacing={-2}>
                <Text _hover={{color: "red"}} color="blackAlpha.700" fontWeight="bold" fontSize={25}>¡OFERTAS</Text>
                <Text  color="blackAlpha.700" fontWeight="bold" fontSize={25}>RELÁMPAGO!</Text>
                </Stack>
                <Button width={28} color="white" backgroundColor="blue.500">Ver más</Button>
              </Stack>
              <Stack alignItems="center">
              <Img mb={2} width="250px" height="100%" src={notebook2} ></Img>
              </Stack>

            </Stack>
          </Stack>

          </Stack>


          
          <Stack alignItems="center" paddingBottom={30}>

          <Stack alignSelf="start" marginLeft={79}>
            <Text color="blackAlpha.600" fontSize={28}>Categorías populares</Text>
          </Stack>

            <Stack direction="row" backgroundColor="white" width={1120} height={350} justifyContent="center" alignItems="center" padding={2}>

              <Stack backgroundColor="white" width={0.16} height="100%" alignItems="center" justifyContent="center" >
                <Stack backgroundColor="white" width="100%" height="50%" alignItems="center" >
                  <Icon color="blue.600" width={50} height={50} as={AiOutlineCar}></Icon>
                <Text fontSize={14}>Autos,Motos y Otros</Text>
                </Stack>
                <Icon color="blue.600" width={50} height={50} as={GiSmartphone}></Icon>
                <Text fontSize={14}>Celulares y Teléfonos</Text>
              </Stack>
              
              <Stack backgroundColor="white" width={0.16} height="100%" alignItems="center" justifyContent="center" >
                <Stack backgroundColor="white" width="100%" height="50%" alignItems="center"  >
                  <Icon color="blue.600" width={50} height={50} as={CgScreen}></Icon>
                <Text fontSize={14}>Computación</Text>
                </Stack>
                <Icon color="blue.600" width={50} height={50} as={GiOldMicrophone}></Icon>
                <Text  fontSize={14}>Audio y Video</Text>
              </Stack>

              <Stack backgroundColor="white" width={0.16} height="100%" alignItems="center" justifyContent="center" >
                <Stack backgroundColor="white" width="100%" height="50%" alignItems="center" >
                  <Icon color="blue.600" width={50} height={50} as={CgSmartHomeRefrigerator}></Icon>
                <Text fontSize={14}>Electrodomésticos</Text>
                </Stack>
                <Icon color="blue.600" width={50} height={50} as={IoShirtOutline}></Icon>
                <Text fontSize={14}>Ropa y Accesorios</Text>
              </Stack>

              <Stack backgroundColor="white" width={0.16} height="100%" alignItems="center" justifyContent="center" >
                <Stack backgroundColor="white" width="100%" height="50%" alignItems="center" >
                  <Icon color="blue.600" width={50} height={50} as={GiSoccerBall}></Icon>
                <Text fontSize={14}>Deportes</Text>
                </Stack>
                <Icon color="blue.600" width={50} height={50} as={MdChair}></Icon>
                <Text fontSize={14}>Hogar y Jardín</Text>
              </Stack>

              <Stack backgroundColor="white" width={0.16} height="100%" alignItems="center" justifyContent="center" >
                <Stack backgroundColor="white" width="100%" height="50%" alignItems="center" >
                  <Icon color="blue.600" width={50} height={50} as={GiModernCity}></Icon>
                <Text fontSize={14}>Inmuebles</Text>
                </Stack>
                <Icon color="blue.600" width={50} height={50} as={GiSteeringWheel}></Icon>
                <Text fontSize={14}>Accesorios vehiculares</Text>
              </Stack>

              <Stack backgroundColor="white" width={0.16} height="100%" alignItems="center" justifyContent="center" >
                <Stack backgroundColor="white" width="100%" height="50%" alignItems="center" >
                  <Icon color="blue.600" width={50} height={50} as={GiLipstick}></Icon>
                <Text fontSize={14}>Belleza</Text>
                </Stack>
                <Icon color="blue.600" width={50} height={50} as={BiJoystick}></Icon>
                <Text fontSize={14}>Consolas</Text>
              </Stack>

              <Stack backgroundColor="white" width={0.16} height="100%" alignItems="center" justifyContent="center" >
                <Stack backgroundColor="white" width="100%" height="50%" alignItems="center" >
                  <Icon color="blue.600" width={50} height={50} as={RiBearSmileLine}></Icon>
                <Text fontSize={14}>Juegos y juguetes</Text>
                </Stack>
                <Icon  color="blue.600" width={50} height={50} as={BiCookie}></Icon>
                <Text fontSize={14}>Alimentos y Bebidas</Text>
              </Stack> 
            </Stack>
          </Stack>

          <Stack alignItems="center" margin={10}  >
            
            <Text fontSize={25} color="blackAlpha.700">Contacto</Text>

            <Stack borderRadius={100} direction="row" backgroundColor="white" width={900} height={140} alignItems="center" justifyContent="space-around">
              <Stack alignItems="center">
            <Icon _hover={{color: "blue.600"}}  width={45} height={45} as={AiFillGithub}></Icon>
            <Text  >Git Hub</Text>
            </Stack>

            <Stack alignItems="center">
            <Icon _hover={{color: "blue.600"}} width={45} height={45} as={AiFillLinkedin}></Icon>
            <Text >Linkedin</Text>
            </Stack>

            <Stack alignItems="center">
            <Icon _hover={{color: "blue.600"}}  width={45} height={45} as={FaPlay}></Icon>
            <Text  >Portfolio</Text>
            </Stack>

            
            
            </Stack>

          </Stack>


        </Container>
        
      </Stack>
    
  )
}

export default App
