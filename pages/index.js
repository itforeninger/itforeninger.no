import React from 'react';
import styled from 'styled-components';
import RowWrapper from '../components/RowWrapper';


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
`


const Home = () => (
  <Grid>
    <RowWrapper start={2} end={5} >
      <h2>FIF er</h2>
      <p>Et forum hvor de største studentforeningene for IT-studenter i Norge er representert. Formålet vårt er å samle og forbedre foreningene, og tilbudene de gir til studentene. Dette gjør vi gjennom kontinuerlig kontakt og faste møter hvor erfaringsutveksling står i fokus</p>
    </RowWrapper>
    <RowWrapper start={5} end={8} >
      <h2>Bli med i FIF</h2>
      <p>Er din studentforening interessert i å bli med i FIF? Vi vil gjerne høre fra deg! Ta kontakt med oss</p>
    </RowWrapper>
    <RowWrapper start={1} end={12} backgroundColor="beige">
      Test wrapper 2
    </RowWrapper>
  </Grid>
)

export default Home
