"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, News, Event, Discussion, Comment, DiscussionComment
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from api.email_vaildation import send_mail
import datetime
api = Blueprint('api', __name__)
# app = Flask(__name__)

# ALL GET METHODS


@api.route('/user', methods=['GET'])
# @jwt_required()
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
# @jwt_required()
def news_handler():

    news = News.query.all()
    if news == False: return "Error Can't find news", 404
    news = list(map(lambda news: news.serialize(), news))

    return jsonify(news), 200

@api.route('/news', methods=["POST"])
def create_news():
    request_data = request.get_json()
    news = News(
        title=request_data['title'], imageURL=request_data['imageURL'],
        description=request_data['description'], pageURL=request_data['pageURL'])
    db.session.add(news)
    db.session.commit()
    return jsonify(news.serialize())

@api.route('/events', methods=['GET'])
# @jwt_required()
def event_handler():

    events = Event.query.all()
    if events == False: return "Error Can't find news", 404
    events = list(map(lambda events: events.serialize(), events))

    return jsonify(events), 200

@api.route('/events', methods=["POST"])
def create_events():
    request_data = request.get_json()
    event = Event(title=request_data['title'], imageURL=request_data['imageURL'],
        description=request_data['description'], pageURL=request_data['pageURL'])
    db.session.add(event)
    db.session.commit()
    return jsonify(event.serialize())

@api.route('/discussion/<int:position>', methods=['GET'])
@jwt_required()
def discussion_handler(position):

    discussion = Discussion.query.find_by(id=position).first()
    if discussion is not False: return "Error Can't find discuss", 404
    # payload = {id=position, discussion.serialize()}
    return jsonify(discussion), 200

@api.route('/discussions', methods=['GET'])
# @jwt_required()
def discussions_handler():
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
    # user_comment =User(comment=request_data['comment'], is_active=True)
    return jsonify(comments), 200

@api.route('/discussion_comment/<int:discussion_id>', methods=['GET'])
@jwt_required()
def discussion_comment_puller(discussion_id):
    discussion_comment = DiscussionComment.query.filter_by(discussion_id = discussion_id)
    if(discussion_comment is None):
        return "This discussion doesn't exist ", 400 
    discussion_comment = list(map(lambda discussion_comment: discussion_comment.serialize(), discussion_comment))

    return jsonify(discussion_comment)

@api.route('/discussion_comment/<int:discussion_id>', methods=['DELETE'])
@jwt_required()
def discussion_comment_delete(discussion_id):

    discussion_comment = DiscussionComment.query.get(discussion_id)
    
    db.session.delete(discussion_comment)
    db.session.commit()
    discussions = Discussion.query.all()
    discussions = list(map(lambda discussion: discussion.serialize(), discussions))

    return jsonify(discussions), 200

    

@api.route('/discussion_comment/<int:discussion_id>', methods=['POST'])
@jwt_required()
def discussion_comment_handler(discussion_id):
    request_data = request.get_json()
    current_user_id = get_jwt_identity()
    me = User.query.filter_by(id=current_user_id).first()
    discussion_comment = DiscussionComment(body=request_data['comment'], discussion_id=discussion_id, user_id=me.id, username=me.username)
    db.session.add(discussion_comment)
    db.session.commit()
   
    return jsonify("Success in posting comment"), 200

# @api.route('/comment', methods=["POST"])
# @jwt_required()
# def user_comment_handler():
#     request_data = request.get_json()

#     user_comment = =User(comment=request_data['comment'], is_active=True)
    

#     return jsonify(user_comment.serialize())

# ALL POST METHODS

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None).lower()
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id, expires_delta=datetime.timedelta(minutes=60))
    return jsonify({ "token": access_token, "user_id": user.id, "username": user.username })

@api.route('/user', methods=["POST"])
def create_user():
    request_data = request.get_json()
    new_user = User(full_name=request_data['full_name'], username=request_data['username'], email=request_data['email'].lower(), password=request_data['password'], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize())

@api.route('/discussions', methods=["POST"])
@jwt_required()
def create_discussion():
    request_data = request.get_json()
    new_discussions= Discussion(title=request_data['title'], description=request_data['description'],)
    db.session.add(new_discussions)
    db.session.commit()
    discussions = Discussion.query.all()
    if discussions == False: return "Error Can't find news", 404
    discussions = list(map(lambda discussions: discussions.serialize(), discussions))
    return jsonify(discussions), 200


# @api.route("/protected", methods=["GET"])
# @jwt_required()
# def protected():
#     # Access the identity of the current user with get_jwt_identity
#     current_user_id = get_jwt_identity()
#     user = User.filter.get(current_user_id)
    
#     return jsonify({"id": user.id, "username": user.username }), 200        