export default {
  rootDir: 'dist',
  port: 3000,
  open: true,
  watch: true,
  static: {
    directory: 'dist',
    publicPath: '/'
  },
  cors: true,
  files: ['dist/**/*'],
  liveReload: true
}; 