from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from website.views import page_not_found

db = SQLAlchemy()
DB_NAME = "database.db"


def create_app():
    app = Flask(__name__)
    app.static_folder = 'static'
    app.config["SECRET_KEY"] = "secret-key"

    from .views import views

    app.register_blueprint(views, url_prefix="/")

    app.register_error_handler(404, page_not_found)

    return app




