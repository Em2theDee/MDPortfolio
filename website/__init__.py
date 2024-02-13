from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
DB_NAME = "database.db"


def create_app():
    app = Flask(__name__)
    app.static_folder = 'static'
    app.config["SECRET_KEY"] = "secret-key"

    from .views import views

    app.register_blueprint(views, url_prefix="/")

    return app




