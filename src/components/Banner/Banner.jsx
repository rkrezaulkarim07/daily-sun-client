import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://i.ibb.co/fxJTK2R/madeleine-mccann-newspaper-headlines-britain-sep-2007-shutterstock-editorial-693389d.jpg'}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: 'black',
            lineHeight:  1,
            background: '#FFFFFF'
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.image}>
                <Typography>Daily Sun</Typography>
                <Typography>True & Impartial</Typography>
            </Box>
        </>
    )
}

export default Banner;