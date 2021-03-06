import { Box, Text, Divider, AspectRatio } from '@chakra-ui/react';
import { Image } from '../utils';
import React from 'react';

const About = () => {
  return (
    <Box as='section' id='about'>
      <Text
        fontWeight='bold'
        fontSize={{ base: '3xl', md: '4xl' }}
        letterSpacing='tighter'
        lineHeight='1'
        textAlign={['center', 'center', 'left']}
        mb={2}
        zIndex={2}
      >
        About me.
      </Text>
      <Divider opacity='1' mb={12} />
      <AspectRatio w='full' ratio={{ base: 3 / 4, md: 21 / 6 }} mb={6}>
        <Box w='full' h='full'>
          <Image
            src='/images/about/about_1'
            ext='png'
            alt='Popular neighborhood in Medellín'
            quality='100'
            layout='fill'
            objectFit='cover'
          />
        </Box>
      </AspectRatio>
      <Text
        fontWeight='light'
        maxW='64ch'
        fontSize={{ base: 'lg', md: '2xl' }}
        mb={28}
      >
        I’m a software developer from Medellín, Colombia! I can help you build a
        product, feature or website. Look through some of my work and
        experience! If you like what you see and have a project you need coded,
        don’t hesitate to contact me.
      </Text>
    </Box>
  );
};

export default About;
