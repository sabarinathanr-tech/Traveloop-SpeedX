from flask import Blueprint, request, jsonify

activity_bp = Blueprint('activity', __name__)

@activity_bp.route('/activities', methods=['GET'])
def get_activities():
    return jsonify({'message': 'List activities'})

@activity_bp.route('/activities', methods=['POST'])
def create_activity():
    data = request.get_json() or {}
    return jsonify({'message': 'Create activity', 'data': data})
