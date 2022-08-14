import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Container from '../components/container';
const g = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <div className="flex items-center justify-center">
          <video
            src="https://cdn.sanity.io/files/3661qoqn/production/e1e6afe4f3d7d10a76421f0bfce8d02dca3272f5.mp4"
            width="50%"
            height="50%"
            autoPlay
            loop
          />
        </div>
      </Container>
    </Layout>
  );
};

export default g;
