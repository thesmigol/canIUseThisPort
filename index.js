module.exports = function VerificarPorta(string){
  function VP(string){
    const net = require('net');
    const server = net.createServer();
    server.once('error', function(err) { if (err.code === 'EADDRINUSE') {} } ) 
    server.once('listening', function() { server.close() } ) 
    server.listen(string);
    let ouvindo = server.listening
    return ouvindo
    }
  do{
    string++
    var sabotagem = VP(string)
  }while(sabotagem !== true)
  return string
}

