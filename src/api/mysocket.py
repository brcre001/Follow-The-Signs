from flask import Flask, render_template, request, redirect, url_for, session
from api.models import User
from flask_socketio import SocketIO, join_room, leave_room, emit, send
from flask_session import Session
from flask_jwt_extended import decode_token

def initialize_socket(app):
    app.config['SECRET_KEY'] = "mysecret"

    # THIS IS FOR SESSIONS
    # app.config['SESSION_TYPE'] = 'filesystem'

    # Create Server using socket and fix cors errors
    socketIo = SocketIO(app, cors_allowed_origins="*")

    # Using debug=True We do not need to start
    # server manually when we change the code
    app.debug = True

    # Host to Localhost
    app.host = 'localhost'

    # When Some Client emit event Using message
    # name this funciton will call and send
    # that message to every client listen on Our server
    @socketIo.on("message")
    def handleMessage(payload):
        print(payload)
        current_user_id = decode_token(payload['token'])
        user = User.query.filter_by(id=current_user_id['sub']).first()
        payload['username'] = user.username
        del payload['token']
        print(payload)
        send(payload, broadcast=True)
        return None

    socketIo.run(app)

# TRYING A ROUTE FOR MULTIPLE SESSIONS/ROOMS

# @app.route('/connections', methods=['GET', 'POST'])
# def chat():
#     if(request.method="POST"):
#         username = request.form['username']
#         room = request.form['room']
#         # Store the data in session
#         session['username'] = username
#         session['room'] = room
#         return render_template('chat.html', session = session)
#     else: if(session.get('username') is not None):
#         return render_template('chat.html', session = session)