import Container from '@mui/material/Container';
import Gird from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer(){
    return <footer>
        <Box 
        px={{ xs: 3, sm: 10}}
        py={{ xs: 5, sm: 10}}
        bgcolor={"gray"} color={"White"}>
            <Container maxWidth='lg'>
                <Gird container spacing={5}>
                    <Gird item xs={12} sm={4}>
                        <Box borderBottom={1}>tap1</Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Privacy
                            </Link>
                        </Box>
                    </Gird>
                    <Gird item xs={12} sm={4}>
                        <Box borderBottom={1}>tap2</Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Privacy
                            </Link>
                        </Box>
                    </Gird>
                    <Gird item xs={12} sm={4}>
                        <Box borderBottom={1}>tap3</Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color={"inherit"}>
                                Privacy
                            </Link>
                        </Box>
                    </Gird>
                </Gird>
                <Box textAlign={"center"} pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                    KOSTA 253 {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    </footer>;
}