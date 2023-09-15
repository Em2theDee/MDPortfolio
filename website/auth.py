from flask import Blueprint, render_template, redirect, url_for, request, flash, session
from website import db
from website.models import User

auth = Blueprint("auth", __name__)


@auth.route('login', methods=['GET', 'POST'])
def login():
    if session.get("admin"):
        return redirect(url_for('views.dashboard'))
    
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == "admin" and password == "admin":
            session["admin"] = True
            return redirect(url_for('views.dashboard'))
        else:
            flash('Invalid username or password.')
    return render_template('login.html')


@auth.route('/logout', methods=['POST'])
def logout():
    # Change the session value here
    session['admin'] = False
    return redirect(url_for('views.index'))


# @auth.route('login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         username = request.form['username']
#         password = request.form['password']
#         user = User.query.filter_by(username=username).first()
#         if user and user.check_password(password):
#             session['user_id'] = user.id
#             flash('Login successful.')
#             return redirect(url_for('dashboard'))
#         else:
#             flash('Invalid username or password.')
#     return render_template('login.html')
