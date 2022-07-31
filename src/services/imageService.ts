import { media } from '../types';
import instance from '../axios';

const getImage = (index: number) => instance.get<media>('/media/' + index);

const ImageService = {
    getImage
};

export default ImageService;