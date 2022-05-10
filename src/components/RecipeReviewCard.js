import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listcomentariosAsyn } from '../redux/actions/actionComentarios';


export default function RecipeReviewCard() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listcomentariosAsyn())
    }, [])

    const { comentarios } = useSelector(store => store.comentarios);
    // console.log(comentarios)



    return (
        <div className="">
            {
                comentarios.map(c => (
                    <Card sx={{ maxWidth: '90%', margin: '0 auto', marginTop: '4%' }}>
                        <CardHeader
                            avatar={
                                <Avatar src="/broken-image.jpg" />
                            }
                            title={c.nombre}
                            subheader={c.fecha}
                        />

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {c.comentario}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <ThumbUpIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ThumbDownAltIcon />
                            </IconButton>

                        </CardActions>
                    </Card>
                ))
            }
        </div>
    );
}
