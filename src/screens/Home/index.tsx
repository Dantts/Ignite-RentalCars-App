import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Container, Header, HeaderContent, TotalCars } from './styles';

const carData = {
  brand: "Audi",
  name: "RS 5 Coupé",
  thumbnail: 'https://media.ed.edmunds-media.com/audi/rs-5/2018/oem/2018_audi_rs-5_coupe_quattro_fq_oem_1_1600.jpg',
  rent: {
    period: "Ao dia",
    price: 120
  }
}

export const Home = () => {
  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData} />
    </Container>
  )
}