import os, datetime
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

pivots = db.Table('pivots',
        db.Column('dicussion_id', db.Integer, db.ForeignKey('discussion.id'), primary_key=True),
        db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True)
    )

class User(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    join_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    pivots = db.relationship('Discussion', secondary=pivots, lazy='subquery',
        backref=db.backref('users', lazy=True))
    comments = db.relationship('Comment', backref='users', lazy=True)
    discussion_comments = db.relationship('DiscussionComment', backref='users', lazy=True)


    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "username": self.username,
            "email": self.email,
            # Decided not to serialize email for security purposes
            # do not serialize the password, its a security breach
            "is_active": self.is_active,
            "join_date": self.join_date,
            "comments": list(map(lambda comment: comment.serialize(), self.comments))
        }

class News(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=True)
    imageURL = db.Column(db.String(300), unique=False, nullable=False)
    pageURL = db.Column(db.String(300), unique=False, nullable=False)
    # users_like = db.Column(db.Integer, unique=False, nullable=True)
    creation_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    # category = db.Column (db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return self.title + ' ' + self.imageURL + ' ' + self.pageURL
        

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "imageURL": self.imageURL,
            "pageURL": self.pageURL,
            # "users_like": self.users_like,
            "creation_date": self.creation_date
        }

class Event(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    location = db.Column(db.String(120), unique=False, nullable=False)
    category = db.Column (db.String(120), unique=False, nullable=False)
    imageURL = db.Column(db.String(300), unique=False, nullable=False)
    pageURL = db.Column(db.String(300), unique=False, nullable=False)
    # event_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    creation_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return '<Event %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "location": self.location,
            "category": self.category,
            "imageURL": self.imageURL,
            "pageURL": self.pageURL,
            # "event_date": self.event_date,
            "creation_date": self.creation_date
        }

class Discussion(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    discussion_comments = db.relationship('DiscussionComment', backref='discussion', lazy=True)
    

    def __repr__(self):
        return '<Discussion %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "discussion_comments": list(map(lambda discussion_comments: discussion_comments.serialize(), self.discussion_comments))

        }

class Comment(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return '<Comment %r>' % self.body

    def serialize(self):
        return {
            "id": self.id,
            "body": self.body
        }

class DiscussionComment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    discussion_id = db.Column(db.Integer, db.ForeignKey('discussion.id'), nullable=False)

    def __repr__(self):
        return '<DiscussionComment %r>' % self.body

    def serialize(self):
        return {
            "id": self.id,
            "body": self.body,
            "user_id": self.user_id,
            "discussion_id": self.discussion_id,
        }