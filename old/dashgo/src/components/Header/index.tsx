import { useSidebarDrawer } from '@/context/SidebarDrawerContext';
import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          fontSize="24"
          variant="unstyled"
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
        />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
