
import {useColorMode, Box, IconButton} from '@chakra-ui/react'
import {SunIcon,MoonIcon} from '@chakra-ui/icons'
export default function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box textAlign="right" p={0} mr={0}>
        <IconButton
          icon={colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Box>
    );
  }