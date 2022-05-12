import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listcomentariosDesteteAsyn} from '../../redux/actions/actionComentariosDestete';
import '../../styles/carComentColico.css'


export default function ListarComentariosDestete() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listcomentariosDesteteAsyn())
    }, [])

    const { comentariosDestete } = useSelector(store => store.comentariosDestete);
    console.log(comentariosDestete)



    return (
        <div className="comentDestete">
            {
                comentariosDestete.map(c => (
                    <Card sx={{ width: '90%',marginBottom: '3% 0' }} className="cardsDesteteComent">
                        <CardHeader
                            avatar={
                                <Avatar src="/broken-image.jpg" />
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
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
