from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

from .user_model import db

class Trip(db.Model):
    __tablename__ = 'trips'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(150), nullable=False)
    destination = db.Column(db.String(150), nullable=False)
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    stops = db.relationship('Stop', backref='trip', lazy=True)
    activities = db.relationship('Activity', backref='trip', lazy=True)

    def __repr__(self):
        return f'<Trip {self.title}>'
