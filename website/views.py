from flask import Blueprint, render_template, session, redirect, url_for

views = Blueprint("views", __name__)


@views.route('/')
def index():
    return render_template("index.html")