import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface ISidebarDrawerProviderProps {
  children: ReactNode;
}

type ISidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as ISidebarDrawerContextData);

function SidebarDrawerProvider({ children }: ISidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

function useSidebarDrawer() {
  return useContext(SidebarDrawerContext);
}

export { SidebarDrawerProvider, useSidebarDrawer };
