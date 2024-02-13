from flask import Blueprint, render_template, session, redirect, url_for

views = Blueprint("views", __name__)


@views.route('/')
def index():
    return render_template("index.html")

@views.route('/gallery')
def gallery():
    return render_template("gallery.html")

@views.route('/contact')
def contact():
    return render_template("contact.html")

@views.route('/about')
def about():
    return render_template("about.html")

@views.route('/apex')
def apex():
    return render_template("work_apex.html")

@views.route('/rvgd')
def rvgd():
    return render_template("work_rvgd.html")

@views.route('/krump')
def krump():
    return render_template("work_krump.html")
