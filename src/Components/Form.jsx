import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Form = ({onChange}) => {

  return (
    <>
      <Heading>Payment Details</Heading>
      <FormControl>
        <Box>
          <FormLabel>CARDHOLDER NAME</FormLabel>
          <Input type="text" name="cardHolderName" onChange={onChange} />
        </Box>
        <Box>
          <FormLabel>CARD NUMBER</FormLabel>
          <Input type="text" name="cardNumber" onChange={onChange} />
        </Box>
        <Flex>
          <Box>
            <FormLabel>EXPIRY MONTH</FormLabel>
            <Input type="text" name="expiryMonth" onChange={onChange} />
          </Box>
          <Box>
            <FormLabel>EXPIRY YEAR</FormLabel>
            <Input type="text" name="expiryYear" onChange={onChange} />
          </Box>
          <Box>
            <FormLabel>CVV</FormLabel>
            <Input type="text" name="cvv" onChange={onChange} />
          </Box>
        </Flex>
        <Box>
          <Text>
            Payment amount: <Tag>Rs. 12 300</Tag>
          </Text>
        </Box>
        <Button colorScheme='cyan'>Pay Now</Button>
      </FormControl>
    </>
  );
};

export default Form;
