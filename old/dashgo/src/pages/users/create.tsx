import { Input } from '@/components/Form';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigátorio'),
  name: Yup.string().required('Nome obrigátorio'),
  password: Yup.string().min(6, 'No minimo 6 caracters'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'As senhas precisam ser iguais',
  ),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = data => {
    console.log(data);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={6}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                label="Nome completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                label="E-mail"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="password"
                label="Senha"
                {...register('password')}
                error={errors.password}
              />
              <Input
                type="password"
                label="Confirmação da senha"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
