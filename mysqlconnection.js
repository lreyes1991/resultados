var mysql   = require('mysql2');
var mysql_config = {
    host     : 'localhost',
    user     : 'mli',
    password : 'password',
    database : 'SGI_ROCHEGT'
  };

function handleDisconnection() {
    var    connection = mysql.createConnection(mysql_config);
     
      connection.connect(function(err) {
          if(err) {
              setTimeout('handleDisconnection()', 2000);
          }
      });
    
      connection.on('error', function(err) {
          logger.error('db error', err);
          if(err.code === 'PROTOCOL_CONNECTION_LOST') {
              logger.error('db error ejecutar reconexión:'+err.message);
              handleDisconnection();
          } else {
              throw err;
          }
      });
     exports.connection = connection;
    }
    exports.handleDisconnection = handleDisconnection;