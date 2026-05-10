from flask import Flask
from flask_cors import CORS

from config import db

from routes.auth_routes import auth_bp
from routes.trip_routes import trip_bp
from routes.budget_routes import budget_bp
from routes.activity_routes import activity_bp

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///traveloop.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

CORS(app)

# ROUTES
app.register_blueprint(auth_bp)
app.register_blueprint(trip_bp)
app.register_blueprint(budget_bp)
app.register_blueprint(activity_bp)

with app.app_context():
    db.create_all()


@app.route("/")
def home():

    return {
        "message": "Traveloop Backend Running"
    }


if __name__ == "__main__":
    app.run(debug=True)