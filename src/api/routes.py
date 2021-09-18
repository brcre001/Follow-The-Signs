"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, News, Event, Discussion, Comment
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)
# app = Flask(__name__)

# ALL GET METHODS

@api.route('/user', methods=['GET'])
@jwt_required()
def get_all_users():

    users = User.query.all()
    if users == False: return "There are no users in the database.", 404
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200

@api.route('/me', methods=['GET'])
@jwt_required()
def get_me():
    current_user_id = get_jwt_identity()
    me = User.query.filter_by(id=current_user_id).first()
    return jsonify(me.serialize()), 200

@api.route('/news', methods=['GET'])
@jwt_required()
def news_handler():

    news = News.query.all()
    if news == False: return "Error Can't find news", 404
    news = list(map(lambda news: news.serialize(), news))

    return jsonify(news), 200

@api.route('/event', methods=['GET'])
@jwt_required()
def event_handler():

    events = Event.query.all()
    if events == False: return "Error Can't find news", 404
    events = list(map(lambda events: events.serialize(), events))

    return jsonify(events), 200   

@api.route('/discussion', methods=['GET'])
@jwt_required()
def discussion_handler():

    discussions = Discussion.query.all()
    if discussions == False: return "Error Can't find news", 404
    discussions = list(map(lambda discussions: discussions.serialize(), discussions))

    return jsonify(discussions), 200

@api.route('/comment', methods=['GET'])
@jwt_required()
def comment_handler():

    comments = Comment.query.all()
    if comments == False: return "Error Can't find news", 404
    comments = list(map(lambda comments: comments.serialize(), comments))

    return jsonify(comments), 200

# ALL POST METHODS

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/user', methods=["POST"])
def create_user():
    request_data = request.get_json()
    new_user = User(full_name=request_data['full_name'], username=request_data['username'], email=request_data['email'], password=request_data['password'], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize())

# @api.route("/protected", methods=["GET"])
# @jwt_required()
# def protected():
#     # Access the identity of the current user with get_jwt_identity
#     current_user_id = get_jwt_identity()
#     user = User.filter.get(current_user_id)
    
#     return jsonify({"id": user.id, "username": user.username }), 200        