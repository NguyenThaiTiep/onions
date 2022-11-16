import { Box, Button, Flex } from "@onions/core";
import React from "react";

const ButtonPage = () => {
  return (
    <Box margin="s32">
      <Flex direction="column" gap="s16">
        <Flex gap="s16">
          <Button variant="container">Container</Button>
          <Button variant="outlined">Outlined</Button>
        </Flex>
        <Flex gap="s16" align="flex-end">
          <Button size="xs">Size Xs</Button>
          <Button size="sm">Size Sm</Button>
          <Button size="md">Size Md</Button>
          <Button size="lg">Size Lg</Button>
          <Button size="xl">Size Xl</Button>
        </Flex>

        <Flex gap="s16" width={500}>
          <Button block>Block</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ButtonPage;
