import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

const files = await imagemin(
  ['src/img/*.jpg'],
  {
    destination: 'src/img-opt',
    plugins: [
      imageminMozjpeg({ quality: 50 })
    ]
  }
);

console.log('✅ Optimized files:', files.map(f => f.destinationPath));
