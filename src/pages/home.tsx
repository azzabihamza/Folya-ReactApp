import React from "react";

import { Container, Modal, Button, Input, Card } from "components";
import  useModal  from "hooks/useModal";


const Home: React.FC = () => {
  const { isOpen, toggle } = useModal();
  return (
    <Container>
      <Button onClick={toggle} className="bg-primary-light " >toggle</Button>
      <Modal  title="test" isOpen={isOpen} toggle={toggle} />
      <Input label="test" placeholder="test" value="test"  />
      <Card className="block max-w-sm">test card </Card>
      
    </Container>
  );
};

export default Home;
