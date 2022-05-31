import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ data }) => {
  return (
      <>
        <Box>
            <Text>{data.cardHolderName}</Text>
            <Text>{data.cardNumber}</Text>
            <Flex gap={2}>
                <Text>{data.expiryMonth}</Text>
                <Text>{data.expiryYear}</Text>
                <Text>{data.cvv}</Text>
            </Flex>
        </Box>
      </>
  )
};

export default Card;
