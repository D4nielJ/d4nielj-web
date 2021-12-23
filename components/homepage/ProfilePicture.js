import React from 'react';
import { AspectRatio, Box } from '@chakra-ui/react';
import { Image, MotionBox } from '../utils';
import photo from '../../public/images/photo.jpg';
import photoBG from '../../public/images/photo-bg.jpg';

const ProfilePicture = ({ ...props }) => {
  return (
    <Box position='relative' {...props}>
      <MotionBox
        position='absolute'
        top={-3}
        left={-3}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        <AspectRatio w={[24, 24, 32]} ratio={1}>
          <Box>
            <Image
              src={photoBG}
              quality='100'
              alt='Portrait of Daniel J.'
              rounded='full'
            />
          </Box>
        </AspectRatio>
      </MotionBox>
      <AspectRatio w={[48, 48, 60]} ratio={1}>
        <Box>
          <Image
            src={photo}
            quality='100'
            alt='Portrait of Daniel J.'
            rounded='full'
          />
        </Box>
      </AspectRatio>
    </Box>
  );
};

export default ProfilePicture;
