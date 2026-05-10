from flask import Blueprint, jsonify

activity_bp = Blueprint("activity_bp", __name__)


@activity_bp.route("/activities", methods=["GET"])
def get_activities():

    activities = [
        "Beach Walk",
        "Water Sports",
        "Temple Visit",
        "Cafe Hopping",
        "Trekking",
        "Night Market"
    ]

    return jsonify(activities)