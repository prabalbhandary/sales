import { useColorMode, Switch, Flex } from '@chakra-ui/react';

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="flex-end" p={4}>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
    </Flex>
  );
};

export default DarkModeToggle;
