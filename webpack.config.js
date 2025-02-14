const path = require('path');

module.exports = {
    devServer: {
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            // Aquí puedes agregar middlewares personalizados si los necesitas
            
            return middlewares;
        },
    },
}; 