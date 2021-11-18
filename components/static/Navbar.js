import React from 'react';

import { Text, Flex, Link as ChakraLink, IconButton } from '@chakra-ui/react';
import { Logo } from './Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CloseIcon } from '@chakra-ui/icons';

const Navbar = ({ isMobile, isNavbarOpen, setIsNavbarOpen, ...rest }) => {
  return (
    <Flex
      position="fixed"
      overflow="auto"
      alignItems="center"
      justifyContent="flex-start"
      h="100vh"
      bg={['gray.900', 'gray.900', 'rgba(25, 47, 148, 0.2)']}
      w={['100%', '100%', '18.75rem']}
      ml={isMobile && isNavbarOpen ? '0' : ['-100%', '-100%', '0']}
      transition="all 0.3s ease-out"
      color="brand.50"
      py="10"
      flexDir="column"
      {...rest}
    >
      {isMobile && isNavbarOpen && (
        <IconButton
          colorScheme="default"
          aria-label="Close"
          icon={<CloseIcon />}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          position="absolute"
          top="8"
          right="8"
        />
      )}
      {/* Logo */}
      <Link href={'/'} passHref>
        <ChakraLink
          d="flex"
          position="relative"
          justifyContent="center"
          w=""
          _focus={{}}
        >
          <Logo w="40" />
        </ChakraLink>
      </Link>

      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        justifyContent="space-between"
        mt="16"
      >
        {/* Menu */}
        <Flex
          alignItems="flex-start"
          justifyContent="flex-start"
          w="full"
          flexDir="column"
        >
          <Flex w="100%" flexDir="column" justifyContent="center">
            <NavbarLink
              py="5"
              px="24"
              to="/"
              withHover
              fontFamily="Oswald"
              justifyContent={['center', 'center', 'flex-start']}
            >
              ACCUEIL
            </NavbarLink>
            <NavbarLink
              py="5"
              px="24"
              to="/evenements"
              withHover
              fontFamily="Oswald"
              justifyContent={['center', 'center', 'flex-start']}
            >
              ÉVÉNEMENTS
            </NavbarLink>
            <NavbarLink
              py="5"
              px="24"
              to="/equipe"
              withHover
              fontFamily="Oswald"
              justifyContent={['center', 'center', 'flex-start']}
            >
              ÉQUIPE
            </NavbarLink>
            <NavbarLink
              py="5"
              px="24"
              to="/calendrier"
              withHover
              fontFamily="Oswald"
              justifyContent={['center', 'center', 'flex-start']}
            >
              CALENDRIER
            </NavbarLink>
            <NavbarLink
              py="5"
              px="24"
              to="/sponsors"
              withHover
              fontFamily="Oswald"
              justifyContent={['center', 'center', 'flex-start']}
            >
              SPONSORS
            </NavbarLink>
          </Flex>
        </Flex>

        {/* Contact */}
        <Flex
          alignItems="flex-start"
          justifyContent="flex-start"
          w="full"
          flexDir="column"
          mt="16"
        >
          <Flex w="100%" flexDir="column" justifyContent="center">
            <NavbarLink
              py="5"
              px="24"
              to="/contact"
              withHover
              fontFamily="Oswald"
              justifyContent={['center', 'center', 'flex-start']}
            >
              CONTACT
            </NavbarLink>
            <Flex
              py="5"
              px="24"
              fontFamily="Oswald"
              justifyContent={['center', 'center', 'flex-start']}
              color="brand.300"
              opacity="0.6"
            >
              ©2021 JOYSTICK
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const NavbarLink = ({ withHover, to, children, ...rest }) => {
  const router = useRouter();
  const isActive = router.asPath === to;
  return (
    <Link href={to} passHref>
      <ChakraLink
        d="flex"
        position="relative"
        justifyContent="center"
        w="full"
        color={isActive ? 'white' : 'gray.500'}
        _hover={{
          background: withHover ? 'rgba(0, 0, 0, 0.2)' : '',
          color: 'gray.200',
        }}
        _focus={{}}
        _before={
          isActive
            ? {
                content: '""',
                width: '4px',
                background: 'white',
                borderRadius: '0 10px 10px 0',
                height: '100%',
                position: 'absolute',
                transform: 'scaleY(0.7)',
                left: 0,
                top: 0,
              }
            : {}
        }
        {...rest}
      >
        <Text>{children}</Text>
      </ChakraLink>
    </Link>
  );
};

export default Navbar;
