import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: IProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Chrystian Santos</Text>
          <Text color="gray.300" fontSize="small">
            chrystian_santos_silva@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Chrystian Santos"
        src="https://github.com/chrystiansantos.png"
      />
    </Flex>
  );
}
