const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  try {
    const files = await imagemin(
      ['src/img/*.jpg', 'src/img/**/*.jpg'], // Adjust paths as needed
      {
        destination: 'src/img-opt',
        plugins: [
          imageminMozjpeg({ quality: 50 })
        ]
      }
    );
    console.log('✅ Optimized files:', files.map(f => f.destinationPath));
  } catch (error) {
    console.error('❌ Error during image optimization:', error);
  }
})();
