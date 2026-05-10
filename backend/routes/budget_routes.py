from flask import Blueprint, jsonify

budget_bp = Blueprint("budget_bp", __name__)


@budget_bp.route("/budget-summary", methods=["GET"])
def budget_summary():

    return jsonify({
        "total_budget": 48000,
        "spent": 26000,
        "remaining": 22000
    })