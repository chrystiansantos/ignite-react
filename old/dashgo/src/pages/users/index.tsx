import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="users/create" passHref>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Chrystian Santos</Text>
                    <Text fontSize="sm" color="gray.300">
                      chrystian_santos_silva@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Fevereiro, 2021</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Chrystian Santos</Text>
                    <Text fontSize="sm" color="gray.300">
                      chrystian_santos_silva@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Fevereiro, 2021</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Chrystian Santos</Text>
                    <Text fontSize="sm" color="gray.300">
                      chrystian_santos_silva@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Fevereiro, 2021</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Chrystian Santos</Text>
                    <Text fontSize="sm" color="gray.300">
                      chrystian_santos_silva@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Fevereiro, 2021</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Chrystian Santos</Text>
                    <Text fontSize="sm" color="gray.300">
                      chrystian_santos_silva@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Fevereiro, 2021</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
