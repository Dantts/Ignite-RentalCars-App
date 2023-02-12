import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';
import { About, Brand, CarImage, Container, Details, Name, Period, Price, Rent, Type } from './styles';

interface CarDataProps {
  brand: string;
  name: string;
  thumbnail: string;
  rent: {
    period: string;
    price: number;
  }
}

interface CarProps {
  data: CarDataProps
}

export const Car = ({ data }: CarProps) => {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>R$ {data.rent.price}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{ uri: data.thumbnail }}
        resizeMode='contain'
      />
    </Container>
  )
}