/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mp4$/,
            use: {
                loader: "file-loader",
                options: {
                    publicPath: "/_next/static/videos/", // Where the files will be served from
                    outputPath: "static/videos/", // Where the files will be output in the build folder
                    name: "[name].[hash].[ext]", // Naming convention of the output files
                },
            },
        });
        return config;
    },
};

module.exports = nextConfig;
