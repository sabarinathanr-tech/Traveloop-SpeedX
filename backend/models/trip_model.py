from config import db


class Trip(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(100), nullable=False)

    destination = db.Column(db.String(100), nullable=False)

    start_date = db.Column(db.String(50))

    end_date = db.Column(db.String(50))

    budget = db.Column(db.String(50))