from flask import Blueprint, render_template, session, redirect, url_for

views = Blueprint("views", __name__)


@views.route('/')
def index():
    return render_template("index.html")
    
@views.route('/veg-box')
def veg_box():
    return render_template("veg_box.html")


@views.route('dashboard')
def dashboard():
    print(session.get("admin"))
    if session.get("admin"):
        return render_template('dashboard.html')
    else:
        return redirect(url_for('auth.login'))