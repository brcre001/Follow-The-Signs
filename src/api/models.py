import os, datetime
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    join_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "username": self.username,
            # "email": self.email,
            # Decided not to serialize email for security purposes
            # do not serialize the password, its a security breach
            "is_active": self.is_active,
            "join_date": self.join_date
        }

class News(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    category = db.Column (db.String(120), unique=False, nullable=False)
    imageURL = db.Column(db.String(300), unique=True, nullable=False)
    users_like = db.Column(db.Integer, unique=False, nullable=True)
    creation_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return '<News %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "imageURL": self.imageURL,
            "users_like": self.users_like,
            "creation_date": self.news_creation_date
        }

class Event(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    location = db.Column(db.String(120), unique=False, nullable=False)
    category = db.Column (db.String(120), unique=False, nullable=False)
    users_interested = db.Column(db.Integer, unique=False, nullable=True)
    users_attending = db.Column(db.Integer, unique=False, nullable=True)
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
            "users_interested": self.users_interested,
            "users_attending": self.users_attending,
            # "event_date": self.event_date,
            "creation_date": self.creation_date
        }

class Discussion(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    # comment = db.Column(db.ForeignKey('comment.id'))

    def __repr__(self):
        return '<Discussion %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
        }


# pivot_table = db.Table('Pivot',
#     db.Column('comment_id', db.Integer, db.ForeignKey('comment.id'), primary_key=True),
#     db.Column('dicussion_id', db.Integer, db.ForeignKey('discussion.id'), primary_key=True),
#     db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True)
# )

# class Page(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     tags = db.relationship('Tag', secondary=tags, lazy='subquery',
#         backref=db.backref('pages', lazy=True))

# class Tag(db.Model):
#     id = db.Column(db.Integer, primary_key=True)