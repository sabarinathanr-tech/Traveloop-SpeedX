from flask_sqlalchemy import SQLAlchemy

from .user_model import db

class Stop(db.Model):
    __tablename__ = 'stops'

    id = db.Column(db.Integer, primary_key=True)
    trip_id = db.Column(db.Integer, db.ForeignKey('trips.id'), nullable=False)
    location = db.Column(db.String(150), nullable=False)
    arrival_date = db.Column(db.Date)
    departure_date = db.Column(db.Date)
    notes = db.Column(db.Text)

    def __repr__(self):
        return f'<Stop {self.location}>'
