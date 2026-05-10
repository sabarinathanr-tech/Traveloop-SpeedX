from database.db import db

class Stop(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    city = db.Column(db.String(100))

    date = db.Column(db.String(100))

    activity = db.Column(db.String(100))