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
import { listcomentariosColicosAsyn} from '../../redux/actions/actionComentariosColicos';



import '../../styles/carComentColico.css'


export default function ListarComentariosColicos() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listcomentariosColicosAsyn())
    }, [])

    const { comentariosColicos } = useSelector(store => store.comentariosColicos);
    console.log(comentariosColicos)



    return (
        <div className="comentColicos">
            {
                comentariosColicos.map(c => (
                    <Card className="cardsColicoComent" style={{width:'90%'}}>
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
                                <ThumbUpIcon/>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ThumbDownAltIcon/>
                            </IconButton>
                        </CardActions>
                    </Card>
                ))
            }
        </div>
    );
}
