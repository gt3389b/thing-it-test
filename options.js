module.exports = {
    port: 3001,
    protocol: "http",
    nodeConfigurationsDirectory: process.cwd() + "/configurations",
    dataDirectory: "./data",
    usersDirectory: "./users",
    simulated: true,
    authentication: "none",//"user",
    logLevel: "debug",
    proxy: "local",
    uuid: "30f38660-becc-11e5-a877-73fa028e4e6d"
};
