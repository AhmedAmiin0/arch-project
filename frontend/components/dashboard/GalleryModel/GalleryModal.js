import { Button, Grid, Modal, Stack, Typography, styled } from "@mui/material"
import { Box } from "@mui/system"
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useReducer, useRef, useState } from "react";
import { errorAlertAction, notificationContext, successAlertAction } from "../../../context/NotificationsContext";
import CloseIcon from '@mui/icons-material/Close';
import axios from "../../../config/axios";


const ModelBoxStyles = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  boxShadow: 24,
  color: theme.palette.text.primary,
  padding: '3rem',
  height: 'auto',
  width: '100%',
  borderRadius: 8,
  [theme.breakpoints.up('md')]: {
    width: 800,
  },
  

}))
export const GalleryModal = ({
  initial = [],
  name,
  id = ''
}) => {
  const [notify, dispatch] = useContext(notificationContext);
  const galleryRef = useRef(null);

  const [galleryModal, setGalleryModal] = useState(false);
  const galleryReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return action.payload;
      case 'REMOVE':
        return state.filter(image => image.id !== action.payload);
      default:
        return state;
    }
  }
  const handleImageDelete = async (id) => {
    const res = await axios.post('detach_image', {
      media_id: [id]
    })
    if (res.status === 200) {
      setGallery({ type: 'REMOVE', payload: id });
      dispatch(successAlertAction('Image deleted successfully'))
      return;
    }
    dispatch(errorAlertAction('Error deleting image'))
  }
  const [gallery, setGallery] = useReducer(galleryReducer, initial);
  const handleGalleryChange = async (e) => {
    const formData = new FormData(galleryRef.current);
    formData.append(`${name}_images[]`, e.target.files);
    try {
      const res = await axios.post(`attach_image/${name}/${id}`, formData)
      setGallery({ type: 'ADD', payload: res.data.images });
      dispatch(successAlertAction('Image uploaded successfully'))
    } catch (e) {
      console.log(e);
      dispatch(errorAlertAction('Error uploading image'))
    }
  }
  return <>
    <Stack flex={2}>
      <Typography variant={'h6'} my={2}>
        Gallery
      </Typography>
      <Typography
        variant={'subtitle1'}
        fontWeight={'lighter'}
        my={2}
      >
        Images Appears in the Services Gallery
      </Typography>
    </Stack>
    <Box flex={3}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Button variant={'contained'} onClick={() => setGalleryModal(true)}>Show Gallery</Button>
      <Modal
        open={galleryModal}
        onClose={() => setGalleryModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModelBoxStyles >
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Gallery
            </Typography>
            <Button variant="text"
              onClick={() => setGalleryModal(false)}
              color={'error'}>
              <CloseIcon />
            </Button>
          </Stack>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} my={4}
            alignItems={'center'}
            p={5}
            sx={{
              position: 'relative',
              border: '1px dotted rgb(45, 55, 72)',
              borderRadius: '4px',
              '&:after': {
                content: '"Upload Images"',
                display: 'block',
                backgroundColor: 'rgb(80, 72, 229)',
                p: 2,
                borderRadius: '4px'
              }
            }}>
            <form onSubmit={(e) => e.preventDefault()} ref={galleryRef}>
              <input id="contained-button-file" type="file"
                multiple
                name={'service_images[]'}
                style={{
                  opacity: 0,
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  display: 'block',
                  cursor: 'pointer',
                  top: 0,
                  left: 0
                }}
                onChange={(e) => handleGalleryChange(e)}
              />
            </form>
          </Box>
          <Grid container spacing={2}
            sx={{
              maxHeight: '480px', overflowY: 'auto', '&::-webkit-scrollbar': { width: '0em' },
              '@media (max-width: 768px)': {
                maxHeight: '350px',
              }
            }}>
            {gallery && gallery.map((image, index) =>
              <Grid item xs={12} sm={4} md={4}
                key={index}
                position={'relative'}
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  maxHeight: '200px',
                  '&:hover': {
                    'button': {
                      opacity: 1,
                    },
                    'img': {
                      opacity: 0.8,
                    }
                  }
                }}>
                <img src={image.src} alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    flex: 4
                  }}
                />
                <Button variant={'text'} color={'error'}
                  border={'none'}
                  sx={{
                    zIndex: 156,
                    position: 'absolute',
                    top: '10px',
                    right: '1px',
                    minWidth: '20px',
                    transform: 'translate(10%, 10%)',
                    opacity: 0,
                    transition: 'opacity .2s ease-in-out',
                  }}
                  onClick={() => handleImageDelete(image.id)}
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            )}
          </Grid>
        </ModelBoxStyles>
      </Modal>
    </Box>
  </>
}