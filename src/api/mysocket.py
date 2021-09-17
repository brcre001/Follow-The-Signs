from flask_socketio import SocketIO, send, emit

def initialize_socket(app):
    app.config['SECRET_KEY'] = "mysecret"

    # Create Server using socket and fix cors errors
    socketIo = SocketIO(app, cors_allowed_origins="*")

    # Using debus=True We do not need to start
    # server manually when we change the code
    app.debug = True

    # Hot to Localhost
    app.host = 'localhost'

    # When Some Client emit event Using message
    # name this funciton will call and send
    # that message to every client listen on Our server
    @socketIo.on("message")
    def handleMessage(msg):
        print(msg)
        send(msg, broadcast=True)
        return None

    socketIo.run(app)