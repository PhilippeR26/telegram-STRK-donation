"use client";

import { Button } from "@/components/ui/button";
import { Icon, Text, VStack } from "@chakra-ui/react"
import { HandHelping } from "lucide-react"

export default function Donate() {

    return (
        <VStack>
            <Text h={"250px"}>
            </Text>
            <Button
                colorPalette={"blue"}
                variant={"surface"}
                color={"black"}
                px={4}
                mb={5}
                fontWeight={"bold"}
            >
                <HandHelping />
                Donate 1 testnet STRK
            </Button>
            <Button
                colorPalette={"blue"}
                variant={"surface"}
                color={"black"}
                px={4}
                mb={5}
                fontWeight={"bold"}
            >
                <HandHelping />
                Donate 2 testnet STRK
            </Button>
            <Button
                colorPalette={"blue"}
                variant={"surface"}
                color={"black"}
                px={4}
                mb={5}
                fontWeight={"bold"}
            >
                <HandHelping />
                Donate 3 testnet STRK
            </Button>
        </VStack>
    )
}
