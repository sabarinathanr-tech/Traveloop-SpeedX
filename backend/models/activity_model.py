from flask_sqlalchemy import SQLAlchemy

from .user_model import db

class Activity(db.Model):
    __tablename__ = 'activities'

    id = db.Column(db.Integer, primary_key=True)
    trip_id = db.Column(db.Integer, db.ForeignKey('trips.id'), nullable=False)
    name = db.Column(db.String(150), nullable=False)
    category = db.Column(db.String(100))
    scheduled_at = db.Column(db.DateTime)
    notes = db.Column(db.Text)

    def __repr__(self):
        return f'<Activity {self.name}>'
