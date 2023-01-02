import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { TaskView } from './components/TaskView';

// 2. Extend the theme to include custom colors, fonts, etc
const customeTheme = extendTheme({
    colors: {},
    fonts: {},
    fontSizes: {},
});

const theme = extendTheme({ customeTheme });

function App() {
    return (
        <ChakraProvider theme={theme}>
            <TaskView />
        </ChakraProvider>
    );
}

export default App;
