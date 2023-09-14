from flask import Blueprint, render_template

views = Blueprint("views", __name__)


@views.route('/')
def index():
    return render_template("index.html")
    
@views.route('/veg-box')
def veg_box():
    return render_template("veg_box.html")