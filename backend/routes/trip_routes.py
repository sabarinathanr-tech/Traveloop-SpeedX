from flask import Blueprint, request, jsonify
from models.trip_model import Trip
from config import db

trip_bp = Blueprint("trip_bp", __name__)


# CREATE TRIP
@trip_bp.route("/trips", methods=["POST"])
def create_trip():

    data = request.get_json()

    new_trip = Trip(
        title=data.get("title"),
        destination=data.get("destination"),
        start_date=data.get("start_date"),
        end_date=data.get("end_date"),
        budget=data.get("budget"),
    )

    db.session.add(new_trip)
    db.session.commit()

    return jsonify({
        "message": "Trip created successfully"
    }), 201


# GET ALL TRIPS
@trip_bp.route("/trips", methods=["GET"])
def get_trips():

    trips = Trip.query.all()

    result = []

    for trip in trips:

        result.append({
            "id": trip.id,
            "title": trip.title,
            "destination": trip.destination,
            "start_date": trip.start_date,
            "end_date": trip.end_date,
            "budget": trip.budget
        })

    return jsonify(result), 200