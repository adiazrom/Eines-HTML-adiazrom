// imagemin.mjs
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

const run = async () => {
  try {
    const files = await imagemin(
      ['../img/*.jpg', '../img/**/*.jpg'], // Ajusta la ruta segons on estàs
      {
        destination: '../img-opt',
        plugins: [
          imageminMozjpeg({ quality: 75 , progressive: true})
        ]
      }
    );
    console.log('✅ Optimized files:', files.map(f => f.destinationPath));
  } catch (error) {
    console.error('❌ Error during image optimization:', error);
  }
};

run();
