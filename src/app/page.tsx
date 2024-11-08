"use server";

import { Image } from "@chakra-ui/react"
import NextImage from 'next/image'
import styles from './page.module.css'
import eBeggarImg from "./Images/eBeggar.jpg"
import { Box, Center } from '@chakra-ui/react';
import Donate from './components/Donate';

export default async function Page() {
  return (
    <div className={styles.backColor}>
      <Image asChild>
        <NextImage className={styles.bgKeepRatio}
          alt="SEB foundation"
          src={eBeggarImg}
          width={480}
          height={300}
        ></NextImage>
      </Image>

      <Center>
        <Box
          marginTop={2}
          marginBottom={7}
          w="75%"
          borderRadius={25}
          bg='darkslateblue'
          opacity="80%"
          p="2"
          textAlign={'center'}
          fontSize="36"
          fontWeight="extrabold"
          color="aliceblue"
        >
          Donate STRK to the<br />
          e-beggars foundation
        </Box>
      </Center>
      <Center>
        <Donate></Donate>
      </Center>
    </div>
  )
}

