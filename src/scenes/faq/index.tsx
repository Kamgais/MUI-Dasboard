import {Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import Header from '../../components/Header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme';


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
    
    return (
        <Box m="20px">
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tenetur, reprehenderit est non pariatur aliquid perferendis 
                        accusamus quia maxime maiores ea doloremque nam perspiciatis vitae rerum 
                        magni inventore nisi sequi optio sapiente eum unde, illo architecto quasi adipisci. 
                        Vitae nam aliquid beatae officiis 
                        necessitatibus eligendi nisi, dolore veniam optio eius commodi.
                         Ullam unde facilis natus consequuntur officiis quasi error! Voluptates, facilis.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Another important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tenetur, reprehenderit est non pariatur aliquid perferendis 
                        accusamus quia maxime maiores ea doloremque nam perspiciatis vitae rerum 
                        magni inventore nisi sequi optio sapiente eum unde, illo architecto quasi adipisci. 
                        Vitae nam aliquid beatae officiis 
                        necessitatibus eligendi nisi, dolore veniam optio eius commodi.
                         Ullam unde facilis natus consequuntur officiis quasi error! Voluptates, facilis.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Your Favorite question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tenetur, reprehenderit est non pariatur aliquid perferendis 
                        accusamus quia maxime maiores ea doloremque nam perspiciatis vitae rerum 
                        magni inventore nisi sequi optio sapiente eum unde, illo architecto quasi adipisci. 
                        Vitae nam aliquid beatae officiis 
                        necessitatibus eligendi nisi, dolore veniam optio eius commodi.
                         Ullam unde facilis natus consequuntur officiis quasi error! Voluptates, facilis.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                       Most asked question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tenetur, reprehenderit est non pariatur aliquid perferendis 
                        accusamus quia maxime maiores ea doloremque nam perspiciatis vitae rerum 
                        magni inventore nisi sequi optio sapiente eum unde, illo architecto quasi adipisci. 
                        Vitae nam aliquid beatae officiis 
                        necessitatibus eligendi nisi, dolore veniam optio eius commodi.
                         Ullam unde facilis natus consequuntur officiis quasi error! Voluptates, facilis.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tenetur, reprehenderit est non pariatur aliquid perferendis 
                        accusamus quia maxime maiores ea doloremque nam perspiciatis vitae rerum 
                        magni inventore nisi sequi optio sapiente eum unde, illo architecto quasi adipisci. 
                        Vitae nam aliquid beatae officiis 
                        necessitatibus eligendi nisi, dolore veniam optio eius commodi.
                         Ullam unde facilis natus consequuntur officiis quasi error! Voluptates, facilis.
                    </Typography>
                </AccordionDetails>
            </Accordion>



        </Box>
    )
}

export default FAQ;