from flask import Blueprint, request, jsonify

trip_bp = Blueprint('trip', __name__)

@trip_bp.route('/trips', methods=['GET'])
def get_trips():
    return jsonify({'message': 'List trips'})

@trip_bp.route('/trips', methods=['POST'])
def create_trip():
    data = request.get_json() or {}
    return jsonify({'message': 'Create trip', 'data': data})
