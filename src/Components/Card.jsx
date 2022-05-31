import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

const Card = ({ data }) => {
  return (
    <>
      <Box className={styles.card} p="5">
        <Box><Text className={styles.visa}>VISA</Text></Box>
        <Box><Image src="https://cdn-icons-png.flaticon.com/512/6404/6404078.png" className={styles.icon} /></Box>
        <Text className={styles.name}>{data.cardHolderName}</Text>
        <Text className={styles.cardno}>{data.cardNumber}</Text>
        <Flex gap={5} className={styles.flex} p="2">
          <Box>
            <Text>Expiry Month</Text>
            <Text>{data.expiryMonth}</Text>
          </Box>
          <Box>
            <Text>Expiry Year</Text>
            <Text>{data.expiryYear}</Text>
          </Box>
          <Box>
            <Text>CVV</Text>
            <Text>{data.cvv}</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Card;
