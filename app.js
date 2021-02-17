const localServer = require('./localServer');
const config = require('./config/environment');

const localPort = config.appPort;
const localFolder = './public/testapp';
const localPath = localFolder + '/index.html';
const localApp = localServer.init(localFolder, localPath, localPort);

localApp.listen(localPort, () => {
	console.log('Server running at: ' + localPort);
});