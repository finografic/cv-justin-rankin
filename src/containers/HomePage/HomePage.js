import React from 'react';
import { ButtonLink } from 'components/Button';

const HomePage = (props) => (
  <section>
    <h3>HomePage</h3>
    <p>This is the homepage.</p>
    <ButtonLink to="dashboard" label="View DASHBOARD" />
  </section>
);

export default HomePage;
