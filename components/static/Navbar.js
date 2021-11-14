import React from "react";
import PropTypes from "prop-types";

import { Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex bg="brand.700" h="4em" w="full" color="brand.50">
      Joystick
    </Flex>
  );
};

Navbar.propTypes = {};

export default Navbar;
