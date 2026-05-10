from flask import Blueprint, request, jsonify

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    return jsonify({'message': 'Login endpoint', 'data': data})

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json() or {}
    return jsonify({'message': 'Register endpoint', 'data': data})
