from database.db import db

class Activity(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(100))

    location = db.Column(db.String(100))

    price = db.Column(db.String(50))