import os, datetime
from flask import Flask, request, jsonify, url_for, json
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from utils import APIException, generate_sitemap
from admin import setup_admin
from models import db, User
from datetime import datetime
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

db = SQLAlchemy()

class User(db.Model):
    # These are ATTRIBUTES
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    join_date = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)

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
    creation_date = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)

    def __repr__(self):
        return '<News %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "imageURL" = self.imageURL,
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
    # event_date = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    creation_date = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)

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
    comment = db.Column(db.ForeignKey('comment.id'))

    def __repr__(self):
        return '<Discussion %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
        }


pivot_table = Table('Pivot', Base.metadata,
    Column('Comment', ForeignKey('comment.id')),
    Column('Discussion', ForeignKey('discussion.id'))
    Column('User', ForeignKey('user.id'))
)

class Parent(Base):
    __tablename__ = 'left'
    id = Column(Integer, primary_key=True)
    children = relationship("Child",
                    secondary=association_table)

    comment_id = relationship(
        "Comment",
        secondary=pivot_table,
        back_populates="children")

class Child(Base):
    __tablename__ = 'right'
    id = Column(Integer, primary_key=True)

class Comments(db.Model):
    id = db.Column(dbInteger, primary_key=True)
    value = db.Column(db.String(120), unique=True, nullable=False)