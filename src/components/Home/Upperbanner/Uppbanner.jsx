import Right from './UBright';
import Left from './UBleft';
import { Container } from '@mui/material';

const Uppbanner = () => {
    return (
        <div className="uppbanner">
            <Container className="wrapper">
                <Right />
                <Left />
            </Container>
        </div>
    );
};

export default Uppbanner;
