from flask import Blueprint, request, jsonify

budget_bp = Blueprint('budget', __name__)

@budget_bp.route('/budgets', methods=['GET'])
def get_budgets():
    return jsonify({'message': 'List budgets'})

@budget_bp.route('/budgets', methods=['POST'])
def create_budget():
    data = request.get_json() or {}
    return jsonify({'message': 'Create budget', 'data': data})
