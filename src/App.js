import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import Fonts from './utils/fonts';
import theme from './utils/theme';
import './styles.css';
import { Header } from './components/Header';
import { BurgerMenu } from './components/BurgerMenu';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Reviews } from './components/Reviews';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

function App() {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const cls = visible ? 'visible' : 'hidden';
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container
        maxW={[360, 768, 1280]}
        py={'32px'}
        px={'20px'}
        border="1px"
        borderColor="gray.200"
      >
        <Header className={cls} sx={{ className: { cls } }}>
          <BurgerMenu />
        </Header>
        <Hero />
        <AboutUs />
        <Reviews />
        <ContactUs />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
