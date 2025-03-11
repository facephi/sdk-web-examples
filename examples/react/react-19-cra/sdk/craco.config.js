module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // This rule modifies webpack's behaviour for ESM modules specifically for FacePhi packages
        webpackConfig.module.rules.push({
        // Applies to JavaScript files and ESM modules
          test: /\.m?js$/,
          // Only affects FacePhi packages in node_modules
          include: /node_modules\/@facephi/,
          // Indicates these files are JavaScript modules
          type: 'javascript/auto', 
          // Disables the requirement for imports in ESM modules to specify the full extension
          resolve: {
            fullySpecified: false
          }
        });
        
        // Ensures webpack recognises these file types when imported without extension
        webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'];
        
        return webpackConfig;
      }
    }
  };