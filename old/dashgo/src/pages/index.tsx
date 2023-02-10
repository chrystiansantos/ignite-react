import { Input } from '@/components/Form';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigátorio'),
  password: Yup.string().min(6, 'Senha inválida'),
});

export default function SignIn() {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = data => {
    push('/dashboard');
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            label="E-mail"
            placeholder="E-mail"
            error={errors?.email}
            {...register('email')}
          />
          <Input
            label="Senha"
            placeholder="Senha"
            error={errors?.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
